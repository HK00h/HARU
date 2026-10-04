import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying from:", deployer.address);

  const HARU = await ethers.getContractFactory("HARU");
  const haru = await HARU.deploy();

  await haru.waitForDeployment();

  console.log("HARU deployed to:", await haru.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
