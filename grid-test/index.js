const tb = document.querySelector("table");

for (let y = 0; y < 10; ++y) {
  let tr = document.createElement("tr");
  for (let x = 0; x < 10; ++x) {
    let td = document.createElement("td");
    td.addEventListener("click", handle);
    tr.appendChild(td);
  }
  tb.appendChild(tr);
}

function handle(event) {
  console.log("here");
}
