import { useEffect, useState } from "react";

export default function RegistrationForm() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  // error name with
  const [error, setError] = useState({ name: "", email: "", password: "" });

  const handleSubmit = () => {
    console.log("user", user);
    console.log("user", error);
    if (user.name.length == 0) {
      setError({ ...error, name: "name" });
    }
    if (user.email.length == 0) {
      setError({ ...error, email: "email" });
    }
    if (user.password.length == 0) {
      setError({ ...error, password: "password" });
    }
  };

  useEffect(() => {}, []);

  return (
    <form
      action="#"
      method="post"
      className="max-w-[400px] border p-4 m-auto mt-10"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="flex flex-col py-1 px-2 gap-1">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Enter name"
          className="border-2 border-gray-200 py-1 px-2"
          onChange={(e) => {
            let value = e.target.value;
            if (value.length === 0) {
              setError({ ...error, name: "name" });
            } else {
              setError({ ...error, name: "" });
            }
            setUser({ ...user, name: e.target.value });
          }}
        />
        {error.name === "name" && (
          <span className="text-red-600 text-[12px]">Required field</span>
        )}
      </div>
      <div className="flex flex-col py-1 px-2 gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Enter email"
          className="border-2 border-gray-200 py-1 px-2"
          onChange={(e) => {
            let value = e.target.value;
            if (value.length === 0) {
              setError({ ...error, email: "email" });
            } else {
              setError({ ...error, email: "" });
            }
            setUser({ ...user, email: e.target.value });
          }}
        />
        {error.email === "email" && (
          <span className="text-red-600 text-[12px]">Required field</span>
        )}
      </div>
      <div className="flex flex-col py-1 px-2 gap-1">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter password"
          className="border-2 border-gray-200 py-1 px-2"
          onChange={(e) => {
            let value = e.target.value;
            if (value.length === 0) {
              setError({ ...error, password: "password" });
            } else {
              setError({ ...error, password: "" });
            }
            setUser({ ...user, password: e.target.value });
          }}
        />
        {error.password === "password" && (
          <span className="text-red-600 text-[12px]">Required field</span>
        )}
      </div>
      <div className="bg-gray-800 text-white py-2 px-1 rounded-sm py-1 px-2 m-2">
        <button className="w-full">Register</button>
      </div>
    </form>
  );
}
