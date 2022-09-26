# Local Smart Contract Development with Hardhat

Ubuntu Subsytem

1. mkdir GlobalLogic
2. cd GlobalLogic
3. mkdir learnHardhat
4. cd learnHardhat
5. code .

Install WSL: Remote Extension on VS Code

1. npm install --save-dev hardhat
2. npx hardhat
3. npm install --save-dev dotenv prettier prettier-plugin-solidity solhint @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers hardhat-deploy hardhat-contract-sizer
   4.npm install -g hardhat-shorthand

4. yarn init -y
5. yarn add --dev hardhat
6. yarn hardhat // Choose Typescript Project
7. Do you want to install additional packages? Yes
8. yarn add --dev dotenv prettier prettier-plugin-solidity solhint @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers hardhat-deploy hardhat-contract-sizer
9. yarn global add hardhat-shorthand

Delete Lock.sol, Deploy.ts and Lock.test.ts

Install VS Code Extensions

1. Prettier- Code Formatter by Prettier
2. Solidity by Nomic Foundation

CTRL + SHIFT + P or COMMAND+SHIFT+P
Type settings
Select Open User Settings(JSON)
Update Settings.json with vscode_settings.json

Create .prettierrc and .prettierignore
Copy content to .prettierrc

```
{
"useTabs": false,
"semi": false,
"singleQuote": false,
"tabWidth": 4
}
```

Copy content to .prettierignore

```
node_modules
.env
coverage
coverage.json
typechain
typechain-types

#Hardhat files
cache
artifacts
```

Day 2

Create Counter.sol in contracts folder.
Use the code from the repo.

create .env file

```
GOERLI_RPC_URL=
PRIVATE_KEY=
```

Create an Account in www.alchemy.com
Verify your account

1. Click on Create App
2. In the Pop Up Modal
    1. Name: Test Application
    2. Description: NA
    3. Chain: Ethereum
    4. Network: Goerli
3. Create App
4. Once App is created Click on "View Details" for the "Test Application"
5. You will be redirected to Application Page.
    1. Click on "View Key"
    2. Copy the HTTPS link and paste it in GOERLI_RPC_URL in .env file

How to get Goerli testnet ethers

1. Go to https://goerlifaucet.com/
2. Login with your alchemy account
3. Copy your wallet address from Metamask and Paste it in the input box.
4. Click on "Send Me ETH"
5. Wait for 20-30 Secs > Check your Metamask
6. Your Goerli ETH balance should be incremented by .25 GoerliETH

Open Metamask

1. Select the account with Goerli Ethers in it.
2. Click on this ":" symbol at the right side of the Account Name.
3. Click on Account Details > Export Private Key
4. Enter your Metamask Password > Confirm
5. Copy the Private Key on to your PRIVATE_KEY varaible in .env file.

Update hardhat.config.ts

Create and Update helper-hardhat-config.ts

Create deploy folder

Create 01-deploy-counter.ts in deploy folder
Use the code from the repo.

Create unit folder inside test folder for Unit tests
Create file Counter.test.ts
Use the code from the repo.

Command to unit test contract in hardhat network

```
hh test
OR
yarn hardhat test
OR
npx hardhat test
```

Command to deploy contract to hardhat network

```
hh deploy
OR
yarn hardhat deploy
OR
npx hardhat deploy
```
