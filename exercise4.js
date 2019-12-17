// masukan variabel hari, bulan, tahun
var hari = 1    ;
var bulan = 20   ;
var tahun = 1945;
// lakukan switch pada bulan
switch(bulan){
// jika variabel bulan = 1, ganti menjadi januari
case 1:
console.log(`${hari} Januari ${tahun}`);
break;
// jika variabel bulan = 2, ganti menjadi februari
case 2:
console.log(`${hari} Februari ${tahun}`);
break;
// jika variabel bulan = 3, ganti menjadi maret
case 3:
console.log(`${hari} Maret ${tahun}`);
break;
// jika variabel bulan = 4, ganti menjadi april
case 4:
console.log(`${hari} April ${tahun}`);
break;
// jika variabel bulan = 5, ganti menjadi mei
case 5:
console.log(`${hari} Mei ${tahun}`);
break;
// jika variabel bulan = 6, ganti menjadi juni
case 6:
console.log(`${hari} Juni ${tahun}`);
break;
// jika variabel bulan = 7, ganti menjadi juli
case 7:
console.log(`${hari} Juli ${tahun}`);
break;
// jika variabel bulan = 8, ganti menjadi agustus
case 8:
console.log(`${hari} Agustus ${tahun}`);
break;
// jika variabel bulan = 9, ganti menjadi september
case 9:
console.log(`${hari} September ${tahun}`);
break;
// jika variabel bulan = 10, ganti menjadi oktober
case 10:
console.log(`${hari} Oktober ${tahun}`);
break;
// jika variabel bulan = 11, ganti menjadi november
case 11:
console.log(`${hari} November ${tahun}`);
break;
// jika variabel bulan = 12, ganti menjadi desember
case 12:
console.log(`${hari} Desember ${tahun}`);
break;
// jika variabel bulan bukan 1-12, munculkan "masukan bulan"
default:
console.log(`masukan bulan`);
break;
}