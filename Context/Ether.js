import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

const ApiKey = "ea72c9e91720454a8e98339a3033fabb";
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${ApiKey}`);

export const EtherScan = React.createContext();
export const EtherProvider = ({ children }) => {
  const data = "ether clone";
  const tenBlockWithDetails = [];
  const [yoursBlockTrans, setYoursBlockTrans] = useState(tenBlockWithDetails);
  const [currentBlock, setCurrentBlock] = useState([]);
  const [topTenBlock, setTopTenBlock] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [gasPrice, setGasPrice] = useState("");

  const accountDetails = async () => {
    try {
      const getCurrentBlock = await provider.getBlockNumber();
      setCurrentBlock(getCurrentBlock);

      // ?single block trransaction
      const blockTransaction = await provider.getBlock(getCurrentBlock);
      setTransaction(blockTransaction.transactions);

      // top ten block
      const previousBlock = getCurrentBlock - 10;
      const listTenBlock = [];

      for (let i = getCurrentBlock; i > previousBlock; i--) {
        listTenBlock.push([i]);
      }

      // get block details
      const getBlockDetails = listTenBlock.flat();
      setTopTenBlock(getBlockDetails);

      getBlockDetails.map(async el => {
        const singleBlockData = await provider.getBlock(el);
        tenBlockWithDetails.push(singleBlockData);
      });

      // ether price
      const gasPrice = await provider.getGasPrice();
      const latestGasPrice = ethers.utils.formatUnits(gasPrice);
      // console.log(latestGasPrice)
      setGasPrice(latestGasPrice);
    } catch (e) {
      console.log("something when wrong while fetching data ", e);
    }
  };

  useEffect(() => {
    accountDetails();
  }, []);

  return (
    <EtherScan.Provider
      value={{
        data,
        transaction,
        gasPrice,
        currentBlock,
        topTenBlock,
        yoursBlockTrans,
        provider
      }}
    >
      {children}
    </EtherScan.Provider>
  );
};
