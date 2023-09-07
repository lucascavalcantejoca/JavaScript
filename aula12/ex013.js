var agora = new Date()
var horas = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()


console.log(`Agora são exatamente ${horas}:${minutos}:${segundos}.`)
if (horas <= 12) {
    console.log('Bom dia!')
} else if (horas <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}