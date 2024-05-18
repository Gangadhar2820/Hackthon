import "./App.css";
import Affected from "./components/Affected/Affected";
import Neighbour from "./components/NeighbourCountries/Neighbour";
import Vaccinated from "./components/Vaccinated/Vaccinated";

function App() {
  return (
    <>
      <Affected />
      <Vaccinated />
      <Neighbour />
    </>
  );
}

export default App;
