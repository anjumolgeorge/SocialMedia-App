import React from 'react';
import { FiSearch } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import './page.css'; 

function Message() {
  const messages = [
    { name: "Mammooty", img: "mamukkka.jpg", lastMessage: "you:hi" },
    { name: "Angel_liNa", img: "angelina.webp", lastMessage: "you:hi" },
    { name: "Eillie__Be_", img: "be.jpg", lastMessage: "you:hi" },
    { name: "Mirshal__", img: "yaasiPfl.jpg", lastMessage: "you:hi" },
    { name: "JayaSurya", img: "jaya.jpg", lastMessage: "you:hi" },
    { name: "_Dul_Qr", img: "dq.avif", lastMessage: "you:hi" },
  ];

  return (
    <div className='message-container fixed mt-[-6rem]'>
      <div className='search-bar'>
        <input
          className="search-input"
          type="text"
          placeholder="Search"
        />
        <FiSearch className="search-icon" />
      </div>
      <div className="messages-title">
        <h1>Messages</h1>
      </div>
      <div className='messages-list'>
        {messages.map((message, index) => (
          <div key={index} className='message-item'>
            <div
              className='message-avatar'
              style={{
                backgroundImage: `url(${message.img})`,
              }}
            ></div>
            <div className='message-content'>
              <div className='message-header'>
                <span className='message-name'>{message.name}</span>
                <HiOutlineDotsHorizontal className='message-options' />
              </div>
              <div className='message-text'>{message.lastMessage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Message;

