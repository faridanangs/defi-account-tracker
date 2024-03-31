import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

// internal import
import Style from "./table.module.css";

const ERC21Token = ({ ERC21 }) => {
  return (
    <div>
      {ERC21.length === 0 ? (
        <div className={Style.sorry}>
          <p>Sorry there is not data of ERC21 Token</p>
        </div>
      ) : (
        <div className={Style.dataTable}>
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Block Number</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.blockNumber}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Hash</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <AiFillEye />
                  <p>{el.hash.slice(0, 10)}...</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Block Hash</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <AiFillEye />
                  <p>{el.blockHash.slice(0, 10)}...</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>TimeStamp</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.timeStamp}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Nonce</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.nonce}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Type</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.type}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>From</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.from.slice(0, 15)}...</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>To</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.to.slice(0, 15)}...</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Value</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.value.slice(0, 15)}...</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Cntrct Addrss</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.contractAddress.slice(0, 20)}...</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Token Name</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.tokenName}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Token Symbol</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.tokenSymbol}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Token</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.tokenDecimal}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Index</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.transactionIndex}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Gas</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.gas}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Gas Used</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.gasused}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Gas Price</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.gasPrice.slice(0, 10)}...</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Input</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.input}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Confirmations</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.confirmations}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Cumulative GasUsed</p>
            </div>
            <div className={Style.tableInfo}>
              {ERC21.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.cumulativeGasUsed}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ERC21Token;
