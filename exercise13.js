function xo(str){
    // simpan string "x" didalam variabel x
    var x = "";
    // simpan string "o" didalam variabel o
    var o = "";
    // lakukan iterasi pada parameter fungsi
    for(var i=0; i <= str.length; i++){
        // jika didalam indeks parameter terdapat "x", masukan kedalam variabel x
        if(str[i] === "x"){
            x += "x";
        }
        // jika didalam indeks parameter terdapat "o", masukan kedalam variabel o
        else if(str[i] === "o"){
            o += "o";
        }
    }
    // jika panjang string didalam variabel x sama dengan variabel o, hasilnya true
    if(x.length === o.length){
        return true;
    }
    // jika tidak, hasilnya false
    else{
        return false;
    }
}

console.log(xo("xooox"))