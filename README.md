# hardhat-nft-marketplace-fcc
 FreeCodeCamp blockchain course - Lesson 15 Hardhat NFT Marketplace

## Timestamps and notes
- NOTE copy in the package.json from Lesson 9 and hardhat.config from Lesson 14
1. Create a decentralized NFT marketplace
- 'listItem': list NFT's on the market place
- 'buyItem': Buy the NFT's
- 'cancelItem': Cancel a listing
- 'updateListing': Update price
- 'withdrawProceeds': withdraw payment 

23:46 NftMarketplace.sol
- ```yarn add --dev @openzeppelin/contracts```
- Challenge on ```listItem``` function - have the contract accept payment in a subset of tokens as well
- Hint: Use Chainlink price feeds to convert the price of the tokens 
- use the ```safeTransferFrom``` function for better safety 

1:00:06 Reentrancy Attacks
- Call any external contract as the last function or step in the transaction
- Do your state changes first and then call external contracts
- Example contracts and solutions - https://solidity-by-example.org/hacks/re-entrancy/
- Can also use the openzeppelin ```ReentrancyGuard.sol``` modifier contract

1:00:26 Deploy scripts and testing





