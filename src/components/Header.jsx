import React from 'react'

function Header() {
  return (
    <header id="headerType" className="header__wrap nexon">
        <h1 className="header__logo">
            <a href="/">Music <em>on</em></a>
        </h1>
        <div className="header__inner">
            <nav className="header__menu">
                <h2 className="ir_so">메인 메뉴</h2>
                <ul>
                    <li><a href="/">Header</a></li>
                    <li><a href="/">Slider</a></li>
                    <li><a href="/">Images</a></li>
                    <li><a href="/">Contents</a></li>
                    <li><a href="/">Footer</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header