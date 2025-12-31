function conferir(){
     var num1 = document.getElementById("c1").value;
     var num2 = document.getElementById("c2").value;
     var num3 = document.getElementById("hipotenusa").value;

     var cateto1 = Number(num1);
     var cateto2 = Number(num2);
     var hipotenusa = Number(num3);
// 
    var hipotenusaComCateto = ((cateto1 ** 2) + (cateto2 ** 2)) ;

    var hipDividida = Math.sqrt(hipotenusaComCateto) ;

    var catetoConhecido = cateto1 || cateto2;
    var catetoDesconhecido = ((hipotenusa ** 2) - (catetoConhecido** 2));
    
// 
    if(cateto1 && cateto2 && !hipotenusa) {
        document.getElementById("mostrar").innerText = `sua hipotenusa é ${hipDividida}`
    } if (hipotenusa && (cateto1 || cateto2)) {

        if(hipotenusa <= catetoConhecido){
            document.getElementById("mostrar").innerText = "A hipotenusa deve ser maior que o cateto "

         } else { document.getElementById("mostrar").innerText = `Seu cateto é ${catetoDesconhecido}`
        }
    }
}