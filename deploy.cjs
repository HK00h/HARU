const fs = require("fs");
const { ethers } = require("ethers");

const RPC_URL = "https://bsc-dataseed.binance.org";

const provider = new ethers.JsonRpcProvider(RPC_URL);

const abi = JSON.parse(
  fs.readFileSync("./contracts_HARU_sol_HARU.abi", "utf8")
);

const bytecode =
  "0x" +
  fs.readFileSync("./contracts_HARU_sol_HARU.bin", "utf8").trim();

console.log("ABI loaded:", abi.length, "entries");
console.log("Bytecode loaded:", bytecode.length, "characters");
console.log("Connected to BSC");
