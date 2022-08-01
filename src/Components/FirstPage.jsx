import React from "react";
import "./firstpage.css";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const FirstPage = ({ modal, setModal }) => {
  return (
    <div className='modal__container'>
      <div className='modal'>
        <div className='modal__head'>
          <AiOutlineClose
            onClick={() => setModal(false)}
            style={{ fontSize: "2rem", fontWeight: 700, color: "blue" }}
          />
        </div>
        <div className='modal__body'>
          <span className='modal__subheader'>
            Log In with any of the following account details
          </span>
          <div className='login__details'>
            <h2 className='details'>
              <span> Acc 1:-- username:js,</span> <span> pin: 1111</span>
            </h2>
            <h2 className='details'>
              <span> Acc 2:-- username:ee,</span> <span> pin: 2222</span>
            </h2>
            <h2 className='details'>
              <span> Acc 3:-- username:jd,</span> <span> pin: 3333</span>
            </h2>
            <h2 className='details'>
              <span> Acc 4:-- username:stw,</span> <span> pin: 4444</span>
            </h2>
          </div>

          <a
            href='https://github.com/Ezzywealth/newBankist'
            target='_blank'
            rel='noreferrer'
          >
            <button>How To use</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
