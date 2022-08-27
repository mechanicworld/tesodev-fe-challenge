import React from 'react'
import style from './NewsCard.module.scss'

function NewsCards({imgName, newsTitle,newsInfo,refInfo}) {
  // console.log(img)
  // console.log(import.meta.url)
 
  return (
    <div ref={refInfo} className={style.newsBox}>
      <div>
        <img src={`/${imgName}.png`} alt="" />
      </div>
      <div>
        <div className={style.newsTitle}>
          {newsTitle}
        </div>
        <div className={style.newsInfo}>
          {newsInfo}
        </div>
      </div>
    </div>
  )
}

export default NewsCards