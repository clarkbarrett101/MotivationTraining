import React, { useEffect } from "react";
import "./App.css";
export default function Slide({
  response,
  setResponse,
  title,
  body,
  video,
  questionPrompt,
  baseColor,
  next,
  keyPoint,
}) {
  const [isActive, setIsActive] = React.useState(false);
  const [currentResponse, setCurrentResponse] = React.useState("");
  const imageSize = window.innerHeight * 0.4;
  const [currentColor, setCurrentColor] = React.useState(baseColor);
  const [timer, setTimer] = React.useState(0);
  let hueA = (currentColor + 40) % 360;
  const hueB = currentColor % 360;
  const hueC = (currentColor - 40) % 360;
  const bodySize = 80 / Math.sqrt(body.length);
  const heightMod = window.innerHeight * 0.008;
  useEffect(() => {
    setTimeout(() => {
      setCurrentColor((baseColor + Math.cos(timer) * 20) % 360);
      setTimer(timer + 0.1);
    }, 100);
  }, [timer]);
  const styles = {
    keyPoint: {
      color: `hsl(${hueC}, 75%, 75%)`,
      fontSize: 6 * heightMod,
      padding: 10,
      margin: 10,
      filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
      fontStyle: "italic",
      fontWeight: "bold",
      alignSelf: "flex-start",
      textAlign: "center",
      // backgroundColor: `hsla(${hueC}, 50%, 75%, 1)`,
      borderRadius: 100,
    },
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: `hsl(${hueA}, 30%, 50%)`,
      height: "90vh",
      padding: 20,
      margin: 20,
      borderRadius: 20,
      filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
    },
    title: {
      color: `hsl(${hueC}, 70%, 75%)`,
      fontSize: 4.5 * heightMod,
      alignSelf: "center",
      filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
      textAlign: "center",
    },
    body: {
      flex: 3,
      backgroundColor: `hsl(${hueB}, 50%, 75%)`,
      borderRadius: 20,
      fontSize: bodySize * heightMod,
      color: `hsl(${hueB}, 100%, 25%)`,
      fontWeight: "bold",
      padding: 10,
      margin: 0,
      width: "97%",
      filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
    },
    video: {
      borderRadius: 20,
      height: window.innerHeight * 0.8,
      width: window.innerHeight * 0.8 * 0.564,
      filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
      resize: "cover",
    },
    bodyContainer: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      padding: 0,
      width: "100%",
    },
    inputField: {
      flex: 3,
      padding: 10,
      borderRadius: 20,
      border: "none",
      backgroundColor: `hsl(${hueB}, 50%, 75%)`,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      width: "97%",
      filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
    },
    questionPrompt: {
      color: `hsl(${hueB}, 100%, 25%)`,
      fontWeight: "bold",
      fontSize: 3 * heightMod,
    },
    inputFieldText: {
      color: `hsl(${hueB}, 100%, 25%)`,
      fontFamily: "Quicksand, sans-serif",
      backgroundColor: `hsl(${hueB}, 50%, 75%)`,
      border: "none",
      borderRadius: 10,
      fontWeight: "bold",
      fontSize: 3 * heightMod,
      flex: 1,
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.keyPoint}>{title || "Slide Topic"}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <video
          src={video || `https://picsum.photos/500`}
          alt="placeholder"
          style={styles.video}
          autoPlay={true}
          muted={true}
          loop={true}
        />
        <div style={styles.bodyContainer}>
          <p style={styles.title} hidden={!keyPoint}>
            {keyPoint || ""}
          </p>
          <p style={styles.body}>{body || "Content Body"}</p>
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
              width="25%"
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
            isActive={isActive}
            fontSize={25}
            onClick={() => {
              next();
              setIsActive(!isActive);
            }}
          />
        </div>
      </div>
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
        width: "100%",
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
          filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25))",
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
