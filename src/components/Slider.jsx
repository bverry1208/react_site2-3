import React from 'react'

const sliderInfo = [
    {
        title: "LIFE <br/> = MUSIC",
        desc: "music is my life <br/> 언젠간 내게 기회가 올거야<br/> 내 노래를 들려줄",
        btn: "자세히 보기",
        btnL: "이전이미지",
        btnR: "다음이미지"
    }
]

function Slider() {
  return (
    <section id="sliderType" className="slider__wrap nexon">
    <h2 className="ir_so">슬라이드 영역</h2>
    <div className="slider__inner">
        <div className="slider">
            <div className="slider__img">
                <div className="desc">
                    <h3>{sliderInfo[0].title}</h3>
                    <p>{sliderInfo[0].desc}
                    </p>
                    <div className="btn">
                        <a href="#" className="white">{sliderInfo[0].btn}</a>
                    </div>
                </div>
            </div>
            <div className="slider__arrow">
                <a href="#" className="left"><span className="ir_pm">{sliderInfo[0].btnL}</span></a>
                <a href="#" className="right"><span className="ir_pm">{sliderInfo[0].btnR}</span></a>
            </div>
            <div className="slider__dot">
                <a href="#" className="dot active"><span className="ir_pm">1</span></a>
                <a href="#" className="dot"><span className="ir_pm">2</span></a>
                <a href="#" className="dot"><span className="ir_pm">3</span></a>
                <a href="#" className="dot"><span className="ir_pm">4</span></a>
                <a href="#" className="play"><span className="ir_pm">자동플레이</span></a>
                <a href="#" className="stop"><span className="ir_pm">정지</span></a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Slider