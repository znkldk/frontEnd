console.log("asdasd");

var c_x_1 = null;
var c_x_2 = null;
var c_x_3 = null;

var c_y_1 = null;
var c_y_2 = null;
var c_y_3 = null;

var td1;
var td2;
var td3;
function check(x, y, td) {
  td.style.backgroundColor = "green";

  if (c_x_1 === null) {
    c_x_1 = x;
    c_y_1 = y;
    td1 = td;

    console.log("1= " + c_x_1 + "," + c_y_1);
  } else if (c_x_2 === null) {
    c_x_2 = x;
    c_y_2 = y;
    td2 = td;

    if (Math.abs(c_x_1 - c_x_2) > 1 || Math.abs(c_y_1 - c_y_2) > 1) {
      td1.style.backgroundColor = "";
      td2.style.backgroundColor = "";
    }
    console.log("2= " + c_x_2 + "," + c_y_2);
  } else if (c_x_3 === null) {
    c_x_3 = x;
    c_y_3 = y;
    td3 = td;

    if (Math.abs(c_x_2 - c_x_3) > 1 || Math.abs(c_y_2 - c_y_3) > 1) {
      td1.style.backgroundColor = "";
      td2.style.backgroundColor = "";
      td3.style.backgroundColor = "";
    } else {
      if (
        c_x_1 - c_x_2 === c_x_2 - c_x_3 &&
        td1.innerText === "S" &&
        td2.innerText === "O" &&
        td3.innerText === "S"
      ) {
        td1.style.backgroundColor = "blue";
        td2.style.backgroundColor = "blue";
        td3.style.backgroundColor = "blue";
      } else {
        td1.style.backgroundColor = "";
        td2.style.backgroundColor = "";
        td3.style.backgroundColor = "";
      }
    }
    c_x_1 = null;
    c_x_2 = null;
    c_x_3 = null;

    c_y_1 = null;
    c_y_2 = null;
    c_y_3 = null;
  }

  console.log("check " + x + "," + y);
}

function processer(x, y) {
  var buttonS = document.createElement("button");
  var buttonO = document.createElement("button");
  buttonS.innerText = "S";
  buttonO.innerText = "O";
  td_elemnt = document.getElementById(x + "," + y);
  if (td_elemnt.innerText === "S" || td_elemnt.innerText === "O") {
    if (td_elemnt.getAttribute("letter") == "false") {
      console.log("attirubuto");
      td_elemnt.setAttribute("letter", true);
    } else {
      check(x, y, td_elemnt);
    }
    return;
  }
  td_elemnt.innerText = "";
  td_elemnt.appendChild(buttonO);
  td_elemnt.appendChild(buttonS);
  buttonS.addEventListener("click", (e) => {
    td_elemnt.innerText = "S";
  });
  buttonO.addEventListener("click", (e) => {
    td_elemnt.innerText = "O";
  });
}

const matrisLeng = 10;
var tbody = document.createElement("tbody");
for (var i = 1; i <= matrisLeng; i++) {
  var tr = document.createElement("tr");

  for (var k = 1; k <= matrisLeng; k++) {
    const td = document.createElement("td");
    td.innerText = i + "," + k;
    const c_i = i;
    const c_k = k;

    td.addEventListener("click", (e) => {
      processer(c_i, c_k);

      console.log("td tıklandı");
    });
    td.setAttribute("id", i + "," + k);
    td.setAttribute("letter", false);

    tr.appendChild(td);
  }

  tbody.appendChild(tr);
}

var table = document.querySelector("table");

table.appendChild(tbody);
document.querySelector("table");
