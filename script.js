// Ambil ID dari URL
const urlParams = new URLSearchParams(window.location.search);
const nfcID = urlParams.get("id");

document.getElementById("nfc-id").textContent = nfcID || "No ID";

// --- Simulasi fetch data dari Google Spreadsheet (dummy)
const dummyData = {
  "123456": { nama: "Ikram", jabatan: "Komandan" },
  "654321": { nama: "Otogi", jabatan: "Intel" },
};

if (nfcID && dummyData[nfcID]) {
  document.getElementById("nama").textContent = dummyData[nfcID].nama;
  document.getElementById("jabatan").textContent = dummyData[nfcID].jabatan;
} else {
  document.getElementById("nama").textContent = "Tidak ditemukan";
  document.getElementById("jabatan").textContent = "—";
}
