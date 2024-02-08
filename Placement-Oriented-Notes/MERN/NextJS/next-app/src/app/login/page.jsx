"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState({ username: "", password: "" });
  const router = useRouter();
  const handleLogin = async () => {
    try {
      console.log(user);
      let res = await axios.post("/api/user/login", user);
      console.log(res);
      res = res.data;
      if (res?.error) {
        alert(res.error);
      } else {
        console.log("got to home");
        router.push("/home");
      }
    } catch (error) {
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
        <h1 className="text-2xl font-semibold text-center">Login</h1>
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
              handleLogin();
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
