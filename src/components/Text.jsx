import React from 'react'

const text = [
    {
        name: "pH-1",
        desc: "H1GHR MUSIC의 창립 멤버이자 소속 래퍼이다. 미국 국적이며 뉴욕 롱아일랜드 출신이다. 메킷레인의 오왼과 함께 듀오 그룹인 'SOUS CHEFS' 활동을 한 경력이 있다."
    },
    {
        name: "Toil",
        desc: "대한민국의 힙합 프로듀서이다. Daytona Entertainment의 소속 아티스트다. 베이스를 전공했으며 기타를 기반으로 하는 록 사운드의 비트가 특징이다."
    }
]

const text02 = [
    {
        name: "원슈타인",
        desc: "대한민국의 래퍼 겸 싱어송라이터로, 마미손과 김승민 등이 소속되어 있는 뷰티풀노이즈에 소속되어 있었으나 뷰티플 노이즈와는 2022년 4월 13일 계약이 종료되었다."
    },
    {
        name: "백예린",
        desc: "밴드 The Volunteers의 프론트맨이자 싱어송라이터이다. 탄탄한 기본기와 발성, 독보적인 음색으로 주목받았고 거의 모든 장르를 자신만의 감성으로 감쌀 정도로 가창력과 곡 해석이 뛰어나다는 평을 받고 있다."
    }
]


function TextInfo({name, desc}) {
  return (
    <div className="text">
        <h3>{name}</h3>
        <p>{desc}</p>
    </div>
  )
}


function Text() {
  return (
    <section id="textType" className="text__wrap section nexon">
    <div className="text__inner container">
        <div className="text__inner__wrap">
            <div className="text">
                <span>MY Artist</span>
                <h3>나의 아티스트</h3>
                <p>좋아하는 아티스트의 정보입니다.<br/>
                    더 많은 정보는 프로필을 클릭해주세요 .
                </p>
            </div>
        </div>
        <div className="text__inner__wrap">
            {text.map((txt) => (
                <TextInfo
                key={txt.name}
                name={txt.name}
                desc={txt.desc}
                />
            ))}
        </div>
        <div className="text__inner__wrap">
            {text02.map((txt) => (
                <TextInfo
                key={txt.name}
                name={txt.name}
                desc={txt.desc}
                />
            ))}
        </div>
    </div>
</section>
  );
};

export default Text;