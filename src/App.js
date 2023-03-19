import "./App.css";
import Header from "./app/shared/Header";
import Footer from "./app/shared/Footer";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
