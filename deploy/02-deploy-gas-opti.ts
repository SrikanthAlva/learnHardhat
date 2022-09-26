import { DeployFunction } from "hardhat-deploy/dist/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains, WAIT_CONFIRMATIONS } from "../helper-hardhat-config"
import verify from "../utils/verify"

const deployGasOpti: DeployFunction = async (
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

    const GasOpti = await deploy("GasOpti", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: confirmations,
    })

    log(`Deployment Successful!`)

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verify(GasOpti.address, args)
    }
}

export default deployGasOpti
deployGasOpti.tags = ["all", "gasopti"]
