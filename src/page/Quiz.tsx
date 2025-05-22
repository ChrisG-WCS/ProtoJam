import LivesDisplay from "../components/LivesDisplay";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const { id } = useParams();

  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h1>ICI LE QUIZ</h1>
      <p>Prépare-toi à tester tes connaissances !</p>
      <p>Question numéro {id}</p>
      <LivesDisplay />
    </section>
  );
};

export default Quiz;
