pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    registry = 'sadath17/node-app-1'
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t $registry .'
      }
    }
    stage('Login') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
          sh 'echo $PASSWORD | docker login -u $USERNAME --password-stdin'
        }
      }
    }
    stage('Push') {
      steps {
        sh 'docker push $registry'
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}
