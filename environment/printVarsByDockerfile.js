const envKeys=['VAR_IN_REPO', 'SECRET_IN_REPO', 'VAR_IN_JOB1', 'VAR_IN_STEP1', 'VAR_IN_RUN','BUILD_ARG1','SECRETS1','SECRET_ENV_1','VAR_IN_DOCKERFILE']
console.log('[script Print in Dockerfile]:')
envKeys.forEach(key=>{
    console.log(key,":",process.env[key])
})
/*
result:

*/