function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.getElementById('resultado')

    if(fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e Tente novamente')
    } else{

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'Criança_homem.jpg') // Consertar o problema de aparecer as imagens
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'Rapaz.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'homem adulto.jpg')
            }else {
                //idoso
                img.setAttribute('src' ,'Senhor.jpg')
            }


        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src' , '../img/Criança mulher.jpg')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', '../img/Moça.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', '../img/Mulher Adulta.jpg')
            }else {
                //idoso
                img.setAttribute('src', '../img/Senhora.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos'
        resultado.appendChild(img)
    }
}