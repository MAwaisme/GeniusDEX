import { useCallback } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
// import { useToast } from "../state/hooks";
import { connectorsByName } from "../utils/web3React";
import { setupNetwork } from "../utils/wallet";

const useAuth = () => {
  const { activate, deactivate } = useWeb3React();
//   const { toastError } = useToast();

  const login = useCallback((connectorID) => {
    // console.log("---------->", connectorID);

    // console.log("---------->", connectorsByName);

    const connector = connectorsByName[connectorID];
    // console.log("---------->", connector);
    if (connector) {
      activate(connector, async (error) => {
        if (error instanceof UnsupportedChainIdError) {
          const hasSetup = await setupNetwork();
          if (hasSetup) {
            activate(connector);
          }
        } else {
          console.log(connector.walletConnectProvider ,'connector.walletConnectProvider ');
          connector.walletConnectProvider = undefined;
        //   toastError(error.name, error.message);
        console.log('errrrr. in nammemeeeee');
        }
      });
    } else {
    //   toastError("Can't find connector", "The connector config is wrong");
      console.log("Can't find connector", "The connector config is wrong");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { login, logout: deactivate };
};

export default useAuth;
