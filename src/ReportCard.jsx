export default function ReportCard({ questions, responses }) {
  const styles = {
    container: {},
    bubble: {
      backgroundColor: "lightblue",
      padding: 10,
      margin: 10,
      borderRadius: 10,
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
  };
  function responseBubble(question, response) {
    return (
      <div style={styles.bubble}>
        <div style={styles.question}>{question}</div>
        <div style={styles.response}>{response || "no Response"}</div>
      </div>
    );
  }
  function getResponses() {
    let output = [];
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const response = responses[i];
      output.push(responseBubble(question, response));
    }
    return output;
  }
  return <div style={styles.container}>{getResponses()}</div>;
}
