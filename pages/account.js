import axios from "axios";
import { ethers } from "ethers";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

// /internal import
import { EtherScan } from "../Context/Ether";
import Style from "../styles/account.module.css";
import etherLogo from "../public/eth.png";
import loader from "../public/loding.gif";
import Table from "../components/Table";

const account = () => {
  const { provider } = useContext(EtherScan);
  const router = useRouter();
  const { query } = router;
  const acc = Object.keys(query)[0];

  // initalication state
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState();
  const [totalTransaction, setTotalTransaction] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  // api usestate
  const [accountHistory, setAccountHistory] = useState([]);
  const [internalByAddress, setInternalByAddress] = useState([]);
  const [ERC20, setERC20] = useState([]);
  const [ERC21, setERC21] = useState([]);
  const [ERC1155, setERC1155] = useState([]);
  const [blockMindedByAddress, setBlockMindedByAddress] = useState([]);
  const [blockRangeTransaction, setBlockRangeTransaction] = useState([]);


  //   api call etherscan
  const API_KEY = "ZT8PR6D7K1KJIR5E2EXWNUUYSCX6NZRX6G";

  const accountData = async () => {
    try {
      setAccount(acc);
      if (open) {
        setOpen(false);
      }

      // account balance
      const balance = await provider.getBalance(acc);
      const showBalance = ethers.utils.formatUnits(balance);
      setBalance(showBalance);

      // account name
      const esn = await provider.lookupAddress(acc);
      if (esn === null) {
        setName("NO ACCOUNT");
        setLoading(false);
      } else {
        setName(esn);
        setLoading(false);
      }

      //   transaction
      await axios
        .get(
          `https://api.etherscan.io/api?module=account&action=txlist&address=${acc}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API_KEY}
    `
        )
        .then(resp => setAccountHistory(resp.data.result));
      // .then(data =>  console.log(data, ));

      // transaction by internal hash
      await axios
        .get(
          `https://api.etherscan.io/api?module=account&action=txlistinternal&address=${acc}&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=${API_KEY}`
        )
        .then(resp => {
          setInternalByAddress(resp.data.result);
        });

      // etherscan api ERC20 token
      await axios
        .get(
          `https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2&address=${acc}&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=${API_KEY}
    `
        )
        .then(resp => {
          setERC20(resp.data.result);
        });

      // ?etherscan api minded block by address
      await axios
        .get(
          `https://api.etherscan.io/api?module=account&action=getminedblocks&address=${acc}&blocktype=blocks&page=1&offset=10&apikey=${API_KEY}`
        )
        .then(resp => {
          setBlockMindedByAddress(resp.data.result);
        });

      // etherscan api block range
      await axios
        .get(
          `https://api.etherscan.io/api?module=account&action=txlistinternal&startblock=13481773&endblock=13491773&page=1&offset=10&sort=asc&apikey=${API_KEY}
        `
        )
        .then(resp => {
          setBlockRangeTransaction(resp.data.result);
        });

      // etherscan api erc21 token
      await axios
        .get(
          `https://api.etherscan.io/api?module=account&action=tokennfttx&contractaddress=0x06012c8cf97bead5deae237070f9587f8e7a266d&address=${acc}&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=${API_KEY}`
        )
        .then(resp => {
          setERC21(resp.data.result);
        });

      // etherscan api erc1155 token
      await axios
        .get(
          `https://api.etherscan.io/api?module=account&action=token1155tx&contractaddress=0x76be3b62873462d2142405439777e971754e8e77&address=${acc}&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=${API_KEY}`
        )
        .then(resp => {});

        // get total transaction account
        const totalTransaction = await provider.getTransactionCount(acc)
        setTotalTransaction(totalTransaction)
    } catch (error) {
      console.log("something went wrong with the API call", error);
    }
  };

  return (
    <div className={Style.accountDIV}>
      {open ? (
        <div className={Style.btnContainer}>
          <h1>
            {open ? "Welcome to ether finance" : "Please wait we are loading the data"}
            <button className={Style.openBtn} onClick={() => accountData()}>
              Click Me
            </button>
          </h1>
        </div>
      ) : (
        <div>
          {loading ? (
            <div className={Style.loading}>
              <Image src={loader} alt="loader" width={100} height={100} />
            </div>
          ) : (
            ""
          )}
          {!loading ? (
            <div className={Style.container}>
              <div className={Style.box}>
                <div className={Style.account}>
                  <Image src={etherLogo} alt="logo" width={20} height={30} />
                  <p>
                    Address: <span>{acc}</span>
                  </p>
                </div>
                <div className={Style.owner}>
                  <p onClick={() => accountData()}>Owner</p>
                  {name || "HEllo Brother"}
                </div>
              </div>
              <div className={Style.overviewBox}>
                <div className={Style.overview}>
                  <div className={Style.overviewTitle}>
                    <p className={Style.ptitle1}>Overview</p>
                    <p className={Style.miner}>
                      {name || "Miner"} &nbsp; : &nbsp; {account.slice(0, 20)}
                      ...
                    </p>
                  </div>
                  <div className={Style.accountBalance}>
                    <p className={Style.color}>Balance</p>
                    <p>{balance} ETH</p>
                  </div>
                  <div className={Style.accountBalance}>
                    <p className={Style.color}>Value</p>
                    <p>$ {balance * 3497.18}</p>
                  </div>
                </div>

                <div className={Style.branding}>
                  <h2>
                    Welcome <br />
                    Ether Finance Tracker
                  </h2>

                  <p>
                    Hey, Welcome to ether finance tracker, find out your ethereum &nbsp;
                    {name || account.slice(0, 10)} &nbsp; finance status
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {!loading ? (
            <Table
              accountHistory={accountHistory}
              totalTransaction={totalTransaction}
              internalByAddress={internalByAddress}
              ERC20={ERC20}
              ERC21={ERC21}
              ERC1155={ERC1155}
              accountData={accountData}
              blockMindedByAddress={blockMindedByAddress}
              blockRangeTransaction={blockRangeTransaction}
            />
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default account;
