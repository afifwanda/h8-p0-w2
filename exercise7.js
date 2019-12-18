// Soal 1. Menyusun Barisan Bintang
// masukan kolom bintang yang akan dimunculkan
var rows1 = 5;
// lakukan perulangan/iterasi sesuai jumlah kolom
for(i=1; i<=rows1; i++){
  // munculkan karakter bintang
    console.log("*");
}

// Soal 2. Menyusun Barisan Bintang dengan Nested Looping
// masukan jumlah kolom yang diinginkan
var rows2 = 5;
// buat variabel baru tanpa isi
var newRow = ""
for(i = 1; i <= rows2; i++){
  // lakukan perulangan/iterasi sesuai jumlah kolom
    for(j = 1; j <= rows2; j++){
      // tambahkan bintang ke variabel baru
       newRow += "*";
    }
    // setelah perulangan selesai tambahkan garis baru
  newRow += "\n"
}
console.log(newRow)

// Soal 3. Menyusun Barisan Tangga Bintang dengan Nested Looping
// masukan jumlah kolom yang diinginkan
var rows3 = 5;
// buat variabel baru tanpa isi
var newRow = ""
for(i = 1; i <= rows3; i++){
  // lakukan perulangan/iterasi sesuai jumlah kolom
    for(j = 1; j <= i; j++){
      // tambahkan bintang ke variabel baru
       newRow += "*";
    }
    // setelah perulangan selesai tambahkan garis baru
  newRow += "\n"
}
console.log(newRow)