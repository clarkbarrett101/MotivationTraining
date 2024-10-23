export default function VideoSlide({ src, color, next }) {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: `hsl(${color}, 30%, 50%)`,
      height: "90vh",
      padding: 20,
      margin: 20,
      borderRadius: 10,
      justifyContent: "center",
    },
    video: {
      alignSelf: "center",
      maxHeight: window.innerHeight * 0.8,
      filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
      borderRadius: 10,
      maxWidth: window.innerWidth * 0.9,
      resize: "cover",
    },
    nextButton: {
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
  };
  return (
    <div style={styles.container}>
      <video style={styles.video} controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button style={styles.nextButton} onClick={next}>
        Next
      </button>
    </div>
  );
}
