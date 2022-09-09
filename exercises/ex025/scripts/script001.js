function seunomecompleto() {
    var txtnome = document.getElementById('inome')
    var txtsobrenome = document.getElementById('isobrenome')
    var result = document.getElementById('result')
    var time = new Date()
    var hour = time.getHours()
    var min = time.getMinutes()
    var item = document.createElement('p')
    item.style.lineHeight = '1.2em'

    if (txtnome.value.length == 0 || txtsobrenome.value.length == 0) {
        result.innerHTML = ""
        window.alert('Preencha todos os campos para continuar, por favor!')
        item.innerHTML = 'Por favor, preencha todos os campos acima corretamente para continuar!'
    } else {
        var nome = String(txtnome.value)
        var sobrenome = String(txtsobrenome.value)
        result.innerHTML = ""
        
        if (hour < 12) {
            item.innerHTML = `Bom dia, como vai?<br>`
        } else if(hour < 18) {
            item.innerHTML = `Boa tarde, como vai?<br>`
        } else {
            item.innerHTML = `Boa noite, como vai?<br>`
        }
        
        item.innerHTML += `Seu nome completo é ${nome} ${sobrenome}.`
    }
    result.appendChild(item)
}