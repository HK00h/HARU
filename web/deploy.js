import { ethers } from "ethers";
import HARU_ABI from "./HARU.abi.json";

export async function deployHARU(appKit) {
  if (!appKit) {
    throw new Error("Wallet connection not available");
  }

  const walletProvider = appKit.getWalletProvider();

  if (!walletProvider) {
    throw new Error("Please connect MetaMask first");
  }

  const provider = new ethers.BrowserProvider(walletProvider);
  const signer = await provider.getSigner();

  const network = await provider.getNetwork();

  if (network.chainId !== 56n) {
    throw new Error("Please switch MetaMask to BNB Smart Chain");
  }

  const response = await fetch("/HARU.bin");
  const bytecode = "0x" + (await response.text()).trim();

  const factory = new ethers.ContractFactory(
    HARU_ABI,
    bytecode,
    signer
  );

  console.log("Gas settings: 1100000 @ 0.05 gwei");
  const contract = await factory.deploy({ gasLimit: 1100000, gasPrice: ethers.parseUnits("0.05", "gwei") });

  console.log(
    "Deployment transaction:",
    contract.deploymentTransaction().hash
  );

  await contract.waitForDeployment();

  const address = await contract.getAddress();

  console.log("HARU deployed at:", address);

  return address;
}
