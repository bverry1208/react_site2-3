import React from 'react'

const card = [
    {
        title: "물고기",
        image: "https://cdn.music-flo.com/image/v2/album/254/387/08/04/408387254_628b1ea1_s.jpg?1653284514313/dims/resize/500x500/quality/90",
        desc: "난 땅에서도 숨을 쉴 수 있는 물고기였을지도 몰라 가끔 내 맘을 이해 못 하는 사람들을 만나도 상관없어 물속을 헤엄치는 건 하늘을 나는 기분과 같을까? ",
        btn: "assets/img/button1.png"
    },
    {
        title: "Antisocial",
        image: "https://cdn.music-flo.com/image/v2/album/916/006/06/04/406006916_605af81d_s.jpg?1616574495968/dims/resize/500x500/quality/90",
        desc: "안부를 물어도 늘 변함없지 게으른 내 앞에 쌓인 미뤄둔 일 지루한 내 일상 재미있는 거 뭐 없을까 해외를 다녀도 공연 말고 딱히놀지도 못하고 항상 많이 아쉽지",
        btn: "assets/img/button1.png"
    },
    {
        title: "Nerdy love",
        image: "https://cdn.music-flo.com/image/album/607/299/04/04/404299607_5e13e8f4.jpg?1578363125285/dims/resize/500x500/quality/90",
        desc: "알람 우는 소리에 난 wake up 비가 오고 난 후 날이 개어있어 어제 골라 놓은 옷을 dress up 그냥 단정해 잘 몰라 메이커 난 지금 서둘러 너를 데리러",
        btn: "assets/img/button1.png"
    },
    {
        title: "Homebody",
        image: "https://cdn.music-flo.com/image/album/532/423/02/04/402423532_5caed6a8.jpg?1554962089386/dims/resize/500x500/quality/90",
        desc: "I got too many thoughts and too many problems 숙면이 답인 듯 해서 또 잠 친구가 불러 난 아직 졸려 My life's a party and I called nobody",
        btn: "assets/img/button1.png"
    },
    {
        title: "Christ",
        image: "https://cdn.music-flo.com/image/album/324/339/02/04/402339324_5cb56df0.jpg?1555394033689/dims/resize/500x500/quality/90",
        desc: "It's my dedication I been waiting for something something like an answer in my life 아무리 애를 써봐도 메마른 내 영은 계속 목말라",
        btn: "assets/img/button1.png"
    },
    {
        title: "Square",
        image: "https://cdn.music-flo.com/image/album/014/286/04/04/404286014_5def1e96.jpg?1575952023571/dims/resize/500x500/quality/90",
        desc: "All the colors and personalities you can't see right through what I truly am you're hurting me without noticing I'm so, so broke like someone just robbed me",
        btn: "assets/img/button1.png"
    },
    {
        title: "Antifreeze",
        image: "https://cdn.music-flo.com/image/v2/album/708/537/06/04/406537708_61386d6c_s.jpg?1631087982172/dims/resize/500x500/quality/90",
        desc: "우린 오래전부터 어쩔 수 없는 거였어 우주 속을 홀로 떠돌며 많이 외로워하다가 어느 순간 태양과 달이 겹치게 될 때면 모든 것을 이해할 수 있을 거야",
        btn: "assets/img/button1.png"
    },
    {
        title: "Hate you",
        image: "https://cdn.music-flo.com/image/v2/album/604/536/05/04/405536604_5fd195c0_s.jpg?1607570882988/dims/resize/500x500/quality/90",
        desc: "I hate watching you aughing with all your crew 난 네가 네 사람들과 웃는 걸 보는 게 너무 싫어 I decided to not to ",
        btn: "assets/img/button1.png"
    }
]


function CardInfo({image, title, btn, desc}) {
  return (
    <article className="card">
    <figure className="card__header">
        <img className="img" src={image} alt={title}/>
    </figure>
    <div className="card__body">
        <h3 className="title">
            {title}
            <a className="btn" href="/">
                <img src={btn}/>
            </a>
        </h3>
        <p className="desc">
            {desc}
        </p>
    </div>
</article>
  )
}


function Card() {
  return (
    <section id="cardType" className="card__wrap section nexon">
    <h2>Music On</h2>
    <p>
        좋아하는 아티스트의 노래입니다. <br/>
        컨텐츠를 클릭하면 가사와 함께 노래를 감상할 수 있습니다. 
    </p>
    <div className="card__inner container">
    {card.map((txt) => (
        <CardInfo
        key={txt.title}
        title={txt.title}
        image={txt.image}
        desc={txt.desc}
        btn={txt.btn}
        />
      ))}
    </div>
</section>
  );
};

export default Card;