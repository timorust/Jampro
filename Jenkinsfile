pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "timor1/jampro"
        DOCKER_TAG = "latest"
        VENV_PATH = "/var/lib/jenkins/.ansible-venv" 
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/timorust/Jampro.git', branch: 'main', credentialsId: 'docker_hub'
            }
        }

        stage('Create Virtual Environment') {
            steps {
                script {
                    echo "🔧 Preparing Ansible environment..."
                    if (!fileExists(VENV_PATH)) {
                        sh "python3 -m venv ${VENV_PATH}"
                        sh "${VENV_PATH}/bin/pip install --upgrade pip"
                        sh "${VENV_PATH}/bin/pip install ansible kubernetes"
                    } else {
                        echo "✅ Virtual environment already exists"
                    }

                    sh "${VENV_PATH}/bin/ansible-galaxy collection install kubernetes.core --force"
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    if (fileExists('package.json')) {
                        echo "📦 Installing NPM dependencies..."
                        sh 'npm install'  
                    } else {
                        echo "⚠️ package.json not found, skipping npm install"
                    }
                }
            }
        }

        stage('Build React App') {
            steps {
                script {
                    if (fileExists('package.json')) {
                        echo "🛠️ Building React App..."
                        sh 'npm run build'
                    } else {
                        echo "⚠️ React source not found, skipping build"
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "🐳 Building Docker image..."
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker_hub', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    echo "📤 Pushing Docker image to Docker Hub..."
                    try {
                        sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    } catch (Exception e) {
                        echo "⚠️ Warning: Docker push failed, but continuing pipeline. Error: ${e.getMessage()}"
                    }
                }
            }
        }

        stage('Deploy to Kubernetes with Ansible') {
            steps {
                script {
                    echo "🚀 Running full Ansible playbook..."
                    withEnv(["PATH=${VENV_PATH}/bin:$PATH", "KUBECONFIG=/home/jenkins/.kube/config"]) {
                        dir('ansible') {
                            sh "${VENV_PATH}/bin/ansible-playbook -i inventory.ini site.yml"
                        }
                    }
                }
            }
        }

        stage('Clean Up Docker Images') {
            steps {
                script {
                    echo "🧹 Cleaning up local Docker images..."
                    sh "docker rmi ${DOCKER_IMAGE}:${DOCKER_TAG} || true"
                }
            }
        }
    }
}
