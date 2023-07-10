import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useWeb3React } from "@web3-react/core";
import useAuth from "../hooks/useAuth";

const Header = () => {

  const { account } = useWeb3React();
  const { login, logout } = useAuth();
  const [account11, setAcount11] = useState(null);
  const localData1 = localStorage.getItem('sign');


  const gettingSign = () => {

  }


  const connectMetaMask1 = () => {

    localStorage.setItem("connectorId", "injected");
    localStorage.setItem("flag", "true");
    if (account) {
      logout();
    } else {
      login("injected");
      // window.$("#exampleModalwallet").modal("hide");
      setAcount11(account);
      // if (account) {
      //   gettingSign();
      // }
      // handleClose()
    }
  };
  console.log(account, "account connected");

  const disConnect = () => {
    console.log('logout.....');
    logout();
    localStorage.clear();
  }

  return (
    <div className='header-wrapper'>
      <div className='header-links'>
        <div className='header-linkssss'>
          <Link to={'/'}>Home</Link>
          <Link to={'/'}>Staking</Link>
          <Link to={'/swap'}>Swap</Link>
          <Link to={'/'}>Account</Link>
        </div>
        <div className='header-buttons'>
          {/* <Link to={'/login'}>
            Login
          </Link>
          <Link to={'/sigin'}>
            Sign up
          </Link> */}
          {/* <ConnectButton /> */}
          {
            account ?
              <>
                {/* {account} */}
                <button onClick={() => disConnect()}>Disconnect</button>
              </>
              :
              <button onClick={() => connectMetaMask1()}>Connect metamskt</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Header