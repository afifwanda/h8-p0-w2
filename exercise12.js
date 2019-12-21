function konversiMenit(menit){
    // konversi parameter kedalam bentuk menit pada variabel menit1
    var menit1 = Math.floor(menit/60);
    // apabila parameter masih menyisakan detik, masukan kedalam variabel detik1
    var detik1 = menit - Math.floor(menit1 * 60);
    // jika sisa detik kurang dari 10, tambahkan angka 0 di awal detik
    if(detik1 < 10){
        return menit1 + " : " + 0 + detik1;
    }
    // jika sisa detik lebih dari 10, tidak perlu ditambahkan 0 di awal detik
    else {
        return menit1 + " : " + detik1;
    }
}

console.log(konversiMenit(120))