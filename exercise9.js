// Soal 1. Shout Out function
// buat function shouout
function shoutOut(){
    // munculkan halo function saat fungsi dipanggil
    return "Halo Function!";
}

console.log(shoutOut());

console.log("------------------------------------------")

// Soal 2. Calculate Multiply
// buat function multiply
function calculateMultiply(num1,num2){
    // lakukan perkalian antara num1 dan num2 saat fungsi dipanggil
    return num1 * num2
}

var num1 = 5;
var num2 = 6;
// buat variabel baru untuk memunculkan hasil fungsi
var hasilPerkalian = calculateMultiply(num1,num2);
// tampilkan variabel hasilPerkalian
console.log(hasilPerkalian);

console.log("------------------------------------------")

//Soal no 3. Membuat Function process sentence

function processSentence(name,age,address,hobby){
// lakukan proses menggabungkan data dari variabel yang telah ada
    return "Nama Saya " + name + ", Umur saya " + age + ", Alamat saya di " + address + ", dan saya punya hobi yaitu " + hobby + "!"
}
// masukan variabel
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "Gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);
