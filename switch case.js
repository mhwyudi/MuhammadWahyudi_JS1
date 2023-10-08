var hari = "Senin";
var aktifitas = "";

switch (hari) {
  case "Senin":
    aktifitas = "Meeting pagi";
    break;
  case "Selasa":
    aktifitas = "Kelas online";
    break;
  case "Rabu":
    aktifitas = "Proyek tim";
    break;
  default:
    aktifitas = "Libur";
}

console.log("Hari ini:", hari);
console.log("Aktifitas:", aktifitas);
