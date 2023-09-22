import React from "react";
import "../Styles/successStyle.css";

const SuccessPage = () => {
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);

  return (
    <div>
      <div className="success-animation">
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            class="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            class="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>

      <h3
        style={{
          color: "#002D62",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          marginTop:'-5%'
        }}
      >
        Thankyou for Connecting with us
      </h3>
      <h4
        style={{
          color: "#89CFF0",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      >
        {" "}
        We've recieved your message{" "}
      </h4>
      <div
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "-5%",
          marginBottom: "18%",
          display: "block",
        }}
      ></div>
    </div>
  );
};

export default SuccessPage;