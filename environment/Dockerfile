FROM ubuntu:latest
LABEL authors="slow-groovin"
LABEL org.opencontainers.image.description="demonstrate environment variables/secrets of different stage, different aspect"

FROM node:20.16.0-alpine3.20

WORKDIR /app
ENTRYPOINT ["node","index.js"]


COPY . .



# print vars in Dockerfile Scope
RUN echo "[Print in Dockerfile Scope beginning]1.$VAR_REPO, 2.$SECRET_IN_REPO, 3.VAR_IN_JOB1, 4.$VAR_IN_STEP1, 5.$VAR_IN_RUN, 6.$BUILD_ARG1 \
7.$SECRETS1, 8.$SECRET_ENV_1"


# declare arg,on by this it can read args from `build-args:` setting in  environment.yml, as well as `--build-arg` in docker build command
ARG BUILD_ARG1

# set var in dockerfile scope, `"` is required
ENV VAR_IN_DOCKERFILE="<var in dockerfile>"

RUN echo "[Print Dockerfile args/env]1.$BUILD_ARG1, 2.$VAR_IN_DOCKERFILE"

# through --mount, env=SECRETS1_TO_ENV means the secret will be exported to env
RUN --mount=type=secret,id=SECRETS1,env=SECRETS1_TO_ENV \
    echo $SECRETS1_TO_ENV

# let's see outside RUN --mount, can env SECRETS1_TO_ENV be access in Dockerfile scope?
RUN echo $SECRETS1_TO_ENV
# the answer is: not

npm run print-var





