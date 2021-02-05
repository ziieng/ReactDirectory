import React from "react";
import Directory from "./pages/Directory";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Directory />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
