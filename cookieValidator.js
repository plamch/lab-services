async function externallyValidateCookie(cookie) {
    console.log(cookie)
}

async function cookieValidator(cookies) {
    try {
        await externallyValidateCookie(cookies.Cookie_1)
    } catch {
        throw new Error('Invalid cookies')
    }
}

module.exports = cookieValidator
