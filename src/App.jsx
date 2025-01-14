import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouters from "./routes/AppRouters";

function App() {
  return (
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  );
}

export default App;
