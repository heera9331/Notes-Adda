import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

// fetching data using fetch funciton

function fetchData(apiUri) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ isError: false, msg: null });
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    try {
      (async () => {
        let response = await fetch(apiUri);
        setData(await response.json());
        setLoading(false);
      })();
    } catch (error) {
      setError({ isError: true, msg: "Network error" });
    }
  }, []);

  return { loading, error, data };
}

function App() {
  return (
    <>
      {/* <FetchData /> */}
      <AxiosDataFetch />
    </>
  );
}

function AxiosDataFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get("https://jsonplaceholder.org/users", {});
        setData(response.data);
      } catch (error) {}
    })();
  }, []);
  return (
    <div>
      <h1>Axios</h1>
      <p>data {data.length}</p>
      {!loading ? (
        <div>
          {data.length !== 0 &&
            data.map((user, idx) => {
              return (
                <div key={idx}>
                  {user.firstname} {user.lastname}
                </div>
              );
            })}
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

function FetchData() {
  const { loading, error, data } = fetchData(
    "https://jsonplaceholder.org/users"
  );
  return (
    <>
      <h1>Fetch</h1>
      <p>data {data.length}</p>
      {!loading ? (
        <div>
          {data.length !== 0 &&
            data.map((user, idx) => {
              return (
                <div key={idx}>
                  {user.firstname} {user.lastname}
                </div>
              );
            })}
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default App;
