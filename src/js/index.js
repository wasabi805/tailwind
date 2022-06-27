console.log("i work");

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function buildUsersList(users) {
  const displayedUsers = document.getElementById("displayUsers");
  console.log(displayedUsers.childNodes.length - 1, "displayedUsers");
  let text;
  const listWrapper = document.createElement("div");
  listWrapper.style.cssText =
    "margin: 2rem; min-width: 12rem; max-width: 12rem;";

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete";
  deleteButton.id = `user_${displayedUsers.childNodes.length - 1}`;
  deleteButton.onclick = (e) => {
    console.log(e.target.id);
  };

  deleteButton.className =
    "px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2";

  const list = document.createElement("o");
  list.style.cssText = "list-style: none; ";

  /* Turn Object into ordered list */
  Object.entries(users).forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "text-slate-500";
    text = document.createTextNode(`${item[0]} : ${item[1]}`);

    listItem.append(text);

    list.appendChild(listItem);
  });
  console.log(list);
  listWrapper.appendChild(list);
  listWrapper.append(deleteButton);
  document.getElementById("displayUsers").appendChild(listWrapper);
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
