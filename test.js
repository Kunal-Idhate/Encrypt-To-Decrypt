function decryptText(encryptedText, key) {
    let decryptedText = '';
    for (let i = 0; i < encryptedText.length; i++) {
        let encryptedChar = encryptedText[i];
        if (/[A-Za-z]/.test(encryptedChar)) {
            let keyIndex = i % key.length;
            let keyChar = key[keyIndex].toUpperCase();
            let distance = keyChar.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
            let decryptedCharCode = ((encryptedChar.charCodeAt(0) - 'A'.charCodeAt(0) - distance + 26) % 26) + 'A'.charCodeAt(0);
            decryptedText += String.fromCharCode(decryptedCharCode);
        } else {
            decryptedText += encryptedChar;
        }
    }
    return decryptedText;
}


let encryptedText = "FTDTZJAOJPYSFFUMXHBCCCKSPSFZKSCNYBTBITYJ";
let key = "DFQNIJHUYPFKRSCOJNZOQNZOWOCGDOCVGTNOWPLQ";


let decryptedText = decryptText(encryptedText, key);
console.log("Decrypted Text:", decryptedText);
