import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

// internal import
import Style from "./table.module.css";

const BlockRange = ({ blockRangeTransaction }) => {
  return (
    <div>
      {blockRangeTransaction.length === 0 ? (
        <div className={Style.sorry}>
          <p>Sorry no data</p>
        </div>
      ) : (
        <div className={Style.dataTable}>
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Block Number</p>
              <div className={Style.tableInfo}>
                {blockRangeTransaction.map((el, i) => (
                  <div className={Style.transHash} key={i + 1}>
                    <AiFillEye />
                    <p className={Style.toLink}>
                      <Link href={{ pathname: "/block/", query: el.blockNumber }}>
                        <span>{el.blockNumber}</span>
                      </Link>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Hash</p>
              <div className={Style.tableInfo}>
                {blockRangeTransaction.map((el, i) => (
                  <div className={Style.transHash} key={i + 1}>
                    <p className={Style.toLink}>{el.hash.slice(0, 10)}...</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>TimeStamp</p>
              <div className={Style.tableInfo}>
                {blockRangeTransaction.map((el, i) => (
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
                {blockRangeTransaction.map((el, i) => (
                  <div className={Style.transHash} key={i + 1}>
                    <p className={Style.toLink}>{el.from.slice(0, 10)}...</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>To</p>
              <div className={Style.tableInfo}>
                {blockRangeTransaction.map((el, i) => (
                  <div className={Style.transHash} key={i + 1}>
                    <p className={Style.toLink}>{el.to.slice(0, 10)}...</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Value</p>
              <div className={Style.tableInfo}>
                {blockRangeTransaction.map((el, i) => (
                  <div className={Style.transHash} key={i + 1}>
                    <p className={Style.toLink}>{el.value.slice(0, 10)}...</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Type</p>
              <div className={Style.tableInfo}>
                {blockRangeTransaction.map((el, i) => (
                  <div className={Style.transHash} key={i + 1}>
                    <p className={Style.toLink}>{el.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Cntrc Addrs</p>
              <div className={Style.tableInfo}>
                {blockRangeTransaction.map((el, i) => (
                  <div className={Style.transHash} key={i + 1}>
                    <p className={Style.toLink}>
                      {el.contractAddress ? el.contractAddress.slice(0, 10) : "-"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Gas</p>
              <div className={Style.tableInfo}>
                {blockRangeTransaction.map((el, i) => (
                  <div className={Style.transHash} key={i + 1}>
                    <p className={Style.toLink}>{el.gas}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Gas Used</p>
              <div className={Style.tableInfo}>
                {blockRangeTransaction.map((el, i) => (
                  <div className={Style.transHash} key={i + 1}>
                    <p className={Style.toLink}>{el.gasUsed}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>TraceID</p>
              <div className={Style.tableInfo}>
                {blockRangeTransaction.map((el, i) => (
                  <div className={Style.transHash} key={i + 1}>
                    <p className={Style.toLink}>{el.traceId}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlockRange;
