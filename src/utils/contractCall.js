import { useCallback } from 'react';
import { useWeb3React } from "@web3-react/core";
import { contractInstance } from './contractHelpers';
import useWeb3 from './useWeb3';

const ContractCall = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    console.log('/account');

    const swapcall = useCallback(
        async (ethAM) => {
            console.log('in innner start');
            console.log('values of the viber3', ethAM);
            const contract = contractInstance('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', web3);
            // const weiAmount = web3.utils.toWei(ethAM + '');
            
            let nd = web3.utils.toWei(ethAM.toString(), "ether");
            let dateee = (Date.now() / 1000) + 1000
            try {
                if (account) {
                    console.log('/innnnnnnnnnnnnnnnnnn',contract.methods);
                    console.log(nd,'0', ['0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', '0xE2e894Da2ce2abd4f69f2623092f2F8a0F3c41DA'], account, parseInt(dateee));
                    var response = await contract.methods
                        .swapExactETHForTokens('0', ['0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', '0xE2e894Da2ce2abd4f69f2623092f2F8a0F3c41DA'], account, parseInt(dateee))
                        .send({
                            value: nd,
                            from: account,
                        })
                } else {
                    console.log('account is not defined');
                }

            } catch (error) {
                console.log('error fo the approve pool',error);
                throw error;
            }

            return response;
        },
        [account, web3]
    );
    return { swapcall: swapcall };
}

export default ContractCall;