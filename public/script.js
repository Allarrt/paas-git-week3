document.querySelector("#cek").addEventListener("click", () => {
  const hasil = document.querySelector("#hasil");
  const now = new Date().toLocaleTimeString("id-ID");
  hasil.textContent = `JavaScript berhasil berjalan di browser. (Waktu uji: ${now} WIB)`;
  hasil.classList.add("active");
});