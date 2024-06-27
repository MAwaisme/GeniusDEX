import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useWeb3React } from "@web3-react/core";
import useAuth from "../hooks/useAuth";
import { Api_URL } from "../utils/ApiURL";
import axios from 'axios';
import Signature from "../utils/userSign";
import { toast } from 'react-toastify';
import { injected, walletconnect } from "../utils/connectors";

const Header = () => {

  const { account } = useWeb3React();
  const { login, logout } = useAuth();
  const [account11, setAcount11] = useState(null);
  const [getUserData, setGetUserData] = useState(null);
  const [changeAccount, setChangeAccount] = useState(null);
  const [activatingConnector, setActivatingConnector] = useState();

  // const localData = JSON.parse(localStorage.getItem('mytoken'));
  const localData1 = localStorage.getItem('sign');
  // const localData2 = localStorage.getItem('userAddress');
  const [userSigns, setUserSing] = useState(null)
  const [profileName, setProfileName] = useState(null)
  const [profilePinture, setProfilePicture] = useState(null)

  const { userSign } = Signature();
  const context = useWeb3React();
  const { connector, library, chainId, activate, deactivate, active, error } = context;



  const userLogin = async (res) => {
    // const res1 = await userSign();
    if (res && account) {
      // console.log("herererer")
      axios.post("http://ec2-18-237-149-141.us-west-2.compute.amazonaws.com:4001/v1/users/login", { object: { address: account, name: "Design Dao" }, sign: res })
        .then((response) => {
          // console.log("users/login",response?.data?.token);
          // setTimeout(() => {
          // userDetail()
          // console.log("Delayed for 1 second.");
          // }, 3000)
          // console.log("resss", response.data.token)
          const token = response.data.token
          localStorage.setItem('mytoken', JSON.stringify({ token, account }))
          localStorage.removeItem("newUser");
          window.location.reload()
          // dispatch(GetUsers(account,token));

          // console.log('chal raha ha ??');
        }).catch((err) => {
          if (err.toString().slice(39, 43) === '401') {
            localStorage.setItem('newUser', 'newUser')
            // localStorage.getItem('mytoken',JSON.stringify({token, account})
            // window.$("#exampleModal1").modal("show");
            // if (localData?.account != account || localData?.token == null) {
            //   userLogin()
            // }
          }
        })
    }
  }

  // const userDetail = () => {
  //   // console.log(localData?.token,'localData?.token');
  //   if (localData?.account == account) {
  //     setProfileName('');
  //     // setMainLoader(true);
  //     console.log('setMainLoader');
  //     // const data = new FormData();
  //     axios
  //       .post("http://ec2-18-237-149-141.us-west-2.compute.amazonaws.com:4001/v1/users/getUser", {}, { headers: { "Authorization": `Bearer ${localData?.token}` } })
  //       .then((response) => {
  //         // setMainLoader(false);
  //         console.log('setMainLoader falsee 1111');
  //         // toast.success('Profile Edited', {
  //         //   position: "top-center",
  //         //   autoClose: 2000,
  //         // console.log(response,'idhr raha ha ');
  //         // });
  //         // console.log(response.data.user,response.data.user,'response in nav');
  //         setProfilePicture(response?.data?.user?.picture)
  //         setProfileName(response?.data?.user?.name);
  //         // console.log(profilePinture,profileName,'respose');
  //       })
  //       .catch((err) => {
  //         if (err.toString().slice(39, 43) === '401') {
  //           // userLogin()
  //         }
  //         // setMainLoader(false);
  //         console.log('setMainLoader falseee');
  //         toast.error(err.response.data.msg, {
  //           position: "top-center",
  //           autoClose: 2000,
  //         });
  //       });
  //   } else {
  //     setProfileName(null)
  //     setProfilePicture(null)
  //   }

  //   // } else {
  //   //   setMainLoader(false);
  //   //   toast.error("name cannot be empty", {
  //   //     position: "top-center",
  //   //     autoClose: 2000,
  //   //   });
  //   // }
  // }


  const connectMetaMask1 = async () => {
    console.log('start loginnnnn');
    localStorage.setItem("connectorId", "injected");
    localStorage.setItem("flag", "true");
    if (account) {
      logout();
    } else {
      login("injected");
      // window.$("#exampleModalwallet").modal("hide");
      setAcount11(account);
      console.log('start signnnnnn');
      gettingSign();
      if (account) {
      }
      // handleClose()
    }
  };




  // console.log(account, "account connected");
  const gettingSign = async () => {
    console.log('in sign funcationnnnn');
    if (account) {
      const res1 = await userSign();
      console.log(res1, 'res1 okokokok');
      setUserSing(res1)

      if (res1) {
        localStorage.setItem('sign', res1)
        localStorage.setItem('userAddress', account)

        userLogin(res1)
      }
    }
  }


  const disConnect = () => {
    console.log('logout.....');
    logout();
    localStorage.clear();
  }

  const connectorsByName = {
    Injected: injected,
    WalletConnect: walletconnect,
  };

  // const connectMetamask = async () => {
  //   const currentConnector = connectorsByName["Injected"];
  //   console.log("call, call")
  //   if (!error) {
  //     try {
  //       await activate(currentConnector);
  //       localStorage.setItem("flag", "true");
  //       // localStorage.setItem('injected', "injected")
  //       setActivatingConnector(currentConnector);
  //       // console.log("in clone");
  //       // handleClose();
  //       // console.log("out clone");
  //     } catch (ex) {
  //       return false;
  //     }
  //   } else {
  //     console.log("error", error)
  //     // getErrorMessage(error);
  //   }
  // };



  const GetUser = async () => {
    const data = { walletAddress: account };
    let tok = localStorage.getItem("accessToken");
    let wall = localStorage.getItem("wallet");
    if (wall !== account) {
      loginUser();
    } else {
      await axios
        .post(`${Api_URL}/user/getUser`, data)
        .then((res) => {
          setGetUserData(res?.data?.resultData);
        })
        .catch((err) => {
          localStorage.setItem("accessToken", null);
          localStorage.setItem("wallet", null);
          loginUser();
        });
    }
  };


  const loginUser = async () => {
    console.log('in sing fun');
    let tok = localStorage.getItem("accessToken");
    let wall = localStorage.getItem("wallet");
    // if (tok === "null" || tok === "undefined" || wall !== account) {
    if (account) {
      console.log('in sing fun ifff');
      const res = await userSign(account);
      if (account && res) {
        console.log('in sing fun ifff innerrr');
        await axios
          .post(`${Api_URL}/user/login`, {
            walletAddress: account,
            sign: res,
          })
          .then((res) => {
            // console.log("login", res?.data);
            setChangeAccount(res?.data?.token);
            // // console.log("login token", res?.data?.token);
            toast.success("User Logged in Successfully");
            localStorage.setItem("accessToken", res?.data?.token);
            localStorage.setItem("wallet", account);
            GetUser();
          })
          .catch((err) => {
            toast.error(err?.response?.data.msg, {
              position: "top-right",
              autoClose: 2000,
            });
            // // console.log(err?.response?.data.msg)
          });
        // };
      }
    }
  };


  const trustWallet = async () => {
    localStorage.setItem("flag", "true");
    localStorage.setItem("connectorId", "walletconnect");
    if (account) {
      logout();
      localStorage.clear();
    } else {
      login("walletconnect");
      setAcount11(account);
      // localStorage.setItem('connectorId', 'walletconnect');
      // window.$("#exampleModalwallet").modal("hide");
      // handleClose()
    }
  };


  useEffect(() => {
    if (account && localData1 === null) {
      gettingSign()
    }
  }, [account])



  return (
    <div className='header-wrapper'>
      <div className='header-links'>
        <div className='header-linkssss'>
          <Link to={'/'}>Home</Link>
          <Link to={'/stake'}>Staking</Link>
          <Link to={'/swap'}>Swap</Link>
          <Link to={'/presale'}>Pre-sale</Link>
        </div>
        <div className='header-buttons'>
          {
            account ?
              <>
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