import { useState } from "react";
import "./App.css";
import Figure from "./components/Figure";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  const works = [
    { id: 0, title: "work1", url: "/images/img-1.jpg", desc: "설명1" },
    { id: 1, title: "work2", url: "/images/img-2.jpg", desc: "설명2" },
    { id: 2, title: "work3", url: "/images/img-3.jpg", desc: "설명3" },
    { id: 3, title: "work4", url: "/images/img-4.jpg", desc: "설명4" },
    { id: 4, title: "work5", url: "/images/img-1.jpg", desc: "설명5" },
    { id: 5, title: "work6", url: "/images/img-2.jpg", desc: "설명6" },
    { id: 6, title: "work7", url: "/images/img-3.jpg", desc: "설명7" },
    { id: 7, title: "work8", url: "/images/img-4.jpg", desc: "설명8" },
  ];
  const [id, setId] = useState(0);
  const currentIndex = works.findIndex(w => w.id === id);
  const work = works[currentIndex] ?? works[0];

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + works.length) % works.length;
    setId(works[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % works.length;
    setId(works[nextIndex].id);
  };

  return (
    <>
      <Header />
      <Nav data={works} activeId={id} onChangeMode={setId} />
      <div className="carousel">
        <button type="button" className="carousel-button prev-button" onClick={handlePrev}>
          <img src="/images/left.png" alt="이전" />
        </button>

        {work && <Figure data={work} />}

        <button type="button" className="carousel-button next-button" onClick={handleNext}>
          <img src="/images/right.png" alt="다음" />
        </button>
      </div>
    </>
  );
}

export default App;
