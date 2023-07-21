import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const POLLING_INTERVAL = 8000;
const RPC_URLS = {
    // 1: "https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",
    //   1:"https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161", 
    5: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    97: "https://data-seed-prebsc-1-s2.binance.org:8545",
    // 43114: "https://api.avax.network/ext/bc/C/rpc",
    // 80001: "https://matic-mumbai.chainstacklabs.com",
    137:"https://rpc-mainnet.maticvigil.com/"
};

export const injected = new InjectedConnector({
    // supportedChainIds: [5, 97, 43114, 80001]
    supportedChainIds: [5, 137, 97]
});

export const walletconnect = new WalletConnectConnector({
    rpc: { 97: RPC_URLS[97], 5: RPC_URLS[5], 137: RPC_URLS[137]  },
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
    pollingInterval: POLLING_INTERVAL
});