import React from "react";
import Home from "./pages/Home";
import RequestAQuote from "./pages/RequestAQuote";
import CRInformation from "./pages/CRInformation";
import QuantityInformation from "./pages/QuantityInformation";
import Disclaimer from "./pages/Disclaimer";
import Error from "./pages/Error";
import { Switch, Route } from "react-router-dom";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/request-a-quote" component={RequestAQuote} />
        <Route
          exact
          path="/customer-receiver-information"
          component={CRInformation}
        />
        <Route
          exact
          path="/quantity-information"
          component={QuantityInformation}
        />
        <Route exact path="/disclaimer" component={Disclaimer} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
