const { log } = require('console')
const os = require('os')

//info about current user
const user = os.userInfo()

//method returns the system up time in seconds
console.log(`System uptime: ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}

console.log(currentOS);