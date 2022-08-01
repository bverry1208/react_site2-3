import React from "react";
import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Text from "./components/Text";
import Image from "./components/Image";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Contents from "./components/Contents";
import Card02 from "./components/Card02";


function App() {
  return (
    <>
      <Header />
      <Contents>
        <Slider />
        <Text />        
        <Image />
        <Card />
        <Banner />
        <Card02 />
      </Contents>
      <Footer />
    </>
  );
};

export default App;