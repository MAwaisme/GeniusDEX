import React, { useState } from 'react'

const PreSale = () => {

    const [buyPresale, setBuyPresale] = useState(null);

    const joinPresaleHandle = () => {

    }

    return (
        <>
            <div className='staking-wrapper'>
                <div className='main-siteee'>
                    <div className='input-wrapper-box input-wrapper-box222'>
                        <h3>Join Pre-sale</h3>
                        <input placeholder='join a pre-sale with ETH' value={buyPresale} onChange={(e) => setBuyPresale(e?.target?.value)} />
                        <button onClick={joinPresaleHandle}>Join</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreSale