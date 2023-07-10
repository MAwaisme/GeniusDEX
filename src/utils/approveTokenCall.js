import { useCallback } from 'react';
import { useWeb3React } from "@web3-react/core";
import { approvecontractInstance } from './contractHelpers';
import useWeb3 from './useWeb3';

const ApproveTokenCall = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    console.log('/account', account);

    const approveToken = useCallback(
        async (ethAM) => {
            console.log('in innner approve start');
            console.log('values of the viber3', ethAM);
            const contract = approvecontractInstance('0xE2e894Da2ce2abd4f69f2623092f2F8a0F3c41DA', web3);

            // const weiAmount = web3.utils.toWei(ethAM + '');
            // let nd = web3.utils.toWei(ethAM.toString(), "ether");
            // let dateee = (Date.now() / 1000) + 1000

            try {
                if (account) {
                    console.log('/innnnnnnnnnnnnnnnnnn', contract.methods);
                    console.log('0x6F3fDdF3B497caB73C10A314f63a72d8D9F89C1a', '1000000000000000000000');
                    var response = await contract.methods
                        .approve('0x6F3fDdF3B497caB73C10A314f63a72d8D9F89C1a', '1000000000000000000000')
                        .send({
                            from: account
                        })
                } else {
                    console.log('account is not defined');
                }

            } catch (error) {
                console.log('error fo the approve pool', error);
                throw error;
            }

            return response;
        },
        [account, web3]
    );
    return { approveToken: approveToken };
}

export default ApproveTokenCall;