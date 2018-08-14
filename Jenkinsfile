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
      emailext (
          subject: "Deployment in production: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
          body: """<p>Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' will be deployed</p>
            <p>Check console output at "<a href="${env.BUILD_URL}">${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>"</p>""",
          recipientProviders: [[$class: 'DevelopersRecipientProvider']]
        )
        sh "cp -R dist/* /home/jenkins/prod/front"
    }
}
