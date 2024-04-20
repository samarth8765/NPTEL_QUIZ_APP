import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import ResultPage from "./components/ResultPage";

function App(): React.JSX.Element {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/result" element={<ResultPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
