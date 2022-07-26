async function myEncrypt(text) {

    // ************************ //
    let data = await fetch(`${SERVER}key`);
    let json = await data.json();

    var cipher = CryptoJS.AES.encrypt(text, json.key);
    cipher = cipher.toString();
    return cipher;

  }