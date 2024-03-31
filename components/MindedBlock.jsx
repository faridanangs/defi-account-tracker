import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

// internal import
import Style from "./table.module.css";

const MindedBlock = ({ blockMindedByAddress }) => {
  return (
    <div>
      {blockMindedByAddress.length === 0 ? (
        <div className={Style.sorry}>
          <p>Sory there is no data</p>
        </div>
      ) : (
        <div className={Style.dataTable}>
          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Block Number</p>
            </div>
            <div className={Style.tableInfo}>
              {blockMindedByAddress.map((el, i) => (
                <div className={Style.transHash}>
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

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>Block Reward</p>
            </div>
            <div className={Style.tableInfo}>
              {blockMindedByAddress.map((el, i) => (
                <div className={Style.transHash}>
                  <p className={Style.toLink}>{el.blockReward.slice(0,14)}...</p>
                </div>
              ))}
            </div>
          </div>

          <div className={Style.column}>
            <div className={Style.tableTitle}>
              <p>TimeStamp</p>
            </div>
            <div className={Style.tableInfo}>
              {blockMindedByAddress.map((el, i) => (
                <div className={Style.transHash}>
                  <p className={Style.toLink}>{el.timeStamp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MindedBlock;
