import React from "react";
import "./User.css";

function User() {
  return (
    <div className="user">
      <div className="user-info">
        <div className="user-pic">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
            alt=""
          />
          <p>Name: Asif Shaikh</p>
        </div>
        <div className="user-details">
          <p>Age: 28 years old</p>
          <p>DOE: 22 Oct 1997</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            minus quis
          </p>
        </div>
      </div>
    </div>
  );
}

export default User;
