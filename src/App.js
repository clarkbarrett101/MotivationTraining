import React from "react";
import Slide from "./Slide";
import slides from "./slideContents.json";
import ReportCard from "./ReportCard";
function App() {
  document.title = "Motivation Training";
  document.body.style.backgroundColor = "#ffe";
  const slide = slides[0];
  const [videoId, setVideoId] = React.useState(0);
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
        video={"./" + parseInt(slide.baseColor) + ".mp4"}
        questionPrompt={slide.question}
        baseColor={parseInt(slide.baseColor)}
        next={next}
      />
    );
  }
  return <div className="App">{getSlide()}</div>;
}

export default App;
