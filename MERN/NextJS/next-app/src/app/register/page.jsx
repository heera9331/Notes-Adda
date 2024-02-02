"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function Home() {
  const [user, setUser] = useState({ username: "", password: "" });
  const router = useState();

  const handleRegister = async () => {
    try {
      console.log(user);
      let res = await axios.post("/api/user/register", user);
      console.log(res);
      if (res.data?.error) {
        alert(res.data.error);
      } else {
        router.push("/home");
      }
    } catch (error) {
      alert("something went wrong");
      console.log("dikkat hai", error);
    }
  };

  return (
    <div className="">
      <form
        action="#"
        method="post"
        className="w-[400px] bg-stone-800 my-20 py-10 px-5 text-white  m-auto"
      >
        <h1 className="text-2xl font-semibold text-center">Register</h1>
        <div className="flex flex-col m-1 py-2 rounded-sm py-4">
          <label htmlFor="username">Username</label>
          <input
            className="bg-gray-200 text-black outline-none rounded-sm p-1"
            type="text"
            name="username"
            value={user.user}
            placeholder="Enter"
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col m-1 rounded-sm">
          <label htmlFor="password">Password</label>
          <input
            className="bg-gray-200 text-black outline-none rounded-sm p-1"
            type="password"
            name="password"
            placeholder="Enter"
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </div>

        <div className="flex flex-col m-1 rounded-sm my-4">
          <button
            type="submit"
            name="submit"
            className="bg-slate-800 text-white rounded-sm py-1"
            onClick={(e) => {
              e.preventDefault();
              handleRegister();
            }}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
