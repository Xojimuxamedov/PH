import React, { useState, useEffect, useRef } from "react";
import "./homeCarousel.scss";
import { Link } from "react-router";

const carauselItems = [
  {
    id: 1,
    content: "Item 1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    bgImage:
      "https://d1c6gk3tn6ydje.cloudfront.net/1734906120503336960%2Fee1c0d4e5ecae82b2083a186debb5634.webp",
    link: "/about",
  },
  {
    id: 2,
    content: "Item 2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    bgImage:
      "https://d1c6gk3tn6ydje.cloudfront.net/1734906120503336960%2F9c91aa3f7824a7fdcc01871f7780cb2c.webp",
    link: "/about",
  },
  {
    id: 3,
    content: "Item 3",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    bgImage:
      "https://d1c6gk3tn6ydje.cloudfront.net/1734906120503336960%2Fc5058654bdf9d4b0465d74d8fc8cfaac.webp",
    link: "/about",
  },
  {
    id: 4,
    content: "Item 4",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    bgImage:
      "https://d1c6gk3tn6ydje.cloudfront.net/1734906120503336960%2Fb1bd6fdd4b0c4ca7b0eb3647e45de471.webp",
    link: "/about",
  },
  {
    id: 5,
    content: "Item 5",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    bgImage:
      "https://d1c6gk3tn6ydje.cloudfront.net/1734906120503336960%2F9c91aa3f7824a7fdcc01871f7780cb2c.webp",
    link: "/about",
  },
  {
    id: 6,
    content: "Item 6",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    bgImage:
      "https://angstromtechnology.com/wp-content/uploads/2022/06/GMP-Qaulifications-980x653.jpg",
    link: "/about",
  },
];

const Carousel = () => {
  const [number, setNumber] = useState(1);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false); // 🔐 Tugmalarni bloklash
  const intervalRef = useRef(null); // Auto-slide uchun

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("next");
    setNumber((prev) => (prev === carauselItems.length ? 1 : prev + 1));
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
    startAutoSlide(); // ← Qo‘shildi
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("prev");
    setNumber((prev) => (prev === 1 ? carauselItems.length : prev - 1));
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
    startAutoSlide(); // ← Qo‘shildi
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current); // Tozalash
  }, []);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection("next");
      setNumber((prev) => (prev === carauselItems.length ? 1 : prev + 1));
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    }, 3500); // 5 sekund
  };

  return (
    <div className="carousel">
      <button
        onClick={prev}
        disabled={isAnimating}
        className="carousel-button carousel-button-prev"
      >
        <i class="fa-duotone fa-solid fa-chevron-left fa-xl"></i>
      </button>
      <button
        onClick={next}
        disabled={isAnimating}
        className="carousel-button carousel-button-next"
      >
        <i class="fa-duotone fa-solid fa-chevron-right fa-xl"></i>
      </button>
      <div className="carousel-items">
        {carauselItems.map((item) => {
          let style = {
            backgroundImage: `url(${item.bgImage})`,
          };

          if (item.id === number) {
            style.left = "0%";
            style.zIndex = 2;
            style.opacity = 1;
          } else if (
            (direction === "next" &&
              item.id === (number === 1 ? carauselItems.length : number - 1)) ||
            (direction === "prev" &&
              item.id === (number === carauselItems.length ? 1 : number + 1))
          ) {
            style.left = direction === "next" ? "-100%" : "100%";
            style.zIndex = 1;
            style.opacity = 1;
          } else {
            style.left = direction === "next" ? "100%" : "-100%";
          }

          return (
            <div
              key={item.id}
              className="carousel-item"
              id={`carousel-item-${item.id}`}
              style={style}
            >
              <div className="carousel-texts">
                <h3 className="carousel-title">{item.content}</h3>
                <p className="carousel-text">{item.text}</p>
                <Link className="carousel-link" to={"/about"}>Batafsil</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;