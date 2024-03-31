import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { SiMinutemailer } from "react-icons/si";

// internal import
import { EtherScan } from "../Context/Ether";
import Style from "../styles/index.module.css";
import etherLogo from "../public/eth.png";

const index = () => {
  const router = useRouter();
  const { transaction, yoursBlockTrans } = useContext(EtherScan);
  // use state section
  const [userAccount, setUserAccount] = useState("");

  // convert ether
  const convertIntoEth = amount => {
    const ETH = ethers.utils.formatUnits(amount, "ether");
    return ETH;
  };

  // input Address
  const accountAddress = event => {
    event.preventDefault();
    const address = document.getElementById("accountAddress").value.trim();
    setUserAccount(address);
    router.push(`/account?${address}`);
  };

  return (
    <div>
      <div className={Style.header}>
        <form className={Style.accountAddress}>
          <input type="text" placeholder="Ether Account Address" id="accountAddress" />
          <Link href={{ pathname: "/account", query: userAccount }}>
            <span onClick={e => accountAddress(e)}>
              <SiMinutemailer />
            </span>
          </Link>
        </form>
      </div>

      {/* main section of home page */}
      <div className={Style.container}>
        <div className={Style.container_box}>
          <h3>Latest Block</h3>
          <div className={Style.container_block}>
            {yoursBlockTrans.map((el, i) => (
              <div className={Style.oneBlock} key={i + 1}>
                <div className={Style.block}>
                  <div className={Style.info}>
                    <p className={Style.bk}>BK</p>
                    <Link href={{ pathname: "/block", query: el.number }}>{el.number}</Link>
                  </div>
                  <p>{el.timestamp}</p>
                </div>
                <div>
                  <div className={Style.miner}>
                    <p>
                      <samp>
                        Miner:{" "}
                        <Link
                          className={Style.link}
                          href={{ pathname: "/account/", query: el.miner }}
                        >
                          <span>{el.miner.slice(0, 20)}...</span>
                        </Link>
                      </samp>
                    </p>
                    <span>
                      <Link href={{ pathname: "/block/", query: el.number }}>
                        <p>{el.transactions.length}</p>
                      </Link>
                      &nbsp;TNS in 3sec
                    </span>
                  </div>
                  <div className={Style.reward}>
                    <p>
                      {convertIntoEth(el.baseFeePerGas)} <span>ETH</span>
                    </p>
                    <Image
                      src={etherLogo}
                      alt="ether logo"
                      className={Style.eth}
                      width={15}
                      height={15}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={Style.container_box}>
          <h3>Latest Transaction</h3>
          <div className={Style.container_block}>
            {transaction.map((el, i) => (
              <div className={Style.oneBlock} key={i + 1}>
                <div className={Style.info}>
                  <div>
                    <p className={Style.bx}>TS</p>
                  </div>
                  <Link href={{ pathname: "/transaction", query: el }}>
                    <span>
                      Hash:&nbsp;<p style={{ marginTop: "0px" }}> {el.slice(0, 40)}... </p>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
