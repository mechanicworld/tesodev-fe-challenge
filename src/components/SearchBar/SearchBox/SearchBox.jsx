import React from 'react'
import style from './SearchBox.module.scss'
import searchIcon from '../../../assets/img/search-icon.svg'
import Button from '../../utils/Buttons/Button/Button'

function SearchBox({  handleSearchList,  navigateSearchResult,
  search}) {
  return (
    <div className={style.container}>
        <img className={style.searchIcon} src={searchIcon} alt="search-icon" />
        <input          
          onChange={handleSearchList}
          placeholder="Search"
          value={search}
          className={style.searchArea}
          type="text"          
        />
        <Button onClick={navigateSearchResult} buttonName={"Search"} />
      </div>
  )
}

export default SearchBox