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
# result: [Print in Dockerfile Scope beginning]1., 2., 3.VAR_IN_JOB1, 4., 5., 6. 7., 8.

# declare arg,on by this it can read args from `build-args:` setting in  environment.yml, as well as `--build-arg` in docker build command
ARG BUILD_ARG1

# set var in dockerfile scope, `"` is required
ENV VAR_IN_DOCKERFILE="<var in dockerfile>"

RUN echo "[Print Dockerfile args/env]1.$BUILD_ARG1, 2.$VAR_IN_DOCKERFILE"
# [Print Dockerfile args/env]1.<arg1 in build-args>, 2.<var in dockerfile>


# through --mount, env=SECRETS1_TO_ENV means the secret will be exported to env
RUN --mount=type=secret,id=SECRETS1,env=SECRETS1  --mount=type=secret,id=SECRET_ENV_1\
    echo $SECRETS1_TO_ENV &&  ls /run/secrets && npm run print-var
# result:
# <secrets1 in secrets>
# SECRET_ENV_1
#
# [script Print in Dockerfile]:
# VAR_IN_REPO : undefined
# SECRET_IN_REPO : undefined
# VAR_IN_JOB1 : undefined
# VAR_IN_STEP1 : undefined
# VAR_IN_RUN : undefined
# BUILD_ARG1 : <arg1 in build-args>
# SECRETS1 : <secrets1 in secrets>
# SECRET_ENV_1 : undefined
# VAR_IN_DOCKERFILE : <var in dockerfile>

# let's see outside RUN --mount, can env SECRETS1_TO_ENV be access in Dockerfile scope?
RUN echo $SECRETS1_TO_ENV
# the answer is: not


# let's see if bind env SECRET1_TO_ENV and run in one RUN command, can it be access?
RUN npm run print-var
#  [script Print in Dockerfile]:
#  VAR_IN_REPO : undefined
#  SECRET_IN_REPO : undefined
#  VAR_IN_JOB1 : undefined
#  VAR_IN_STEP1 : undefined
#  VAR_IN_RUN : undefined
#  BUILD_ARG1 : <arg1 in build-args>
#  SECRETS1 : undefined
#  SECRET_ENV_1 : undefined
#  VAR_IN_DOCKERFILE : <var in dockerfile>


RUN --mount=type=secret,id=SECRET_ENV_1,env=SECRET_ENV_1 \
        npm run print-var
# the answer is: yes
# result
# [script Print in Dockerfile]:
# VAR_IN_REPO : undefined
# SECRET_IN_REPO : undefined
# VAR_IN_JOB1 : undefined
# VAR_IN_STEP1 : undefined
# VAR_IN_RUN : undefined
# BUILD_ARG1 : <arg1 in build-args>
# SECRETS1 : undefined
# SECRET_ENV_1 : <var in step2>
# VAR_IN_DOCKERFILE : <var in dockerfile>


