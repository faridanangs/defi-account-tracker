import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";
import { TbChartArrowsVertical } from "react-icons/tb";

// internal import
import Style from "../styles/navbar.module.css";
import etherLogo from "../public/eth.png";
import logo from "../public/logo.png";
import logoTop from "../public/footerLogo.png";
import user from "../public/avatar.png";

const Navbar = () => {
  const [userAccount, setUserAccount] = useState("");
  const [balance, setBalance] = useState();
  const [count, setCount] = useState("");
  const [openModel, setOpenModel] = useState(false);
  const [btc, setBTC] = useState("");
  const [price, setPrice] = useState("");
  const [etherSupply, setEtherSupply] = useState();
  const [updatePricedata, setUpdatePricedata] = useState("");

  // open model box
  const openUserInfo = () => {
    if (openModel) {
      setOpenModel(false);
    } else if (!openModel) {
      setOpenModel(true);
    }
  };

  const getEtherPrice = async () => {
    try {
      const API_ETHER_KEY = "ZT8PR6D7K1KJIR5E2EXWNUUYSCX6NZRX6G";
      await axios
        .get(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${API_ETHER_KEY}`)
        .then(resp => {
          setPrice(resp.data.result.ethusd);
          setBTC(resp.data.result.ethbtc);

          const timeStamp = Number(resp.data.result.ethusd_timestamp);
          const date = new Date(timeStamp);
          setUpdatePricedata(
            `UpDate : ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
          );
        });

      await axios
        .get(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${API_ETHER_KEY}`)
        .then(resp => {
          setEtherSupply(resp.data.result);
        });
    } catch (e) {
      console.log(e);
    }
  };

  // write function to connect to metamask
  const checkIfAccountExist = async () => {
    try {
      if (!window.ethereum) return console.log("please install Metamask");
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setUserAccount(accounts[0]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // connect to wallet
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("please install metamask");

      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      if (accounts.length) {
        setUserAccount(accounts[0]);
      } else {
        console.log("sorry you dont have account");
      }
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    checkIfAccountExist();
    getEtherPrice();
  }, []);

  return (
    <div>
      <div className={Style.navbar}>
        <div className={Style.navbar_container}>
          <div className={Style.left}>
            <Link href="/">
              <div>
                <h1 className={Style.desktop}>Ether Finance</h1>
                <h1 className={Style.mobile}>
                  <Image src={logoTop} width={50} height={50} alt="header logo" />
                </h1>
              </div>
            </Link>
          </div>

          {/* right side of header */}
          <div className={Style.right}>
            {userAccount.length ? (
              <div className={Style.connected}>
                <button onClick={() => openUserInfo()}>Acc: {userAccount.slice(0, 10)}...</button>
                {openModel ? (
                  <div className={Style.userModal}>
                    <div className={Style.user_box}>
                      <div className={Style.closeBtn}>
                        <MdOutlineClose onClick={() => openUserInfo()} />
                      </div>
                      <Image src={user} alt="user" width={50} height={50} />
                      <Link href={{ pathname: "/account/", query: userAccount }}>
                        <p style={{color:"blanchedalmond", fontWeight:"bold"}}>Acc: &nbsp; {userAccount.slice(0, 15)}...</p>
                      </Link>
                      <p>Balance &nbsp; {balance ? balance : 0} ETH</p>
                      <p>Total Transaction &nbsp; {count ? count : 0}</p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <button onClick={() => connectWallet()}>Connect Wallet</button>
            )}
          </div>
        </div>
      </div>

      <div className={Style.price}>
        <div className={Style.price_box}>
          <div className={Style.etherPrice}>
            <div>
              <Image src={etherLogo} alt="ether logo" width={30} height={30} />
            </div>
            <div>
              <h4>ETHER PRICE</h4>
              <p>$ {price}</p>
              <p>{btc} BTC</p>
              <p>{updatePricedata}</p>
            </div>
          </div>

          <div className={Style.supplyEther}>
            <div>
              <TbChartArrowsVertical className={Style.supplyIcon} />
            </div>
            <div>
              <h4>TOTAL ETHER SUPLY</h4>
              <p>{btc} BTC</p>
              <p>Updated Suply data</p>
            </div>
          </div>
        </div>
        <div className={Style.price_box}>
          <div className={Style.tokenBox_logo}>
            <Image src={logo} alt="logo" width={200} height={200} />
          </div>

          <div className={Style.logoWidth}>
            <p>ERC20</p>
            <p>ERC21</p>
            <p>ERC1155</p>
            <p>CONTRACT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
