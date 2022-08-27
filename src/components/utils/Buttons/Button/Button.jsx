import React from 'react'
import style from './Button.module.scss'

function Button({buttonName, onClick}) {
  return (
    <button onClick={onClick} className={style.button}>{buttonName}</button>
  )
}

export default Button