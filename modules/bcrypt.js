 
const { hash, genSalt, compare } = require("bcrypt")


async function generateCrypt(data) {
    const salt = await genSalt(10);
    return  hash(data, salt);
}


async function compareHash(hash, data) {
    return compare(data, hash)
}


module.exports= {
    generateCrypt,
    compareHash,
}