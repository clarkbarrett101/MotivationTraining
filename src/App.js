import React from "react";
import Slide from "./Slide";
import slides from "./slideContents.json";
import ReportCard from "./ReportCard";
import VideoSlide from "./VideoSlide";
function App() {
  document.title = "Motivation Training";
  document.body.style.backgroundColor = "#ffe";
  const slide = slides[0];
  const [responses, setResponses] = React.useState([]);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  function next() {
    setCurrentSlide(currentSlide + 1);
  }
  function getSlide() {
    if (currentSlide === slides.length) {
      return (
        <ReportCard
          questions={slides.map((slide) => slide.question)}
          responses={responses}
        />
      );
    }
    const slide = slides[currentSlide];
    if (slide.type === "Video") {
      return (
        <VideoSlide
          src={slide.videoLink}
          color={(currentSlide * 30 + 90) % 360}
          next={next}
        />
      );
    } else {
      const index = currentSlide;
      return (
        <Slide
          key={index}
          response={responses[index]}
          setResponse={(response) => {
            const newResponses = [...responses];
            newResponses[index] = response;
            setResponses(newResponses);
          }}
          title={slide.title}
          body={slide.content}
          video={"./" + ((currentSlide * 30 + 60) % 360) + ".mp4"}
          questionPrompt={slide.question}
          baseColor={(currentSlide * 30 + 60) % 360}
          next={next}
          keyPoint={slide.keyPoint}
        />
      );
    }
  }
  return <div className="App">{getSlide()}</div>;
}

export default App;
