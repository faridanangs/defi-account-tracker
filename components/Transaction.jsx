import Link from "next/link";
import React from "react";
import { AiFillEye } from "react-icons/ai";

// internal impport
import Style from "./table.module.css";

const Transaction = ({ accountHistory, handleClick }) => {
  return (
    <div className={Style.dataTable}>
      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Txn Hash</p>
          <div className={Style.tableInfo}>
            {accountHistory.map((el, i) => (
              <div className={Style.transHash} key={i + 1}>
                <AiFillEye />
                <Link href={{ pathname: "/transaction/", query: el.hash }}>
                  <p className={Style.color}>{el.hash.slice(0, 25)}...</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Methodh</p>
          <div className={Style.tableInfo}>
            {accountHistory.map((el, i) => (
              <div className={Style.transHash} key={i + 1}>
                <p>Transfer</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Block</p>
          <div className={Style.tableInfo}>
            {accountHistory.map((el, i) => (
              <div className={Style.transHash} key={i + 1}>
                <p className={Style.toLink}>
                  <Link href={{ pathname: "/block/", query: el.blockNumber }}>
                    <span onClick={handleClick}>{el.blockNumber}</span>
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>TimeStamp</p>
          <div className={Style.tableInfo}>
            {accountHistory.map((el, i) => (
              <div className={Style.transHash} key={i + 1}>
                <p className={Style.toLink}>{el.timeStamp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>From</p>
          <div className={Style.tableInfo}>
            {accountHistory.map((el, i) => (
              <div className={Style.transHash} key={i + 1}>
                <p className={Style.toLink}>
                <Link href={{ pathname: "/account/", query: el.from }}>
                    <span onClick={handleClick}>{el.from.slice(0, 10)}...</span>
                  </Link></p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>To</p>
          <div className={Style.tableInfo}>
            {accountHistory.map((el, i) => (
              <div className={Style.transHash} key={i + 1}>
                <p className={Style.toLink}>
                  <Link href={{ pathname: "/account/", query: el.to }}>
                    <span onClick={handleClick}>{el.to.slice(0, 10)}...</span>
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Value</p>
          <div className={Style.tableInfo}>
            {accountHistory.map((el, i) => (
              <div className={Style.transHash} key={i + 1}>
                <p>{el.value.slice(0, 5)}...</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Gass Price</p>
          <div className={Style.tableInfo}>
            {accountHistory.map((el, i) => (
              <div className={Style.transHash} key={i + 1}>
                <p>{el.gasPrice}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Block Hash</p>
          <div className={Style.tableInfo}>
            {accountHistory.map((el, i) => (
              <div className={Style.transHash} key={i + 1}>
                <p>{el.blockHash.slice(0, 10)}...</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Confirmation</p>
          <div className={Style.tableInfo}>
            {accountHistory.map((el, i) => (
              <div className={Style.transHash} key={i + 1}>
                <p>{el.confirmations}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>CumulativeGas</p>
          <div className={Style.tableInfo}>
            {accountHistory.map((el, i) => (
              <div className={Style.transHash} key={i + 1}>
                <p>{el.cumulativeGasUsed}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Gas</p>
          <div className={Style.tableInfo}>
            {accountHistory.map((el, i) => (
              <div className={Style.transHash} key={i + 1}>
                <p>{el.gas}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Gas Used</p>
          <div className={Style.tableInfo}>
            {accountHistory.map((el, i) => (
              <div className={Style.transHash} key={i + 1}>
                <p>{el.gasUsed}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Nonce</p>
          <div className={Style.tableInfo}>
            {accountHistory.map((el, i) => (
              <div className={Style.transHash} key={i + 1}>
                <p>{el.nonce}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Index</p>
          <div className={Style.tableInfo}>
            {accountHistory.map((el, i) => (
              <div className={Style.transHash} key={i + 1}>
                <p>{el.transactionIndex}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Style.column}>
        <div className={Style.tableTitle}>
          <p>Status</p>
          <div className={Style.tableInfo}>
            {accountHistory.map((el, i) => (
              <div className={Style.transHash} key={i + 1}>
                <p>{el.txreceipt_status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
