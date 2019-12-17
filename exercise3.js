//Input nama dan peran
var nama = "Afif";
var peran = "";

//jika nama tidak sama dengan kosong dan value peran sama dengan kosong
if(nama !== "" && peran === ""){
console.log(`Halo ${nama}, pilih peranmu untuk memulai game!`);
}
//jika nama tidak sama dengan kosong dan value peran sama dengan ksatria
else if(nama !== "" & peran === "Ksatria"){
console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
}
//jika nama tidak sama dengan kosong dan value peran sama dengan tabib
else if(nama !== "" & peran === "Tabib"){
console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`)
}
//jika nama tidak sama dengan kosong dan value peran sama dengan penyihir
else if(nama !== "" & peran === "Penyihir"){
console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
}
//jika nama sama dengan kosong dan peran sama dengan kosong
else{
console.log("Nama harus diisi!");
}