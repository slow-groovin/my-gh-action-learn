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
1. build spring project docker image , tag it with `artifactId` and push to `ghcr.io`
2. build node project docker image, tag it with version and push to `ghcr.io`

> for java/spring/maven, it's a huge difficult work

## branch `nuxt-docker`
nuxt(3.x) project: build to output, build output to an image, tag&push it docker image
- with secrets in build stage


## branch `enviroment`
setting and print environment variables/secrets of different scope/aspect , 
aiming at demonstrate github action's environment variables/secrets apparently for review and review

scope:
1. action scope
2. Dockerfile scope
3. running script scope

## branch `curl-api'
curl some github api in action 
build docker image and push to gh registry for maven and node app