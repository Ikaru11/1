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
  const hasilDiv = document.getElementById("hasil");

  if (id && dataNFC[id]) {
    const orang = dataNFC[id];
    hasilDiv.innerHTML = `
      <p><strong>Nama:</strong> ${orang.nama}</p>
      <p><strong>Jabatan:</strong> ${orang.jabatan}</p>
      <p><strong>Angkatan:</strong> ${orang.angkatan}</p>
    `;
  } else {
    hasilDiv.innerHTML = "<p>Data tidak ditemukan untuk ID: " + (id ?? "kosong") + "</p>";
  }
}

tampilkanData();
