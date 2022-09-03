import React from 'react'
import { useEffect } from 'react'
import style from './AlertBox.module.scss'
function AlertBox({alert,errorStatus,index}) {
  const messages ={
    nameSurname: "Name and surname should contain at least 2 words and ma",
    country: 'Country name length should be between 2 to 40 chars and contain only letters ',
    city: 'City name length should be between 2 to 40 chars and contain only letters ',
    email:' Email format should be valid',
  }
  useEffect(() =>{
    console.log(errorStatus[alert])
  } ,[])
  return (
    <div className={`${style.alertCard} ${errorStatus[alert] && style.displayAlert}`}>
      <div>
      </div>
      <h5>Error while adding link element</h5>
      <p>{messages[alert]}</p>
      
    </div>
  )
}

export default AlertBox