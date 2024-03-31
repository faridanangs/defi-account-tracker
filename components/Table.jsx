import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

// internal import
import Style from "./table.module.css";
import Transaction from "./Transaction";
import ERC20Token from "./ERC20Token";
import ERC21Token from "./ERC21Token";
import ERC1155Token from "./ERC1155Token";
import Internal from "./Internal";
import MindedBlock from "./MindedBlock";
import BlockRange from "./BlockRange";

const Table = ({
  accountHistory,
  totalTransaction,
  internalByAddress,
  ERC20,
  ERC21,
  ERC1155,
  accountData,
  blockMindedByAddress,
  blockRangeTransaction
}) => {
  const [historyAccount, sethistoryAccount] = useState(true);
  const [addressInternalTransaction, setaddressInternalTransaction] = useState(false);
  const [openERC20, setOpenERC20] = useState(false);
  const [openERC21, setOpenERC21] = useState(false);
  const [openERC1155, setOpenERC1155] = useState(false);
  const [addressByMindedBlock, setAddressByMindedBlock] = useState(false);
  const [transactionRangeBlock, setTransactionRangeBlock] = useState(false);

  const tabs = e => {
    const buttonText = e.target.innerText;
    if (buttonText === "Transaction"){
      sethistoryAccount(true);
      setAddressByMindedBlock(false);
      setTransactionRangeBlock(false);
      setaddressInternalTransaction(false);
      setOpenERC20(false);
      setOpenERC21(false);
      setOpenERC1155(false);
    }else if (buttonText === "Internal"){
      sethistoryAccount(false);
      setAddressByMindedBlock(false);
      setTransactionRangeBlock(false);
      setaddressInternalTransaction(true);
      setOpenERC20(false);
      setOpenERC21(false);
      setOpenERC1155(false);
    }else if (buttonText === "Trans"){
      sethistoryAccount(false);
      setAddressByMindedBlock(false);
      setTransactionRangeBlock(true);
      setaddressInternalTransaction(false);
      setOpenERC20(false);
      setOpenERC21(false);
      setOpenERC1155(false);
    }else if (buttonText === "Mined"){
      sethistoryAccount(false);
      setAddressByMindedBlock(true);
      setTransactionRangeBlock(false);
      setaddressInternalTransaction(false);
      setOpenERC20(false);
      setOpenERC21(false);
      setOpenERC1155(false);
    }else if(buttonText === "ERC-20"){
      sethistoryAccount(false);
      setAddressByMindedBlock(false);
      setTransactionRangeBlock(false);
      setaddressInternalTransaction(false);
      setOpenERC20(true);
      setOpenERC21(false);
      setOpenERC1155(false);
    }else if(buttonText === "ERC-21"){
      sethistoryAccount(false);
      setAddressByMindedBlock(false);
      setTransactionRangeBlock(false);
      setaddressInternalTransaction(false);
      setOpenERC20(false);
      setOpenERC21(true);
      setOpenERC1155(false);
    }else if(buttonText === "ERC-1155"){
      sethistoryAccount(false);
      setAddressByMindedBlock(false);
      setTransactionRangeBlock(false);
      setaddressInternalTransaction(false);
      setOpenERC20(false);
      setOpenERC21(false);
      setOpenERC1155(true);
    }
  };

  return (
    <div className={Style.table}>
      <div className={Style.table_head}>
        <button className={Style.btn} onClick={e => tabs(e)}>
          Transaction
        </button>
        <button className={Style.btn} onClick={e => tabs(e)}>
          Internal
        </button>
        <button className={Style.btn} onClick={e => tabs(e)}>
          Trans
        </button>
        <button className={Style.btn} onClick={e => tabs(e)}>
          Mined
        </button>
        <button className={Style.btn} onClick={e => tabs(e)}>
          ERC-20
        </button>
        <button className={Style.btn} onClick={e => tabs(e)}>
          ERC-21
        </button>
        <button className={Style.btn} onClick={e => tabs(e)}>
          ERC-1155
        </button>
      </div>

      <div className={Style.numberOfTrans}>
        <FaFilter />
        <p>
          Latest 10 from a total of <span>{totalTransaction}</span>
        </p>
      </div>
      {historyAccount ? (
        <Transaction handleClick={accountData} accountHistory={accountHistory} />
      ) : (
        ""
      )}
      {addressInternalTransaction ? (
        <Internal handleClick={accountData} internalByAddress={internalByAddress} />
      ) : (
        ""
      )}
      {openERC20 ? <ERC20Token ERC20={ERC20} /> : ""}
      {addressByMindedBlock ? (
        <MindedBlock blockMindedByAddress={blockMindedByAddress} handleClick={accountData} />
      ) : (
        ""
      )}
      {transactionRangeBlock ? (
        <BlockRange
          blockRangeTransaction={blockRangeTransaction}
          handleClick={blockRangeTransaction}
        />
      ) : (
        ""
      )}
      {openERC21 ? <ERC21Token ERC21={ERC21} handleClick={accountData} /> : ""}
      {openERC1155 ? <ERC1155Token ERC1155={ERC1155} handleClick={accountData} /> : ""}
    </div>
  );
};

export default Table;
