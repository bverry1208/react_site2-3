import React from 'react'

function Footer() {
  return (
    <footer id="footerType" className="footer__wrap section nexon gray">
        <h2 className="ir_so">푸터 영역</h2>
        <div className="footer__inner container">
            <div className="footer__menu">
                <div>
                    <h3>Layout</h3>
                    <ul>
                        <li><a href="/">layout01</a></li>
                        <li><a href="/">layout02</a></li>
                        <li><a href="/">layout03</a></li>
                        <li><a href="/">layout04</a></li>
                        <li><a href="/">layout05</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Header</h3>
                    <ul>
                        <li><a href="/">menu01</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Main</h3>
                    <ul>
                        <li><a href="/">image01</a></li>
                        <li><a href="/">video02</a></li>
                        <li><a href="/">slider03</a></li>
                    </ul>
                </div>
                <div>
                    <h3>content</h3>
                    <ul>
                        <li><a href="/">text01</a></li>
                        <li><a href="/">image02</a></li>
                        <li><a href="/">image/text03</a></li>
                        <li><a href="/">card04</a></li>
                        <li><a href="/">banner05</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Footer</h3>
                    <ul>
                        <li><a href="/">contect01</a></li>
                        <li><a href="/">footer02</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Site view</h3>
                    <ul>
                        <li><a href="/">webstandard</a></li>
                        <li><a href="/">responsive</a></li>
                        <li><a href="/">parallax</a></li>
                        <li><a href="/">portfolio</a></li>
                    </ul>
                </div>
            </div>
            <address className="footer__right">
                ©2022 bverry. All rights reserved.
            </address>
        </div>
    </footer>
  )
}

export default Footer