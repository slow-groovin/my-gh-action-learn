const envKeys=['VAR_IN_REPO', 'SECRET_IN_REPO', 'VAR_IN_JOB1', 'VAR_IN_STEP1', 'VAR_IN_RUN']
console.log('[script Print in action]:')
envKeys.forEach(key=>{
    console.log(key,":",process.env[key])
})