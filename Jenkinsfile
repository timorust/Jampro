pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "timor1/jampro"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/timorust/Jampro.git', branch: 'main', credentialsId: 'docker_hub'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
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
                withCredentials([usernamePassword(credentialsId: 'docker_hub', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $DOCKER_IMAGE:$DOCKER_TAG'
            }
        }

        stage('Deploy to Kubernetes with Ansible') {
            steps {
                sh 'ansible-playbook deploy.yml'
            }
        }
    }
}
