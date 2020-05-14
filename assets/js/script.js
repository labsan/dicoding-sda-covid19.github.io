document.getElementById("btn-update").addEventListener("click", updateData);

function updateData() {

    var positif = prompt("Jumlah kasus pasien Positif Covid-19 hari ini?");
    var sembuh = prompt("Jumlah pasien Sembuh terhadap Covid-19 hari ini?");
    var meninggal = prompt("Jumlah pasien Meninggal akibat Covid-19 hari ini?");
    var pdp = prompt("Jumlah Pasien Dalam Pengawasan (PDP) hari ini?");
    var odp = prompt("Jumlah Orang Dalam Pemantauan (ODP) hari ini?");

    var konfirmasi = confirm("Apakah anda yakin ingin memperbarui data Kasus Covid-19 hari ini?");

    if (konfirmasi) {
        alert("Data jumlah Kasus Covid-19 Berhasil diperbarui, Selamat!");

        document.getElementById("positif").innerHTML = positif;
        document.getElementById("sembuh").innerHTML = sembuh;
        document.getElementById("meninggal").innerHTML = meninggal;
        document.getElementById("pdp").innerHTML = pdp;
        document.getElementById("odp").innerHTML = odp;

    } else {
        alert("Data jumlah Kasus Covid-19 Gagal diperbarui, Maaf!");
    }

}
