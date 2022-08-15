// import countries from './index'
const countries = require("./index.js")

const nome = process.argv[2]

const anos = Number(process.argv[3])


console.log("Ola",nome,"! Voce tem", anos, "anos. Em sete anos voce vai ter ",anos + 7 )