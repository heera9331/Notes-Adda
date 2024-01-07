import React from "react";
import Input from "./Input";
import Button from "./Button";
function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-900">
            Cancel
          </button>
        </li>
        <li>
          <Button text="Save" />
        </li>
      </menu>
      <div>
        <Input label={"Title"} />
        <Input label={"Description"} textarea />
        <Input label={"Due Date"} type="date" />
      </div>
    </div>
  );
}

export default NewProject;
