const {createCanvas} = require("canvas");
const canvas = createCanvas(256, 256);
const ctx = canvas.getContext("2d");

console.log(process.env.INPUT);
console.log(ctx);