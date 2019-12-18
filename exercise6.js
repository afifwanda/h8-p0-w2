// Soal no 1
console.log("LOOPING PERTAMA");
i = 2;
while(i<=20){
console.log (i + " - I love coding");
i+= 2;
}
console.log("LOOPING KEDUA");
i = 20;
while (i>=2){
console.log(i + " - I will become full stack developer");
i-= 2;
}

console.log("----------------------------------------------------------------------------------")

// Soal No 2
console.log("LOOPING PERTAMA");
for(i = 1; i <=20; i++){
    console.log(i + " - I love coding");
}
console.log("LOOPING KEDUA");
for(i = 20; i >=1; i--){
    console.log(i + " - I will become full stack developer");
}

console.log("----------------------------------------------------------------------------------")
// Soal No 3

console.log("SOAL GANJIL GENAP")
for(i = 1; i <= 100; i++){
    if(i%2 === 0){
        console.log("GENAP");
    }
    else{
        console.log("GANJIL");
    }
}

console.log("SOAL KELIPATAN 3")
for(i = 1; i <= 100; i+=2){
    if(i%3 === 0){
        console.log(i + " KELIPATAN 3");
    }
}

console.log("SOAL KELIPATAN 6")
for(i = 1; i <= 100; i+=5){
    if(i % 6 === 0){
        console.log(i + " KELIPATAN 6");
    }
}

console.log("SOAL KELIPATAN 10")
for(i = 1; i <= 100; i+=9){
    if(i % 10 === 0){
        console.log(i + " KELIPATAN 10");
    }
}