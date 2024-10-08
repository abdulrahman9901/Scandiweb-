import React from "react";
import classNames from "classnames";

const Header =  ({
  title,
  leftBtnAction,
  leftBtnName,
  rightBtnAction,
  rightBtnName,
  ahref = "#"
}) => {
  console.log("Header rendered"); // For debugging purposes

  return (
    <header className="header">
      <h1>{title}</h1>
      <div className="btn-container">
        {leftBtnName === "ADD" ? (
          <a name={leftBtnName} href={ahref}>
            <button className={"leftBtn"} onClick={leftBtnAction}>
              {leftBtnName}
            </button>
          </a>
        ) : (
          <button className={"leftBtn"} onClick={leftBtnAction}>
            {leftBtnName}
          </button>
        )}
        <button
          className={classNames({
            cancelBtn: rightBtnName === "Cancel",
            rightBtn: rightBtnName === "MASS DELETE",
          })}
          id={`${
            rightBtnName === "MASS DELETE" ? "delete-product-btn" : "cancel-btn"
          }`}
          onClick={rightBtnAction}
        >
          {rightBtnName}
        </button>
      </div>
    </header>
  );
};

export default Header;
