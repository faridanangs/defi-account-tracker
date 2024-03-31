import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

// internal import
import Style from "./table.module.css";

const Internal = ({ internalByAddress }) => {
  return (
    <div>
      {internalByAddress.length === 0 ? (
        <div className={Style.sorry}>
          <p>Sorry there is not internal data</p>
        </div>
      ) : (
        <div className={Style.dataTable}>
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Hash</p>
            </div>
            <div className={Style.tableInfo}>
              {internalByAddress.map((el, i) => (
                <div className={Style.transHash}>
                  <AiFillEye />
                  <p>{el.hash.slice(0, 30)}...</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Block No</p>
            </div>
            <div className={Style.tableInfo}>
              {internalByAddress.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.blockNumber}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>TimeStamp</p>
            </div>
            <div className={Style.tableInfo}>
              {internalByAddress.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.timeStamp}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Type</p>
            </div>
            <div className={Style.tableInfo}>
              {internalByAddress.map((el, i) => (
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
              {internalByAddress.map((el, i) => (
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
              {internalByAddress.map((el, i) => (
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
              {internalByAddress.map((el, i) => (
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
              {internalByAddress.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.contractAddress.slice(0, 20)}...</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Gas</p>
            </div>
            <div className={Style.tableInfo}>
              {internalByAddress.map((el, i) => (
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
              {internalByAddress.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.gasused}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Trace ID</p>
            </div>
            <div className={Style.tableInfo}>
              {internalByAddress.map((el, i) => (
                <div className={Style.transHash}>
                  <p>{el.traceId}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Internal;
