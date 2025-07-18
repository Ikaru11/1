const dataNFC = {
  "01": { name: "Ikaru marehenka", role: "Sniper", blood: "A", code: "Henkakaru", unit: "Barret M82A" },
  "02": { name: "Nopnop", role "Assault", blood: "BA", code: "Nophanter", unit: "M4 Cyma Jund Tac" },
  "03": { name: "Boris Kirilovsky", role: "Rifleman/Breacher", blood: "O+", code: "Griller", unit: "M4" }
};

function getID() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

function tampilkanData() {
  const id = getID();
  document.getElementById("nfc-id").textContent = id || "Tidak Ada";

  if (id && dataNFC[id]) {
    const orang = dataNFC[id];
    document.getElementById("name").textContent = orang.name;
    document.getElementById("role").textContent = orang.role;
    document.getElementById("blood").textContent = orang.blood;
    document.getElementById("code").textContent = orang.code;
    document.getElementById("unit").textContent = orang.unit;
    // Optional: bisa tambahin angkatan kalau ada elemen-nya
  } else {
    document.getElementById("nama").textContent = "Tidak ditemukan";
    document.getElementById("jabatan").textContent = "-";
  }
}

tampilkanData();
