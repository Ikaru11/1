const dataNFC = {
  "01": { nama: "Raka Ramadhan", jabatan: "Ketua", angkatan: "2023" },
  "02": { nama: "Salsabila", jabatan: "Sekretaris", angkatan: "2023" },
  "03": { nama: "Farhan", jabatan: "Bendahara", angkatan: "2022" },
  // tambah sesuai kebutuhan
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
    document.getElementById("nama").textContent = orang.nama;
    document.getElementById("jabatan").textContent = orang.jabatan;
  } else {
    document.getElementById("nama").textContent = "Tidak ditemukan";
    document.getElementById("jabatan").textContent = "-";
  }
}

