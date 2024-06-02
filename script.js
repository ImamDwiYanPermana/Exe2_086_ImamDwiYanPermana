// Custom JavaScript
function kirimData() {
  var name = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var telepon = document.getElementById("telepon").value;
  var tanggal = document.getElementById("tanggal").value;
  var jumlahOrang = document.getElementById("jumlah-orang").value;
  var pesan = document.getElementById("pesan").value;

  alert(
    "Nama: " +
      name +
      "\nEmail: " +
      email +
      "\nNomor Telepon: " +
      telepon +
      "\nTanggal Reservasi: " +
      tanggal +
      "\nJumlah Orang: " +
      jumlahOrang +
      "\nPesan: " +
      pesan
  );
}

var tanggalInput = document.getElementById("tanggal");
flatpickr(tanggalInput, {
  enableTime: false,
  dateFormat: "d-m-Y",
});
