"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cryptojs = require("crypto-js");
var dotenv = require("dotenv");
dotenv.config();
var key = process.env.SECRET_KEY;
var textToBeEncrypted = 'This is awesome';
var encryptedOutput = cryptojs.AES.encrypt(textToBeEncrypted, key);
var decryptedOutput = cryptojs.AES.decrypt(encryptedOutput.toString(), key);
var plainTextOutput = decryptedOutput.toString(cryptojs.enc.Utf8);
console.log(plainTextOutput);