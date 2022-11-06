import React, {createContext, useContext,useEffect, useRef, useState } from 'react';
import {ethers} from 'ethers';
import Web3Model from 'web3modal';
import {useNavigate} from 'react-router-dom';

import {ABI, ADDRESS } from '../contract';

const GlobalContext = createContext();
export const GlobalContextProvider = ({ children}) => {
   const [WalletAddress, setWalletAddress] = useState('');
   const [Provider, setProvider] = useState ('');
   const [contract, setContract] = useState('');

  //Set the wallet Adress to the state 
   const updateCurrentWalletAddress = async () => {
    const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
    });

   if(accounts) setWalletAddress(accounts[0]);

   }

   useEffect (()=>{
         updateCurrentWalletAddress();
         window.ethereum.on('accountChanged', updateCurrentWalletAddress);
   }, []);


//set the smart Contract the provider to the state 
   useEffect (()=> {
    const setSmartContractAndProvider = async () => { 
    const web3modal = new Web3Modal(); 
    const connection = await web3Model.connect();
    const newProvider = newethers.Provider.web3provider(connection);
    const signer = newProvider.signer();
    const newContract = new ethers.Contract(ADDRESS, ABI, signer);
    setProvider(newProvider);
    setContract(newContract);


} 
  setSmartContractAndProvider();
   }, []);



    return (
        <GlobalContext.Provider value ={{
             contract, WalletAddress
        }}>
        
       {children}
        </GlobalContext.Provider>
    )
}
export const useGlobalContext = () => useContext(GlobalContext);