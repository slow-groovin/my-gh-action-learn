# practice github action

## branch `main`
all workflows
## branch `artifact`
generate artifact and use in multiple jobs
## branch `native-graalvm`
use graalvm/setup-graalvm@v1 to build native java spring executable 
## branch `maven-package`
two projects to:
1. manually deploy `.jar`to github package
2. (with action)auto deploy  `.jar` to github package

## branch `docker`
build docker image and push to gh registry for maven and node app
## branch curl-api
curl api in actions