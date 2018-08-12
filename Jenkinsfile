node {
    stage('check tools') {
        sh "node -v"
        sh "npm -v"
    }

    stage('checkout') {
        checkout scm
    }

    stage('npm install') {
        sh "npm install"
    }

    stage('ng build') {
        sh "ng build --prod"
    }

    stage('Deploy to production ?') {
        timeout(time: 1, unit: 'HOURS') {
            input 'Deploy to Production?'
        }
    }

    stage('deploy') {
        sh "cp -R dist/* /home/jenkins/prod/front"
    }
}
