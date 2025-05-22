import LivesDisplay from "../components/LivesDisplay";

const Quiz = () => {
  return (
    <>
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h1>ICI LE QUIZ</h1>
        <p>Prépare-toi à tester tes connaissances !</p>
        <LivesDisplay />
      </section>
    </>
  );
};
export default Quiz;
