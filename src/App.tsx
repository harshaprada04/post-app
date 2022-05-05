import { BrowserRouter } from "react-router-dom";
import classes from "./App.css";
import { ContextProvider } from "./context/context";
import Routing from "./Routes/Routes";

function App(): any {
  return (
    <div className={classes.dispaly}>
      <header>
      <ContextProvider>
      
        <Routing/>
      
      </ContextProvider>
      </header>
    </div>
  );
}

export default App;
