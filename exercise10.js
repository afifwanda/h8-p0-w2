// masukan angka 1 dan angka 2
function bandingAngka(angka1, angka2){
    //jika angka1 lebih kecil dari angka2, munculkan true
    if (angka1 < angka2){
        return true;
    }
    // jika angka1 lebih besar dari angka2 munculkan false
    else if (angka1 > angka2) {
        return false;
    }
    // jika angkanya sama, maka return -1
    else{
        return -1}
}

console.log(bandingAngka(8,2));
