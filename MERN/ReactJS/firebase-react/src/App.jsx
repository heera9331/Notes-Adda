/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";

import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyBPnGqgaGyt-T8RE0oaD_sdFrQC2PzF-9s",
  authDomain: "sagar-services.firebaseapp.com",
  projectId: "sagar-services",
  storageBucket: "sagar-services.appspot.com",
  messagingSenderId: "87006671316",
  appId: "1:87006671316:web:c244513fea1a6d8e20a641",
  measurementId: "G-RX5JMKCMFL",
  databaseURL:
    "https://sagar-services-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let newService = {
  name: "Loading service",
  category: "Transport",
  description: "lorem apsum",
  contact: "239045023",
  provider: "Rahul",
  location: "Sagar",
};

function App() {
  const [services, setServices] = useState([]);

  function putData() {
    const date = new Date();
    const id = `${date.getFullYear()}${date.getMonth()}${date.getDay()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`;
    newService = { ...newService, id: id };
    console.log(newService);
    set(ref(db, `services/${newService.id}`), newService);
  }

  function getData() {
    console.log("getting data");
    onValue(ref(db, "/services"), (snapshot) => {
      let data = snapshot.val();
      data = Object.values(data).map((item) => item);
      setServices(data);
    });
  }

  useEffect(() => {
    getData();

    // putData();
  }, []);

  return (
    <>
      <h1>Firebase Integration</h1>

      <p>Length {services.length}</p>
      <div>
        {services.map((service) => {
          return (
            <div key={service.id}>
              <p>Service - {service.name}</p>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
