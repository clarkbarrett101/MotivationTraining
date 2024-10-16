import React from "react";
import "./App.css";
export default function Slide({
  response,
  setResponse,
  title,
  body,
  image,
  questionPrompt,
  baseColor,
  next,
}) {
  const [isActive, setIsActive] = React.useState(false);
  const [currentResponse, setCurrentResponse] = React.useState("");
  const imageSize = window.innerHeight * 0.4;

  const hueA = (baseColor + 40) % 360;
  const hueB = baseColor % 360;
  const hueC = (baseColor - 40) % 360;
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: `hsl(${hueA}, 50%, 50%)`,
      height: "90vh",
      padding: 20,
      margin: 20,
      borderRadius: 10,
    },
    title: {
      color: `hsl(${hueC}, 100%, 75%)`,
      fontSize: 35,
    },

    body: {
      flex: 3,
      backgroundColor: `hsl(${hueB}, 50%, 75%)`,
      borderRadius: 20,
      fontSize: 25,
      color: `hsl(${hueB}, 100%, 25%)`,
      fontWeight: "bold",
      padding: 20,
      height: "80%",
    },
    image: {
      height: imageSize,
      width: "auto",
      borderRadius: 20,
    },
    bodyContainer: {
      flex: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
    },
    inputField: {
      flex: 1,
      padding: 20,
      borderRadius: 20,
      border: "none",
      backgroundColor: `hsl(${hueB}, 50%, 75%)`,
      height: "50%",
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    questionPrompt: {
      color: `hsl(${hueB}, 100%, 25%)`,
      fontWeight: "bold",
      fontSize: 20,
    },

    inputFieldText: {
      color: `hsl(${hueB}, 100%, 25%)`,
      backgroundColor: `hsl(${hueB}, 50%, 75%)`,
      border: "none",
      borderRadius: 10,
      fontWeight: "bold",
      fontSize: 20,
      flex: 1,
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title || "Slide Topic"}</h1>
      <div style={styles.bodyContainer}>
        <img
          src={image || `https://picsum.photos/500`}
          alt="placeholder"
          style={styles.image}
        />
        <p style={styles.body}>{body || "Content Body"}</p>
      </div>
      <p style={styles.inputField}>
        <div style={styles.questionPrompt}>
          {questionPrompt || "Question Prompt?"}
        </div>
        <input
          style={styles.inputFieldText}
          type="text"
          placeholder="Type your response here"
          className="input"
          value={currentResponse}
          onChange={(e) => setCurrentResponse(e.target.value)}
        />
        <SimpleButton
          hoverText="Submit Response"
          normalText="Submit Response"
          hoverColor={`hsl(${hueC}, 100%, 25%)`}
          normalColor={`hsl(${hueC}, 100%, 75%)`}
          width="20%"
          onClick={() => {
            setResponse(currentResponse);
            setIsActive(!isActive);
          }}
        />
      </p>
      <SimpleButton
        hoverText="Next"
        normalText="Next"
        hoverColor={`hsl(${hueC}, 100%, 25%)`}
        normalColor={`hsl(${hueC}, 100%, 75%)`}
        inactiveColor={`hsl(${hueC}, 25%, 50%)`}
        width="21%"
        isActive={isActive}
        fontSize={25}
        onClick={() => {
          next();
          setIsActive(!isActive);
        }}
      />
    </div>
  );
}
function SimpleButton({
  hoverText,
  normalText,
  hoverColor,
  normalColor,
  inactiveColor,
  width = "50%",
  isActive = true,
  onClick,
  fontSize,
}) {
  const [buttonHover, setButtonHover] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      <button
        style={{
          backgroundColor: isActive
            ? buttonHover
              ? hoverColor || "hsl(200, 100%, 25%)"
              : normalColor || "hsl(200, 100%, 75%)"
            : inactiveColor || "hsl(200, 100%, 50%)",
          color: isActive
            ? buttonHover
              ? normalColor || "hsl(200, 100%, 75%)"
              : hoverColor || "hsl(200, 100%, 25%)"
            : "hsl(200, 25%, 75%)",
          fontSize: fontSize || 15,
          fontWeight: "bold",
          borderRadius: 50,
          border: "none",
          width: width,
          padding: 10,
          fontFamily: "Quicksand, sans-serif",
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            return;
          }
          setButtonHover(true);
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            return;
          }
          setButtonHover(false);
        }}
        onClick={(e) => {
          if (!isActive) {
            return;
          }
          if (onClick) {
            onClick();
          }
        }}
      >
        {buttonHover ? hoverText || "Hovered" : normalText || "Hover me"}
      </button>
    </div>
  );
}
