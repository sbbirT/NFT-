import React, {useState} from 'react';
import { useGlobalContext } from '../context';
import { PageHOC, CustomInput, CustomButton} from '../components';

const Home = () => {
  const {contract, walletAddress} = useGlobalContext();
  const [playerName, setPlayerName] = useState('');
  return (
    <div className="flex flex-col">
     <CustomInput 
     label = "Name"
     placeholder = "Enter your Player Name"
     value = {playerName}
     handleValueChange = {setPlayerName}
     />

     <CustomButton 
     title="Register"
     handleClick={() => {}}
     restStyles="mt-6"
     />
    </div>
  )
};

export default PageHOC(
  Home,
  <>Welcome to Our Project <br/> a web3 NFT Card game</>,

  <> Connect your wallet to start playing <br/> the ultimiate  </>
);