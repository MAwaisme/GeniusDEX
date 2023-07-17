import React, { useCallback } from 'react'
import { useWeb3React } from "@web3-react/core";
import { stakecontractInstance } from './contractHelpers';
import useWeb3 from './useWeb3';

const StakeContractCall = () => {

    const { account } = useWeb3React();
    const web3 = useWeb3();
    console.log('/account');

    const stakeContract = useCallback(
        async (stakeT) => {
            console.log('in stake contract callll fileee');
            const contract = stakecontractInstance('0xC7D205d19581FB85bc843e5029659280a9f420F1', web3);
            // let towayValue = web3?.utils?.toWei(stakeT?.toString(), "ether");
            let towayValue = web3.utils.toWei(stakeT.toString(), "ether");
            console.log(towayValue, 'towayValue');
            try {
                if (account && contract) {
                    console.log('/ssssssssssss', contract.methods, contract);
                    var response = await contract.methods.stake(towayValue)?.send({
                        // value: towayValue,
                        from: account
                    })
                } else {

                }
            } catch (error) {
                console.log('catch error', error);
            }
            return response
        }
    );

    return { stakeContract: stakeContract }
}

export default StakeContractCall