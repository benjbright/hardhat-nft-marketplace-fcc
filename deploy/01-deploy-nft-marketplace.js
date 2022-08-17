const { network } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    let args = []

    const nftMarketplace = await deploy("NftMarketplace", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        log("Verifying...")
        await verify(nftMarketplace.address, args)
    }

    log("----------------------------")
}

module.exports.tags = ["all", "nftmarketplace"]

// NFT Marketplace contract deployed to Rinkeby test network - address:
// 0xAF832a1ed9a7C62983BA812B3c97a938eD2b77f7

// BasicNFT contract deployed to Rinkeby test network - address:
// 0x8E4d5bd6ac29A36cCf22E822fC040fE6299ce108
