import { useNavigate } from "react-router-dom";

export default function Home(): React.JSX.Element {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Forests and their management</h1>
      <h2>Number of questions: 120</h2>
      <p>Description blah blah blah</p>

      <button onClick={() => navigate("/quiz")}>Start Quiz</button>
    </div>
  );
}
