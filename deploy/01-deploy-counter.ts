import { DeployFunction } from "hardhat-deploy/dist/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains, WAIT_CONFIRMATIONS } from "../helper-hardhat-config"

const deployCounter: DeployFunction = async (
    hre: HardhatRuntimeEnvironment
) => {
    const { getNamedAccounts, network, ethers, deployments } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const args: any[] = []

    log("Start Deployment")

    const confirmations = developmentChains.includes(network.name)
        ? 1
        : WAIT_CONFIRMATIONS

    const counter = await deploy("Counter", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: confirmations,
    })

    log(`Deployment Successful!`)
}

export default deployCounter
deployCounter.tags = ["all", "counter"]
