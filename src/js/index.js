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

const otherUsers = [
  {
    firstName: "Marc",
    lastName: "Spector",
    addressLine: "4563 Hells Kitchen Dr",
    city: "New York",
    state: "NY",
    zipcode: "12345",
  },
];

function handleSubmit() {
  const userForm = document.getElementById("userForm");

  for (var i = 0; i < Object.entries(userForm).length; i++) {
    console.log("what is i", userForm[i].value);
  }
}
