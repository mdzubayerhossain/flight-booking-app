import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Popular from "./components/Popular";
import Subscribe from "./components/Subscribe";

const App = () => {
  return (
    <div
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >

      {/* navbar */}
      <Navbar></Navbar>

      {/* banner */}
      <Banner></Banner>

      {/* featured */}
      <Featured></Featured>

      {/* deals & offers */}
      <Offers></Offers>

      {/* popular */}
      <Popular></Popular>

      {/* blogs */}
      <Blog></Blog>

      {/* subscribe */}
      <Subscribe></Subscribe>

      {/* footer */}
      <Footer></Footer>

    </div>
  );
};

export default App;