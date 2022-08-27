const tbody = document.querySelector("#dataBody");
const data = JSON.parse(localStorage.getItem("users"));

data?.map((user) => {
  const row = document.createElement("tr");
  const fname = document.createElement("td");
  fname.innerHTML = user.firstName;
  const lname = document.createElement("td");
  lname.innerHTML = user.lName;
  const phone = document.createElement("td");
  phone.innerHTML = user.contact;
  const email = document.createElement("td");
  email.innerHTML = user.email;
  const dob = document.createElement("td");
  dob.innerHTML = user.dob;
  const createdAt = document.createElement("td");
  createdAt.innerHTML = user.createdAt;
  const timeOfCreation = document.createElement("td");
  timeOfCreation.innerHTML = user.timeOfCreation;
  const deleteBtn = document.createElement("td");
  deleteBtn.classList.add("count");
  deleteBtn.style.cursor = "pointer";
  deleteBtn.innerHTML = `<i class="fa-regular fa-2x text-danger fa-trash-can"></i>`;

  row.appendChild(fname);
  row.appendChild(lname);
  row.appendChild(email);
  row.appendChild(dob);
  row.appendChild(phone);
  row.appendChild(createdAt);
  row.appendChild(timeOfCreation);
  row.appendChild(deleteBtn);

  tbody.appendChild(row);
});
setTimeout(() => {
  let count = document.getElementsByClassName("count");
  Array.from(count).forEach((ele, index) => {
    ele.addEventListener("click", () => {
      data.splice(index, 1);
      localStorage.setItem("users", JSON.stringify(data));
      window.location.href = "table.html";
      console.log(data);
    });
  });
}, 100);

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  window.location.href = "index.html";
});

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "table.html";
});
