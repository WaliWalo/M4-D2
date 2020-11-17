import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default App;