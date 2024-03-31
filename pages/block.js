import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { AiFillEye } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";

// internal import
import { EtherScan } from "../Context/Ether";
import Style from "../styles/block.module.css";
import etherLogo from "../public/eth.png";
import Transaction from "../components/Transaction";

const Block = () => {
  const { provider } = useContext(EtherScan);
  const router = useRouter();
  const { query } = router;
  const blockNumber = Number(Object.keys(query)[0]);

  // open
  const [open, setOpen] = useState(false);

  // block data
  const dataBlock = [];
  const [blockData, setBlockData] = useState([]);
  const [transactions, setTransactions] = useState([]);

  // formate value
  const [ethGasLimit, setETHGasLimit] = useState("");
  const [ethDifficulty, setETHDifficulty] = useState("");
  const [ethGasUsed, setETHGasUsed] = useState("");

  // active state
  const [blockNo, setBlockNo] = useState(true);
  const [transactionTab, setTransactionTab] = useState(false);

  const openTab = () => {
    if (blockNo) {
      setBlockNo(false);
      setTransactionTab(true);
    } else if (transactionTab) {
      setBlockNo(true);
    }
  };

  const getBlockDetails = async () => {
    try {
      const getBlock = await provider.getBlock(blockNumber);
      dataBlock.push(getBlock);
      setBlockData(getBlock);

      const gasLimit = ethers.utils.formatUnits(getBlock.gasLimit);
      setETHGasLimit(gasLimit);

      const gasUsed = ethers.utils.formatUnits(getBlock.gasUsed);
      setETHGasUsed(gasUsed);

      const difficulty = ethers.utils.formatUnits(getBlock._difficulty);
      setETHDifficulty(difficulty);

      setTransactions(getBlock.transactions);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    getBlockDetails();
  }, []);

  return (
    <div className={Style.block}>
      <div className={Style.box}>
        <div className={Style.box_header}>
          <h3>Block Number</h3>
          <p>{blockNumber}</p>
        </div>

        <div className={Style.blockTable}>
          <div className={Style.blockBtn}>
            <button onClick={() => openTab()}>Block Details</button>
            <button onClick={() => openTab()}>Block Transaction</button>
          </div>

          {blockNo ? (
            <div>
              <div className={Style.dataRow}>
                <p>Number</p>
                <p>{blockData.number}</p>
              </div>
              <div className={Style.dataRow}>
                <p>TimeStamp</p>
                <p>{blockData.timestamp}</p>
              </div>
              <div className={Style.dataRow}>
                <p>Miner</p>
                <Link href={{ pathname: "/account/", query: blockData.miner }}>
                  <p className={Style.color}>{blockData.miner}</p>
                </Link>
              </div>
              <div className={Style.dataRow}>
                <p>Hash</p>
                <p>{blockData.hash}</p>
              </div>
              <div className={Style.dataRow}>
                <p>Parent Hash</p>
                <p>{blockData.parentHash}</p>
              </div>
              <div className={Style.dataRow}>
                <p>Gas Used</p>
                <p>{ethGasUsed} ETH</p>
              </div>
              <div className={Style.dataRow}>
                <p>Gas Limit</p>
                <p>{ethGasLimit} ETH</p>
              </div>
              <div className={Style.dataRow}>
                <p>Difficulty</p>
                <p>{ethDifficulty ? ethDifficulty : "No Data"}</p>
              </div>
              <div className={Style.dataRow}>
                <p>Nonce</p>
                <p>{blockData.nonce ? blockData.nonce : "No Data"}</p>
              </div>
            </div>
          ) : (
            <div className={Style.dataTable}>
              <div className={Style.column}>
                <div className={Style.tableTitle}>
                  <p>All Transaction in the block {transactions.length}</p>
                  <div className={Style.tableInfo}>
                    {transactions.map((el, i) => (
                      <div className={Style.transHash} key={i + 1}>
                        <span>{i + 1}.</span>
                        <Link href={{ pathname: "/transaction/", query: el }}>
                          <p className={Style.color}>{el}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Block;
