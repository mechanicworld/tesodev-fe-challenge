import React from 'react'
import style from './Button.module.scss'

function Button({buttonName}) {
  return (
    <button className={style.button}>{buttonName}</button>
  )
}

export default Button