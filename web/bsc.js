import { ethers } from "ethers";

export const bscProvider = new ethers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org"
);
