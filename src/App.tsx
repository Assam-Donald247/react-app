import "./App.css";
import Authwrapper from "./components/Authwrapper/Authwrapper";
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <div className="start-button">
      <SpeedInsights />
      <div className="page">
        <Authwrapper />
      </div>
    </div>
  );
}

export default App;
