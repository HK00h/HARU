const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org"
);

const address = "0x80b1685d5Ce12b9e1C0bB658F9190A27d791a02C";

async function main() {
  const network = await provider.getNetwork();
  const balance = await provider.getBalance(address);

  console.log("Network:", network.name);
  console.log("Chain ID:", network.chainId.toString());
  console.log("Wallet:", address);
  console.log("BNB balance:", ethers.formatEther(balance));
}

main().catch(console.error);
