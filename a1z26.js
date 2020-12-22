let plaintext = "testing";
let separator = "-";
let alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(plaintext, separator) {
    plaintext = plaintext.toLowerCase();
    let encrypted = "";
    for (let j = 0; j < plaintext.length; j++) {
        for (let i = 0; i < alphabet.length; i++) {
            if(alphabet[i] === plaintext[j]) {
                encrypted += (i + 1).toString() + separator;
            }
        }
    }
    return encrypted.substring(0, encrypted.length - separator.length);
}

function decrypt(encrypted, separator) {
    encrypted = encrypted.toLowerCase();
    let split = encrypted.split(separator);
    let decrypted = "";
    for (let j = 0; j < split.length; j++) {
        for (let i = 0; i < alphabet.length; i++) {
            if((i + 1) == split[j]) {
                decrypted += alphabet[i];
            }
        }
    }
    return decrypted;
}

let encrypted = encrypt(plaintext, separator);
let decrypted = decrypt(encrypted, separator);
console.log(encrypted);
console.log(decrypted);