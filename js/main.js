function love() {
  let name1 = document.getElementById("NameOne").value;
  let name2 = document.getElementById("NameTwo").value;
  if (name1.length <= 2) {
    alert("Enter at last 3 character");
  }
  if (name2.length <= 2) {
    alert("Enter at last 3 character");
  } else {
    let random = Math.floor(Math.random() * 100);
    document.getElementById("print").innerHTML =
      // name1 + "and" + name2 + "=" + random + "%" + "of love";
      `${name1} and ${name2} = ${random}% of love`;
    if (random <= 10 || random <= 50) {
      document.getElementById("statement").innerHTML = "Good Relationship";
    } else if (random <= 51 || random <= 100) {
      document.getElementById("statement").innerHTML = "Lovely Relationship";
    }
  }
}
