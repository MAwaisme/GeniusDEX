import contractABI from './contractABI.json';
import approveABI from './approveABI.json';
import stakeABI from './stakeABI.json';
import getRpcUrl from './getRpcUrl';
import web3NoAccount from "./web3";



// const RPC_URL = getRpcUrl()
// const httpProvider = new Web3.providers.HttpProvider(RPC_URL, { timeout: 10000 })
// const web3NoAccount = new Web3(httpProvider)


const getContract = (abi, address, web3) => {
    const _web3 = web3 ?? web3NoAccount;
    return new _web3.eth.Contract(abi, address);
};

export const contractInstance = (contractAddress, web3) => {
    return getContract(contractABI, contractAddress, web3);
};


export const approvecontractInstance = (contractAddress, web3) => {
    return getContract(approveABI, contractAddress, web3);
};

export const stakecontractInstance = (contractAddress, web3) => {
    return getContract(stakeABI, contractAddress, web3);
};
