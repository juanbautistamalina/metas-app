import "./App.css";
import Encabezado from "./componentes/compartidos/Encabezado";
import Pie from "./componentes/compartidos/Pie";
import Principal from "./componentes/compartidos/Principal";
import Meta from "./componentes/lista/Meta";

function App() {
  return (
    <div className="App">
      <Encabezado />
      <Principal>
        <Meta />
      </Principal>
      <Pie />
    </div>
  );
}

export default App;
