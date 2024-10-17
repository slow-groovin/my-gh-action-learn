const envKeys=['VAR_REPO', 'SECRET_IN_REPO', 'VAR_IN_JOB1', 'VAR_IN_STEP1', 'VAR_IN_RUN','BUILD_ARG1','SECRETS1','SECRET_ENV_1']
console.log('[Print in action running by script]:',process.env)
envKeys.forEach(key=>{
    console.log(key,":",process.env[key])
})