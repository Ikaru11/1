// Data anggota dari ID NFC
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

// Fungsi manual: cari berdasarkan input
function cariData() {
  const id = document.getElementById("input-id").value.trim();

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

// Tambahan: fungsi membaca NFC
async function mulaiScanNFC() {
  if ("NDEFReader" in window) {
    const ndef = new NDEFReader();
    try {
      await ndef.scan();
      console.log("✅ NFC scanning dimulai...");

      ndef.onreading = event => {
        const decoder = new TextDecoder();
        for (const record of event.message.records) {
          const isiTag = decoder.decode(record.data).trim();
          console.log("📥 NFC terbaca:", isiTag);

          // Isi otomatis ke kolom input (kalau ada input box)
          const inputElem = document.getElementById("input-id");
          if (inputElem) inputElem.value = isiTag;

          // Langsung cari datanya juga
          cariData();
        }
      };
    } catch (error) {
      console.error("❌ Gagal membaca NFC:", error);
    }
  } else {
    alert("Browser kamu tidak support Web NFC 😢");
  }
}

// Jalankan NFC saat halaman dibuka
mulaiScanNFC();

