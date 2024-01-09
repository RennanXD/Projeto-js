var horaAgora = new Date()
var horario = horaAgora.getHours()

console.log('Agora são exatamente', +horario, 'horas')
if(horario < 12){
    console.log('Bom dia!')
}else if(horario<=18){
    console.log('Boa Tarde!')
}else if(horario<=21){
    console.log('Boa noite!')
} else{
    console.log('Boa madrugada!')
}