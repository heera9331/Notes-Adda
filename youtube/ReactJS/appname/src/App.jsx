import "./App.css";
import Header from "./components/Header/Header.jsx";
import { useState } from "react";

function Post({ title, desc }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function App() {
  const posts = [
    {
      title: "locate",
      desc: "contain certain dance wherever send factor knew eye went experience car soon court disease spring salmon being follow circus difficult well escape ice split",
    },
    {
      title: "native",
      desc: "over whom wish away satellites enough last born shake shore lungs human involved oil whatever though silly party engine birth twenty rice can breathing",
    },
    {
      title: "speech",
      desc: "what paint plastic slide aside keep even work reader wish event larger exist taken dull hospital fight bent consider jungle three belt thank feature",
    },
    {
      title: "shot",
      desc: "smallest molecular sentence tree record brother proper eye swing no express problem successful vessels largest pole drew lunch whom model suddenly weight gentle aloud",
    },
    {
      title: "learn",
      desc: "last current clean pencil loss swimming gradually excited here alive daughter one sheep doctor secret pool opposite frozen rapidly captured pine close just lot",
    },
    {
      title: "walk",
      desc: "pour each grandfather something bill man character brush story lungs refer available than loud solution quickly himself barn useful beauty face high grown score",
    },
  ];
  return (
    <>
      <Header title="header" />
      {posts.length > 0 &&
        posts.map(function (post, idx) {
          return <Post title={post.title} desc={post.desc} key={idx} />;
        })}
    </>
  );
}

export default App;
