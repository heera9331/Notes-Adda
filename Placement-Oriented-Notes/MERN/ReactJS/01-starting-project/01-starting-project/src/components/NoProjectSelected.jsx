import React from "react";
import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";

function NoProjectSelected({ onStartAndProject }) {
  return (
    <div className="my-24 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="An empty image task"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-500 mb-4">
        Select a project or get started with a new one
      </p>

      <p className="mt-8">
        <Button text={"Create new project "} onClick={onStartAndProject} />
      </p>
    </div>
  );
}

export default NoProjectSelected;
