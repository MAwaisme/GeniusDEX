import React, { useState } from 'react';
import contractCall from '../utils/contractCall';
import './swap.scss';
import Spinner from 'react-bootstrap/Spinner';
import ApproveTokenCall from '../utils/approveTokenCall';
import TokenToCoinCall from '../utils/tokenToCoinCall';
import { toast } from 'react-toastify';

const Swap = () => {

    const [loader, setloader] = useState(false);
    const [loader1, setloader1] = useState(false);
    console.log(loader, 'loader....');
    const [hydtAmount, setHydtAmount] = useState(null);

    const [ethAM, setETHAm] = useState(null);
    console.log(ethAM, 'ethAM okokoko');


    const { swapcall } = contractCall();
    const submitCall = async () => {
        console.log('call in swap comp');
        if (ethAM == 0 || ethAM == null) {
            console.log('okokokokokkk');
            toast.error("Pleas enter amount of ETH");
            // toast.success("Pleas enter amount of ETH");
            // setETHAm('Pleas enter amount of ETH');
            return
        }
        try {
            setloader(true);
            let aaaaaa = await swapcall(ethAM);
            console.log(aaaaaa, '/aaaaaa');
            if (aaaaaa?.status == true) {
                setloader(false);
            }
        } catch (error) {
            console.log('error in call in swap');
        }
    }


    const { approveToken } = ApproveTokenCall();
    
    const hydtToEthCall = async () => {
        try {
            let bbbb = await approveToken();
            console.log(bbbb, 'approve call contract........');
        } catch {
            console.log('errror in approve');
        }
    }

    const { tokenCall } = TokenToCoinCall();

    const tokenETHSwap = async () => {
        setloader1(true);
        try {
            let cccc = await tokenCall(hydtAmount);
            console.log(cccc, "hydt to eth swap call in swap");
            if (cccc) {
                setloader1(false);
            }
        } catch (error) {
            console.log('error in token to coin swap');
            setloader1(false);
        }
    }

    return (
        <>
            <div className='main-siteee'>
                <p className='mmmmb-5'>Swap ETH to HYDT or</p>
                <div className='input-wrapper-box'>
                    <h3>ETH to HYDT</h3>
                    <input placeholder='Enter amount of ETH' value={ethAM} onChange={(e) => setETHAm(e.target.value)} />
                    {ethAM === 0 ?
                        <p className='text-denger'>{ethAM}</p>
                        : null
                    }
                </div>
                <p>Got HYDT</p>
                <div className='lodaer-wrapper'>
                    {
                        loader ?
                            // <Spinner animation="border" role="status">
                            // </Spinner>
                            // <div class="spinner-border text-light" role="status">
                            //     <span class="visually-hidden">Loading...</span>
                            // </div>
                            <span class="loader"></span>
                            : null
                    }
                </div>
                <button onClick={() => submitCall()}>Swap</button>
            </div>

            <div className='main-siteee'>
                <p className='mb-5'>Swap HYDT to ETH</p>
                <div className='input-wrapper-box'>
                    <h3>ETH to HYDT</h3>
                    <input placeholder='Enter amount of HYDT' onChange={(e) => setHydtAmount(e.target.value)} />
                </div>
                <p>Got ETH  </p>
                {
                    loader1 ?
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        : null
                }
                <button onClick={() => tokenETHSwap()}>Swap</button>
            </div>
        </>
    )
}

export default Swap