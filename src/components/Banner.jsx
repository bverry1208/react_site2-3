import React from 'react'

const info = [
    {
        title: "YOUTUBE",
        desc: "더 많은 노래는 유튜브에서 확인하실 수 있습니다.<br/>구독과 좋아요 알림 설정까지 ~!",
        btn: "자세히 보기"
    }
]

function Banner() {
  return (
    <>
        <section id="bannerType" className="banner__wrap nexon">
            <h2 className="ir_so">슬라이드 영역</h2>
            <div className="banner__inner">
                <div className="banner">
                    <div className="banner__img">
                        <div className="desc">
                            <h3>{info[0].title}</h3>
                            <p>{info[0].desc}</p>
                            <div className="btn">
                                <a href="#" className="white">{info[0].btn}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Banner;