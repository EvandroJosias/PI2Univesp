

function mask_Phone( parPhone ){
    const textoAtual = parPhone.value;
    const isCelular = textoAtual.length === 9;
    let textoAjustado;
    if(isCelular) {
         // faz alguma coisa 
    } else {
         // faz alguma coisa
    }
    parPhone.value = textoAjustado;
}

function cut_Hifen( parText ) {
    const textoAtual = parText.value;
    const textoAjustado = textoAtual.replace(/\-/g, '');

    parText.value = textoAjustado;
}