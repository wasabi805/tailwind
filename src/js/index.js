console.log("i work");

const users = [
  {
    firstName: "Matt",
    lastName: "Murdock",
    addressLine: "1234 Hells Kitchen Dr",
    city: "New York",
    state: "NY",
    zipcode: "12345",
  },
];
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function buildUsersList(users) {
  const displayUsers = document.getElementById("displayUsers");
  let text;
  const list = document.createElement("o");
  list.style.cssText = "list-style: none; margin: 2rem";

  Object.entries(users).forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "text-slate-500";
    text = document.createTextNode(`${item[0]} : ${item[1]}`);

    listItem.append(text);

    list.appendChild(listItem);
  });
  console.log(list);
  document.getElementById("displayUsers").appendChild(list);
}

function handleSubmit() {
  const userForm = document.getElementById("userForm");
  const newUser = {};

  for (var i = 0; i < Object.entries(userForm).length; i++) {
    const key = userForm[i].name;
    const val = userForm[i].value;
    newUser[key] = val;
  }

  buildUsersList(newUser);
}
