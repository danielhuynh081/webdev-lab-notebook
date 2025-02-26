pipeline {
    agent any
    
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/danielhuynh081/WebLabNotebook.git'
            }
        }
        stage('Validate HTML') {
            steps {
                echo 'Validating HTML files...'
                sh 'npm install -g html-validator-cli'   // Installs a validator tool
                sh 'html-validator --file index.html'   // Validates your HTML file
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                // If you need to compile assets or minify files, add those commands here
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add any frontend testing tools here, like Jest or Cypress
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Example: Deploy to GitHub Pages or an FTP server
                // sh 'rsync -avz . user@yourserver.com:/path/to/deploy'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
        }
    }
}

