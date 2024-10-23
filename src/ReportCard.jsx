export default function ReportCard({ questions, responses }) {
  const styles = {
    container: {
      flexDirection: "column",
      justifyContent: "center",
      flex: 1,
      alignItems: "center",
      borderRadius: 10,
      padding: 20,
      fontSize: 35,
      textAlign: "center",
    },
    bubble: {
      backgroundColor: "lightblue",
      padding: 10,
      margin: 10,
      borderRadius: 100,
      flex: 1,
      filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25))",
    },
    question: {
      fontWeight: "bold",
      fontSize: 20,
      fontStyle: "italic",
    },
    response: {
      fontSize: 20,
      alignSelf: "center",
      textAlign: "center",
    },
    printButton: {
      // position: "absolute",
      fontSize: 30,
      fontWeight: "bold",
      padding: 10,
      borderRadius: 100,
      backgroundColor: "lightgreen",
      color: "black",
      fontFamily: 'Quicksand, "sans-serif"',
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 20,
      filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25))",
    },
    image: {
      // position: "absolute",
      zIndex: -1,
      // left: window.innerWidth / 2 - 150,
      width: 300,
      height: 300,
    },
    congatulations: {
      fontSize: 40,
      width: 600,
      padding: 20,
      fontWeight: "bold",
    },
  };
  function responseBubble(question, response) {
    return (
      <div style={styles.bubble}>
        <div style={styles.question}>{question}</div>
        <div style={styles.response}>{response || "No Response"}</div>
      </div>
    );
  }
  function getResponses() {
    let output = [];
    for (let i = 0; i < questions.length; i++) {
      if (!responses[i]) {
        continue;
      }
      const question = questions[i];
      const response = responses[i];
      output.push(responseBubble(question, response));
    }
    return output;
  }
  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        backgroundColor: "lightyellow",
        alignItems: "center",
      }}
    >
      <video
        src="./Final.mp4"
        autoPlay
        loop
        style={{
          borderRadius: 20,
          height: window.innerHeight * 0.9,
          width: window.innerHeight * 0.9 * 0.565,
          filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
          margin: 20,
        }}
      />
      <div style={styles.container}>
        {getResponses()}
        <div
          style={{
            top: 0,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <div style={styles.congatulations}>
            Congratulations on completing the motivation training!
          </div>
          <button style={styles.printButton} onClick={() => window.print()}>
            Click Here to Print Responses
          </button>
        </div>
      </div>
    </div>
  );
}
