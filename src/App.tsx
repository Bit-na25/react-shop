import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Nav />
        <div className="main">
          <Router />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
