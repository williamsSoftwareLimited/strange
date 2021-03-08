const ftp = require("basic-ftp")

ftping()

async function ftping() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: "ftp.codebehind.org",
            user: "frianfacks",
            password: "Htfhru9-",
            secure: false
        })
        console.log(await client.list())
        await client.ensureDir("/")
        //await client.clearWorkingDir()
        await client.uploadFromDir("./dist/strange-inauguration")
    }
    catch(err) {
        console.log(err)
    }
    client.close()
}
