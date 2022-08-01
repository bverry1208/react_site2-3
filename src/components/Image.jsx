import React from 'react'

const info = [
    {
        image: "http://res.heraldm.com/phpwas/restmb_allidxmake.php?idx=5&simg=201903111510202682667_20190311151139_02.jpg",
        btn: "pH-1"
    },
    {
        image: "https://img.vogue.co.kr/vogue/2022/05/style_628edcc00b58b-800x1109.jpg",
        btn: "백예린"
    },
    {
        image: "https://img.hankyung.com/photo/202111/p1065581082501208_548_thum.JPG",
        btn: "Ash Island"
    }
]


function ImageInfo({image, btn}) {
  return (
    <article className="image">
        <div className="image__header">
            <figure className="image__figure">
                <img src={image} alt={btn}/>
            </figure>
        </div>
        <div className="image__body">
            <a href="#" className="image__btn">{btn}</a>
        </div>
    </article>
  )
}


function Image() {
  return (
    <section id="imageType" className="image__wrap section nexon">
    <h2>Artist gallery</h2>
    <p>아티스트의 스냅입니다. 더 많은 사진은 아티스트의 이름을 클릭해주세요.</p>
    <div className="image__inner container">
    {info.map((txt) => (
        <ImageInfo
        key={txt.btn}
        image={txt.image}
        btn={txt.btn}
        />
      ))}
    </div>
</section>
  )
}

export default Image;