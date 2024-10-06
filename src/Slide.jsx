import React from "react";

export default function Slide() {
  const [isActive, setIsActive] = React.useState(false);
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "hsl(200, 90%, 40%)",
      height: "90vh",
      padding: 20,
      margin: 20,
      borderRadius: 10,
    },
    title: {
      color: "hsl(180, 100%, 75%)",
      fontSize: 25,
    },

    body: {
      flex: 1,
      backgroundColor: "hsl(180, 50%, 85%)",
      borderRadius: 20,
      color: "hsl(180, 100%, 25%)",
      fontWeight: "bold",
      padding: 20,
      height: "50%",
    },
    bodyContainer: {
      flex: 1,
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
      backgroundColor: "hsl(180, 50%, 85%)",
      height: "50%",
      display: "flex",
      flexDirection: "column",
    },
    questionPrompt: {
      color: "hsl(180, 100%, 25%)",
      fontWeight: "bold",
      fontSize: 20,
    },

    inputFieldText: {
      color: "hsl(180, 100%, 25%)",
      backgroundColor: "none",
      border: "none",
      borderRadius: 10,
      fontWeight: "bold",
      fontSize: 20,
      flex: 1,
      margin: 10,
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Slide</h1>
      <div style={styles.bodyContainer}>
        <p style={styles.body}>Content Body</p>

        <p style={styles.inputField}>
          <div style={styles.questionPrompt}>Question Prompt?</div>
          <input
            style={styles.inputFieldText}
            type="text"
            placeholder="Type your response here"
          />
          <SimpleButton
            hoverText="Submit Response"
            normalText="Submit Response"
            hoverColor="hsl(200, 100%, 25%)"
            normalColor="hsl(200, 100%, 75%)"
            onClick={() => {
              setIsActive(!isActive);
            }}
          />
        </p>
      </div>
      <SimpleButton
        hoverText="Next"
        normalText="Next"
        hoverColor="hsl(200, 100%, 25%)"
        normalColor="hsl(200, 100%, 75%)"
        inactiveColor="hsl(200, 25%, 50%)"
        width="20%"
        isActive={isActive}
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
          fontSize: 20,
          fontWeight: "bold",
          borderRadius: 20,
          border: "none",
          width: width,
          padding: 10,
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
