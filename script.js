const dataNFC = {
  "01": { name: "Raka Ramadhan", role: "Ketua", blood: "2023" },
  "02": { name: "Salsabila", role "Sekretaris", blood: "2023" },
  "03": { name: "Farhan", role: "Bendahara", blood: "2022" }
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
    document.getElementById("angkatan").textContent = orang.angkatan;
    // Optional: bisa tambahin angkatan kalau ada elemen-nya
  } else {
    document.getElementById("nama").textContent = "Tidak ditemukan";
    document.getElementById("jabatan").textContent = "-";
  }
}

tampilkanData();
