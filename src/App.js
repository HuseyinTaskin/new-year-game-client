import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import PlayNormal from "./components/PlayNormal";
import PlayDouble from "./components/PlayDouble";
import PlayRisk from "./components/PlayRisk";
import PlayBomb from "./components/PlayBomb";
import List from "./components/List";

export default function App() {
  return (
    <div className="container text-center">
      <Header />

      <div className="row content">
        <div className="col-md-6">
          <Login />
          <PlayNormal />
          <PlayDouble />
          <PlayRisk />
          <PlayBomb />
        </div>

        <div className="col-md-6">
          <List />
        </div>
      </div>

      <Footer />
    </div>
  );
}
