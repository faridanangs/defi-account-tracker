import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

// internal import
import { EtherScan } from "../Context/Ether";
import Style from "../styles/block.module.css";
import { useRouter } from "next/router";
const Transaction = () => {
  const { provider } = useContext(EtherScan);
  const router = useRouter();
  const { query } = router;
  const hash = Object.keys(query)[0];

  const [transactionData, setTransactionData] = useState([]);

  // formate value
  const [ethGasLimit, setETHGasLimit] = useState("");
  const [ETHGasPrice, setETHGasPrice] = useState("");
  const [value, setValue] = useState("");

  const getDataOfTransaction = async () => {
    try {
      const transactionDetails = await provider.getTransaction(hash);
      console.log(transactionDetails)
      setTransactionData(transactionDetails);
      const gasLimit = ethers.utils.formatUnits(transactionData.gasLimit);
      setETHGasLimit(gasLimit);
      const gasPrice = ethers.utils.formatUnits(transactionData.gasPrice);
      setETHGasPrice(gasPrice);
      const value = ethers.utils.formatUnits(transactionData.value);
      setValue(value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataOfTransaction();
  }, []);

  return (
    <div className={Style.block}>
      <div className={Style.box}>
        <div className={Style.box_header}>
          <h3>Transaction Hash</h3>
          <p>{hash}</p>
        </div>
        <div className={Style.blockTable}>
          <div>
            <div className={Style.dataRow}>
              <p>Block Hash</p>
              <p className={Style.color}>{transactionData.blockHash}</p>
            </div>
            <div>
              <div className={Style.dataRow}>
                <p>Block Number</p>
                <Link href={{ pathname: "/block/", query: transactionData.blockNumber }}>
                  <p className={Style.color}>{transactionData.blockNumber}</p>
                </Link>
              </div>
              <div className={Style.dataRow}>
                <p>Creates</p>
                <p>{transactionData.creates ? transactionData.creates : "No Data"}</p>
              </div>
              <div className={Style.dataRow}>
                <p>From</p>
                <Link href={{ pathname: "/account/", query: transactionData.from }}>
                  <p className={Style.color}>{transactionData.from}</p>
                </Link>
              </div>
              <div className={Style.dataRow}>
                <p>To</p>
                <Link href={{ pathname: "/account/", query: transactionData.to }}>
                  <p className={Style.color}>{transactionData.to}</p>
                </Link>
              </div>
              <div className={Style.dataRow}>
                <p>Confirmations</p>
                <p>{transactionData.confirmations}</p>
              </div>
              <div className={Style.dataRow}>
                <p>Hash</p>
                <p>{transactionData.hash}</p>
              </div>
              <div className={Style.dataRow}>
                <p>Gas Price</p>
                <p>{ETHGasPrice} ETH</p>
              </div>
              <div className={Style.dataRow}>
                <p>Gas Limit</p>
                <p>{ethGasLimit} ETH</p>
              </div>
              <div className={Style.dataRow}>
                <p>Value</p>
                <p>{value ? value : "No Data"}</p>
              </div>
              <div className={Style.dataRow}>
                <p>chain ID</p>
                <p>{transactionData.chainId}</p>
              </div>
              <div className={Style.dataRow}>
                <p>Index</p>
                <p>{transactionData.transactionIndex}</p>
              </div>
              <div className={Style.dataRow}>
                <p>Type</p>
                <p>{transactionData.type}</p>
              </div>
              <div className={Style.dataRow}>
                <p>R</p>
                <p>{transactionData.r}</p>
              </div>
              <div className={Style.dataRow}>
                <p>S</p>
                <p>{transactionData.s}</p>
              </div>
              <div className={Style.dataRow}>
                <p>V</p>
                <p>{transactionData.v}</p>
              </div>
              <div className={Style.dataRow}>
                <p>Nonce</p>
                <p>{transactionData.nonce || transactionData.nonce == 0 ? transactionData.nonce : "No Data"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
