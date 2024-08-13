// Encryption function
function encrypt() {
    var plaintext = document.getElementById("inputText").value;
    var key = parseInt(document.getElementById("key").value);

    var encryptedText = "";

    for (var i = 0; i < plaintext.length; i++) {
        var char = plaintext.charCodeAt(i);

        // Encrypt only alphabetic characters
        if (char >= 65 && char <= 90) {
            encryptedText += String.fromCharCode((char - 65 + key) % 26 + 65); // Uppercase letters
        } else if (char >= 97 && char <= 122) {
            encryptedText += String.fromCharCode((char - 97 + key) % 26 + 97); // Lowercase letters
        } else {
            encryptedText += plaintext.charAt(i); // Non-alphabetic characters remain unchanged
        }
    }

    document.getElementById("encryptedText").value = encryptedText;
}

// Decryption function
function decrypt() {
    var encryptedText = document.getElementById("inputEncryptedText").value;
    var key = parseInt(document.getElementById("decryptionKey").value);

    var decryptedText = "";

    for (var i = 0; i < encryptedText.length; i++) {
        var char = encryptedText.charCodeAt(i);

        // Decrypt only alphabetic characters
        if (char >= 65 && char <= 90) {
            decryptedText += String.fromCharCode((char - 65 - key + 26) % 26 + 65); // Uppercase letters
        } else if (char >= 97 && char <= 122) {
            decryptedText += String.fromCharCode((char - 97 - key + 26) % 26 + 97); // Lowercase letters
        } else {
            decryptedText += encryptedText.charAt(i); // Non-alphabetic characters remain unchanged
        }
    }

    document.getElementById("decryptedText").value = decryptedText;
}
