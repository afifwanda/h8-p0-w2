function balikKata(kata){
    // simpan kata baru dalam variabel baru
    var kataBaru = "";
    // lakukan perulangan untuk mengambil karakter terakhir dari sebuah string
    for (var i=kata.length-1; i >= 0; i--){
    // tambahkan karakter terakhir pada variabel kataBaru
    kataBaru += kata[i];
    }
    // munculkan kataBaru
    return kataBaru;
}

console.log(balikKata("John Doe"));