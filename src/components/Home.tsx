import { useNavigate } from "react-router-dom";

export default function Home(): React.JSX.Element {
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Forests and their management</h1>
      <h2 style={{ textAlign: "center" }}>Number of questions: 120</h2>
      <h1 style={{ textAlign: "center", color: "red" }}>Chaos is a ladder</h1>

      <button onClick={() => navigate("/quiz")} style={{ marginLeft: "47%" }}>
        Start Quiz
      </button>
    </div>
  );
}
