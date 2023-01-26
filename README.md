# NODEJS APP DOCKERISED AND  PIPELINED WITH JENKINS 

## Jenkins server contains 

### free style job to build the nodeapp pipeline after push on github
### pipeline job that builds docker image and pushes to docker registry once nodeapp build is completed 
### whatever the response will be notified to slack app


## Tested on AWS EC2 Instance

## If you recreate make sure 

### ssh rsa keys are configured properly with github and jenkins -> (private key with jenkins and public key with github)
### plugins installed for slack , github , pipeline , nodejs
### jenkins have ssh permission with github
### credentials involved -> github login(private key) , slack token , dockerhub




