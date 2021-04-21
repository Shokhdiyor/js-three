// const a = 1,
// b = 3,
// c = 2,

// var z = +prompt("Delfin yordam bersinmi? 1/0")
// if(z == 1){
//         a == c 
// } else {
//         a == 1
// }
// x = +prompt('Qirg\'oqgacha masofa')
// y = +prompt('Akuladan odamgacha masofa') + x
// if(x / a < y / b || x / c < y / b) {
//         alert ('Alive')
// } else {
//         alert('Shark ham-ham')
// }


var son = +prompt('Sonni kiriting')

while (son != son || son <= 0) {
    var son = +prompt('Son xato kiritildi. Boshqattan son kiriting')
}
 var daraja =  +prompt('Darajani kiriting')
 while (daraja != daraja || daraja <= 0) {
    var daraja = +prompt('Daraja xato kiritildi. Boshqattan son kiriting')
}
alert (son**daraja)
        
