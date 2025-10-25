document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ JS berhasil terbaca!");

  const form = document.getElementById("messageForm");
  const outputName = document.getElementById("outputName");
  const outputDob = document.getElementById("outputDob");
  const outputGender = document.getElementById("outputGender");
  const outputMessage = document.getElementById("outputMessage");
  const currentTime = document.getElementById("currentTime");

  if (!form) {
    console.error("❌ Tidak menemukan form dengan id 'messageForm'");
    return;
  }

  // Update waktu real-time
  function updateTime() {
    const now = new Date();
    currentTime.textContent = now.toLocaleString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
  updateTime();
  setInterval(updateTime, 1000);

  // Event submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("🟢 Tombol Submit diklik!");

    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("message").value.trim();

    if (/\d/.test(name)) {
      alert("Nama tidak boleh mengandung angka!");
      return;
    }

    if (message.length < 10) {
      alert("Pesan harus minimal 10 huruf.");
      return;
    }

    // Masukkan hasil ke output box
    outputName.textContent = name;
    outputDob.textContent = dob;
    outputGender.textContent = gender ? gender.value : "-";
    outputMessage.textContent = message;

    form.reset();
  });
});
