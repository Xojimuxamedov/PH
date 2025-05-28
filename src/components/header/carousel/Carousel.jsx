import React, { useState, useEffect } from "react";
import "./homeCarousel.scss";

const carauselItems = [
  {
    id: 1,
    content: "Item 1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    content: "Item 2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    content: "Item 3",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 4,
    content: "Item 4",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 5,
    content: "Item 5",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const Carousel = () => {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => (prev === carauselItems.length ? 1 : prev + 1));
    }, 5000); // har 5 sekundda o‘tadi
  }, []);
  console.log(number);

  return (
    <div className="carousel">
      <button
        onClick={() =>
          number == 1 ? setNumber(carauselItems.length) : setNumber(number - 1)
        }
        className="carousel-button carousel-button-prev"
      >
        ◄
      </button>
      <button
        onClick={() =>
          number == carauselItems.length ? setNumber(1) : setNumber(number + 1)
        }
        className="carousel-button carousel-button-next"
      >
        ►
      </button>
      <div className="carousel-items">
        {carauselItems.map((item) => {
          let leftPosition = "100%"; // default: hali ko‘rinmaganlar (chapdan chiqadi)

          if (item.id === number) {
            leftPosition = "0%"; // hozirgi ko‘rsatilayotgan (active) item
          } else if (
            item.id === number - 1 ||
            (number === 1 && item.id === carauselItems.length)
          ) {
            leftPosition = "-100%"; // chiqib ketayotgan (oldingi) item
          }

          return (
            <div
              key={item.id}
              className={`carousel-item ${item.id === number ? "active" : ""}`}
              id={`carousel-item-${item.id}`}
              style={{
                left: leftPosition,
                position: "absolute",
                transition: "left 0.8s ease",
                width: "100%",
              }}
            >
              <h3 className="carousel-title">{item.content}</h3>
              <p className="carousel-text">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
