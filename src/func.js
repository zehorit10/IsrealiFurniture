import CryptoJS from 'crypto-js';
import axios from './api/axios';

export async function myEncrypt(text) {
  let json = await axios.get('key');
  var cipher = CryptoJS.AES.encrypt(text, json.key);
  cipher = cipher.toString();
  return cipher;
}

export function formatDate(date = new Date()) {
  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  let year = date.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [day, month, year].join('/');
}