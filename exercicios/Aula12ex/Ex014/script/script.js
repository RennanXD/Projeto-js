function Carregar(){
    var msg= document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora são ' + hora + ' horas'

    if(hora>= 0 && hora < 12 )
    {
        //BOM DIA
        img.src = "imagens/foto-manha.jpg";
        document.body.style.background = '#FAB175' //Muda a cor da tela dinamicamente
    }else if (hora >= 12 && hora < 18)
    {
        //Boa tarde 
        img.src ="imagens/foto-tarde.jpg"; 
        document.body.style.background = '#DCAA64'
    }else {
        // boa noite 
        img.src ="imagens/foto-noite.jpg";
        document.body.style.background = '#3759DB'
    }
}  