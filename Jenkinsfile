pipeline{
    environment {
    imagename = "bookingengine"
    dockerImage = ''
  }
    agent any
    stages {
       
        stage('CheckOut'){
            steps {
                git branch: 'main', url: 'https://github.com/MS396584/BookingEngine.git'
            }
        }
      
        
         stage('Build'){
           steps{
             script{
                 sh 'docker build -t bookingengine .'
                   }
                }
           }
        
        
       stage('Sonar Analysis'){
            steps {
                 withSonarQubeEnv("scan") {
                 sh "${tool("scan")}/bin/sonar-scanner \
                     -Dsonar.projectKey=Booking \
                     -Dsonar.projectName=BookingEngine \
                     -Dsonar.sources=server/"
                                       }
                 }
           }
        stage('nexus'){
            steps{
                def buildnumber = currentBuild.number
                sh 'docker tag bookingengine localhost:8095/booking/bookingengine:${buildnumber}'
                sh 'docker login -u admin -p admin123 localhost:8095'
                sh 'docker push localhost:8095/booking/bookingengine:${buildnumber}'
            }
        }
        stage('run the container'){
            steps{
                sh 'docker pull localhost:8095/booking/bookingengine:${buildnumber}'
                sh 'docker stop booking'
                sh 'docker rm booking'
                sh 'docker run -d --name booking -p 5000:5000 localhost:8095/booking/bookingengine:${buildnumber}'
            }
        }
    }
}
