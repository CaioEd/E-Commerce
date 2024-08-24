import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
    <div className="header">
            <a href="/">
              <h1>E-commerce</h1>
            </a>
            <div className="right-header">
                <input type="text" className='search-input'  placeholder='Pesquisar'/>
                <a href="/login">
                    <i className="bi bi-person-circle" style={{ fontSize: '30px' }}></i>
                </a>
            </div>
    </div>
    </>
  )
}

export default Header