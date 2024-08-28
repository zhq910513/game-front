import CryptoJS from 'crypto-js';

const secretKey = "5d41402abc4b2a76b9719d911017c592";

// 加密函数
export function encryptData(data) {
    try {
        // 将数据转换为字符串，如果是对象则转换为 JSON 字符串
        let jsonData = typeof data === 'string' ? data : JSON.stringify(data);
        
        // 使用 AES 加密数据
        let cipherText = CryptoJS.AES.encrypt(jsonData, CryptoJS.enc.Utf8.parse(secretKey), {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        }).toString();

        // 将加密后的数据进行 Base64 编码
        return cipherText;
    } catch (error) {
        console.error('加密失败:', error);
        return null;
    }
}

// 解密函数
export function decryptData(encryptedData) {
    try {
        // 使用 AES 解密数据
        let bytes = CryptoJS.AES.decrypt(encryptedData, CryptoJS.enc.Utf8.parse(secretKey), {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });

        // 解码解密后的数据
        let decryptedData = bytes.toString(CryptoJS.enc.Utf8);

        // 如果解密后的数据是 JSON 格式的字符串，尝试将其转换为对象
        return JSON.parse(decryptedData);
    } catch (error) {
        console.error('解密失败:', error);
        return null;
    }
}
