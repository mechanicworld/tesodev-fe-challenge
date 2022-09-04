import React, { useRef, useState, useEffect } from "react";
import NewsCard from "./NewsCard/NewsCard";
import style from "./NewsSlider.module.scss";

function NewsSlider() {
  const [cardWidth, setCardWidth] = useState(356);
  const [transformSlide, setTransformSlide] = useState(0);
  const cards = useRef(0);


  const handleLeftSlide = (e) =>{
    e.preventDefault()
    if(transformSlide !== 0 ){
      cards.current.style.transform = `translateX(-${cardWidth * (transformSlide - 1)}px)`
      setTransformSlide(x => x - 1)
    }

  } 
  const handleRightSlide = (e) =>{
    e.preventDefault()
    if(transformSlide < mockNews.length - 3 ){
      cards.current.style.transform = `translateX(-${cardWidth * (transformSlide + 1)}px)`
      setTransformSlide(x => x + 1)
    }else{
      cards.current.style.transform = `translateX(-${cardWidth * (0)}px)`
      setTransformSlide(x => x = 0)
    }
  } 

  const mockNews = [
    {
      id: 1,
      info: "1h ago-by Oguz DEMIR",
      title: "Lorem ipsum dolares",
    },
    {
      id: 2,
      info: "5h ago-by Oguz DEMIR",
      title: "Lorem ipsum dolares",
    },
    {
      id: 3,
      info: "8h ago-by Oguz DEMIR",
      title: "Lorem ipsum dolares",
    },
    {
      id: 4,
      info: "9h ago-by Oguz DEMIR",
      title: "Lorem ipsum dolares",
    },
    {
      id: 5,
      info: "12h ago-by Oguz DEMIR",
      title: "Lorem ipsum dolares",
    },
  ];
  return (
    <div className={style.containerCenter}>
      <div className={style.container}>
        <button
          disabled={transformSlide === 0}
          className={ transformSlide !== 0 ? style.leftSlide : style.disabled }
          onClick={handleLeftSlide}
        >
          {`<`}
        </button>
        <div className={style.slideContainer}>
          <div ref={cards} className={style.slideCards}>
            {mockNews.map((news, index) => (
              <NewsCard
                key={index}
                imgName={`img${news.id}`}
                newsInfo={news.info}
                newsTitle={news.title}
              />
            ))}
          </div>
        </div>
        <button
          onClick={handleRightSlide}
          className={style.rightSlide}
        >{`>`}</button>
      </div>
    </div>
  );
}

export default NewsSlider;
