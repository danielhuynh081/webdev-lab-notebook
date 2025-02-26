pipeline {
    agent any
    
    stages {
        stage('Clone Repository') {
            steps {
		    git branch: 'main', url: 'https://github.com/danielhuynh081/WebLabNotebook.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
            }
        }
    }
}

