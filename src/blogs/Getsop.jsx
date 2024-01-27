import React from "react";
import { useState } from "react";

const Getsop = () => {
  const [isClicked, setClicked] = useState(false);
  const [msg, setMsg] = useState("");
  function handleClick() {
    setClicked(true);
  }

  function validatePassword() {
    var password = document.getElementById("password").value;

    //  The password was not encrypted intentionally. You are smart enough that you can find the password from the source code.
    if (password == "AMIR@2023") {
      window.open("https://drive.google.com/drive/folders/165l_RTV1LOWc2m92Pm77GR_q7uKhH56K?usp=sharing");
    } else {
      setMsg("Wrong password, contact with me to get the password.");
    }
  }

  return (
    <div className="pt">
      <button className="btn-download-resume" onClick={handleClick}>
        Download My Resources
      </button>

      <div className="pt-md">
        {isClicked ? (
          <div className="">
            <div>
              {msg ? (
                <div class="text-danger" role="alert">
                  {msg}
                </div>
              ) : (
                "You have to enter the password to get my resources."
              )}
            </div>
            <div className="in-group">
              <input type="text" id="password" className="passwd-inp" style={{ width: "60%" }} />
              <button className="btn-download-sop" onClick={validatePassword}>
                Download
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Getsop;
