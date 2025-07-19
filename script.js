const dataNFC = {
  "404314": {
    name: "Ikaru Marehenka",
    role: "Sniper",
    blood: "A",
    code: "Henkakaru",
    unit: "Barret M82A"
  },
  "596868": {
    name: "Nopnop",
    role: "Assault",
    blood: "BA",
    code: "Nophanter",
    unit: "M4 Cyma Jund Tac"
  },
  "239176": {
    name: "Boris Kirilovsky",
    role: "Rifleman/Breacher",
    blood: "O+",
    code: "Griller",
    unit: "M416"
  },
   "723398": {
    name: "Fadel",
    role: "Marksman",
    blood: "",
    code: "723398",
    unit: "M416"
  },
};

function getIDFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

function tampilkanData() {
  const id = getIDFromURL();
  document.getElementById("nfc-id").textContent = id || "-";

  if (id && dataNFC[id]) {
    const orang = dataNFC[id];
    document.getElementById("name").textContent = orang.name;
    document.getElementById("role").textContent = orang.role;
    document.getElementById("blood").textContent = orang.blood;
    document.getElementById("code").textContent = orang.code;
    document.getElementById("unit").textContent = orang.unit;
  } else {
    document.getElementById("name").textContent = "-";
    document.getElementById("role").textContent = "-";
    document.getElementById("blood").textContent = "-";
    document.getElementById("code").textContent = "-";
    document.getElementById("unit").textContent = "-";
  }
}
