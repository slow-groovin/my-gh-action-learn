const envKeys=['VAR_IN_REPO', 'SECRET_IN_REPO', 'VAR_IN_JOB1', 'VAR_IN_STEP1', 'VAR_IN_RUN']
console.log('[script Print in action]:')
envKeys.forEach(key=>{
    console.log(key,":",process.env[key])
})

/*
result:
[script Print in action]:
VAR_IN_REPO : <var in repo>
SECRET_IN_REPO : ***
VAR_IN_JOB1 : <var in job1>
VAR_IN_STEP1 : undefined
VAR_IN_RUN : <var in run>
*/