// selecting form and todos element
let todoForm = document.querySelector("form");
let todosUL = document.getElementById("todos");

// adding event lister on the form
todoForm.addEventListener("submit", (e) => {
  // prevent page refresh
  e.preventDefault();

  // getting values
  let titleValue = document.getElementsByName("title")[0].value;
  let descValue = document.getElementsByName("desc")[0].value;

  // creating new li element
  let newListItem = document.createElement("li");

  newListItem.setAttribute("class", "flex justify-between");
  newListItem.innerText = titleValue + " - " + descValue;

  // creating button element
  let clearBtn = document.createElement("button");
  clearBtn.type = "button";
  clearBtn.innerText = "done";

  // add style
  clearBtn.setAttribute(
    "class",
    "bg-stone-800 text-white border px-1 rounded-sm"
  );
  clearBtn.addEventListener("click", (e) => {
    console.log(e.target.parentElement.remove());
    // document.getElementById('elementId').parentElement.remove()
  });

  newListItem.appendChild(clearBtn);

  // add task
  todosUL.appendChild(newListItem);

  // clearing values
  document.getElementsByName("title")[0].value = "";
  document.getElementsByName("desc")[0].value = "";
});
