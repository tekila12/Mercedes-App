import React from 'react'
import {FaSearch} from 'react-icons/fa'

const Search:React.FC = () => {
    return (
        <div className='Search__container'>
            <img className='Mercedes__logo' src='https://www.mercedes-benz.com/etc/designs/brandhub/frontend/static-assets/header/logo.svg' alt='mercedesLogo'/>
            <div className="wrap">
   <div className="search">
      <input type="text" className="searchTerm" placeholder="What Mercedes cars you wish to buy?" />
      <button type="submit" className="searchButton">
      <FaSearch />
     </button>
          
   </div>
</div>
        </div>
    )
}

export default Search
