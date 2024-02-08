const obj = {
  202401138449: {
    category: "Repairing",
    contact: "8085589371",
    description:
      "My small and beautiful shop provide mobile repairing services, please visit us and give the change to provide service, My small and beautiful shop provide mobile repairing services, please visit us and give the change to provide service this is new way",
    id: "202401138449",
    location: "Sagar",
    name: "Mobile Repairing",
    provider: "Heera Singh",
  },
  2024041527158: {
    category: "Transport",
    contact: "239045023",
    description: "lorem apsum",
    id: "2024041527158",
    location: "Sagar",
    name: "Loading service",
    provider: "Rahul",
  },
  2024041654684: {
    category: "Transport",
    contact: "239045023",
    description: "lorem apsum",
    id: "2024041654684",
    location: "Sagar",
    name: "Loading service",
    provider: "Rahul",
  },
  2024041654695: {
    category: "Transport",
    contact: "239045023",
    description: "lorem apsum",
    id: "2024041654695",
    location: "Sagar",
    name: "Loading service",
    provider: "Rahul",
  },
};

const ids = Object.values(obj).map((item) => item);

console.log(ids);
