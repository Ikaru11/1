const dataNFC = {
  "01": {
    name: "Ikaru Marehenka",
    role: "Sniper",
    blood: "A",
    code: "Henkakaru",
    unit: "Barret M82A"
  },
  "02": {
    name: "Nopnop",
    role: "Assault",
    blood: "BA",
    code: "Nophanter",
    unit: "M4 Cyma Jund Tac"
  },
  "03": {
    name: "Boris Kirilovsky",
    role: "Rifleman/Breacher",
    blood: "O+",
    code: "Griller",
    unit: "M4"
  }
};

function getIDFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

function tampilkanData() {
  const id = getIDFromURL();
  document.getElementById("nfc-id").textContent = id || "Tidak Ada";

  if (id && dataNFC[id]) {
    const orang = dataNFC[id];
    document.getElementById("name").textContent = orang.name;
    document.getElementById("role").textContent = orang.role;
    document.getElementById("blood").textContent = orang.blood;
    document.getElementById("code").textContent = orang.code;
    document.getElementById("unit").textContent = orang.unit;
  } else {
    document.getElementById("name").textContent = "Tidak ditemukan";
    document.getElementById("role").textContent = "-";
    document.getElementById("blood").textContent = "-";
    document.getElementById("code").textContent = "-";
    document.getElementById("unit").textContent = "-";
  }
}

