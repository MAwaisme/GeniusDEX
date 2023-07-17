import React, { useState } from 'react'
import StakeContractCall from '../utils/StakeContractCall';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import ClaimContract from '../utils/ClaimContract';
import WithdrawContractCall from '../utils/WithdrawContractCall';

const Staking = () => {

    const [loader, setloader] = useState(false);
    const [loader1, setloader1] = useState(false);
    const [loader2, setloader2] = useState(false);
    const [stakeT, setStake] = useState(null);
    const [claimA, setClaimA] = useState(null);
    const [withdrawA, setWithdrawA] = useState(null);
    console.log(stakeT, 'stakeT okokoko');
    console.log(claimA, 'claim amount');
    console.log(withdrawA, 'withdrawA');

    const [errorI, setErrorI] = useState(null);

    const myArray = [stakeT];
    const searchString = '.';
    const includesElement = myArray.includes(searchString);

    const { stakeContract } = StakeContractCall();
    const { claimContract } = ClaimContract();
    const { withdrawContract } = WithdrawContractCall();

    // const inputHandle = () => {
    //     includesElement === stakeT ?
    //     setErrorI(): 
    // }

    const stakeHandle = async () => {
        console.log('start stake in compt');
        try {
            setloader(true);
            console.log('start stake in compt contracr');
            let stakefuncall = await stakeContract(stakeT);
            console.log(stakefuncall, 'stakefuncall');
            if (stakefuncall?.status == true) {
                setloader(false);
                setStake("");
            }
            toast.success("Stake Successfully");
        } catch (error) {
            console.log(error, 'error in comp calll.... Stake');
        }
    }

    const claimHandle = async () => {
        console.log('start claiming.......');
        if (includesElement) {
            return 
        } else {
            try {
                setloader1(true);
                console.log('start stake in compt contracr');
                let claimfuncall = await claimContract();
                console.log(claimfuncall, 'claimfuncall');
                if (claimfuncall?.status == true) {
                    setClaimA(claimfuncall);
                    setloader2(false);
                }
                toast.success("Claim Successfully");
            } catch (error) {
                console.log(error, 'error in comp calll.... Claim');
            }
        }
    }

    const withdrawHandle = async () => {
        console.log('start Withdraw');
        try {
            setloader2(true);
            console.log('start stake in compt contracr');
            let withdrawfuncall = await withdrawContract(withdrawA);
            console.log(withdrawfuncall, 'withdrawfuncall');
            if (withdrawfuncall?.status == true) {
                setloader2(false);
                setWithdrawA("");
            }
            toast.success("Withdraw Successfully");
        } catch (error) {
            console.log(error, 'error in comp calll.... Withdraw');
        }
    }

    return (
        <div className='staking-wrapper'>
            <div className='main-siteee'>
                <p className='mb-5'>Stake STK GET RTK</p>
                <div className='input-wrapper-box'>
                    <h3>Stke STK</h3>
                    <input value={stakeT} placeholder='Enter amount of STK' onChange={(e) => setStake(e?.target?.value)} />
                    {
                        includesElement ?
                            <p style={{ color: 'red' }}>you can't enter dubble DOT</p>
                            : null
                    }
                </div>
                <p>Reward RTK</p>
                {
                    loader ?
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        : null
                }
                <button onClick={() => stakeHandle()}>Stake</button>
            </div>

            <div className='main-siteee'>
                <p>
                    {
                        loader1 ?
                            'climg.....'
                            : ''
                    }
                </p>
                <button onClick={() => claimHandle()}>Claim Reward</button>
            </div>

            <div className='main-siteee'>
                <div className='input-wrapper-box'>
                    <h3>Withdraw STK</h3>
                    <input value={withdrawA} placeholder='Enter amount of STK' onChange={(e) => setWithdrawA(e?.target?.value)} />
                </div>
                {/* <p>Withdraw ETH</p> */}
                {
                    loader2 ?
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        : null
                }
                <button onClick={() => withdrawHandle()}>Withdraw</button>
            </div>
        </div>
    )
}

export default Staking