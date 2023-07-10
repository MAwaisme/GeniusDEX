import { useCallback } from 'react';
import { useWeb3React } from "@web3-react/core";
import { contractInstance } from './contractHelpers';
import useWeb3 from './useWeb3';

const TokenToCoinCall = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    console.log('/account');

    const tokenCall = useCallback(
        async (hydtAmount) => {
            console.log('in innner HYDT To ETH start');
            console.log('values of the viber3', hydtAmount);
            const contract = contractInstance('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', web3);
            // const weiAmount = web3.utils.toWei(ethAM + '');
            
            let nd = web3.utils.toWei(hydtAmount.toString(), "ether");
            let dateee = (Date.now() / 1000) + 1000
            try {
                if (account) {
                    console.log('/innnnnnnnnnnnnnnnnnn',contract.methods);
                    console.log(nd,'0', ['0xE2e894Da2ce2abd4f69f2623092f2F8a0F3c41DA', '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'], account, parseInt(dateee));
                    var response = await contract.methods
                        .swapExactTokensForETH(nd, '0', ['0xE2e894Da2ce2abd4f69f2623092f2F8a0F3c41DA', '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'], account, parseInt(dateee))
                        .send({
                            from: account,
                            // value: nd
                            
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
    return { tokenCall: tokenCall };
}

export default TokenToCoinCall;