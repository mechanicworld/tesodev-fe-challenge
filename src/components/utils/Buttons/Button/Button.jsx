import React from "react";
import style from "./Button.module.scss";

function Button({ disabled,buttonName, onClick,type }) {
  
  return (
    <>     
        <button disabled={disabled} type={type} onClick={onClick} className={style.button}>
          {buttonName}
        </button>
      
    </>
  );
}

export default Button;
