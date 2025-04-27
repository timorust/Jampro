pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "timor1/jampro"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/timorust/Jampro.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker_hub', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                    }
                }
                echo "Logged in to Docker Hub successfully!"
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    sh 'docker push $DOCKER_IMAGE:$DOCKER_TAG'
                }
            }
        }

        stage('Deploy with Ansible') {
            steps {
                script {
                    // Determining the next container color based on running containers
                    def nextColor = sh(script: "docker ps --filter 'name=jampro-app-blue' --filter 'status=running' -q | grep . && echo green || echo blue", returnStdout: true).trim()
                    echo "Next deployment color: ${nextColor}"

                    // Running the Ansible playbook with the next_color variable
                    sh "ansible-playbook ansible/deploy.yml -i ansible/inventory.ini --extra-vars \"next_color=${nextColor} active_port=${active_port}\""
                }
            }
        }
    }
}
