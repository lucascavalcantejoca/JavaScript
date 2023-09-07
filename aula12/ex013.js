var hr = new Date()
var min = new Date()
var sec = new Date()
var horas = hr.getHours()
var minutos = min.getMinutes()
var segundos = sec.getSeconds()


console.log(`Agora são exatamente ${horas}:${minutos}:${segundos}.`)
if (horas <= 12) {
    console.log('Bom dia!')
} else if (horas <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}