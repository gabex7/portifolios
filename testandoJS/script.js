function conferir(){
    let v1 = document.getElementById("saldo").value;
    let v2 = document.getElementById("divida").value;

    let saldo = Number(v1);
    let divida = Number(v2);


    let devedor = saldo - divida 
    
        if(saldo > divida) {
            document.getElementById("resultado").innerText = "voce nao esta devendo "
    }  if (saldo < divida) {
        document.getElementById("resultado").innerText = `voce esta devendo ${Math.abs(devedor)} ` ;
    } if( saldo == divida) {
         document.getElementById("resultado").innerText = "voce esta quitado" 
    }


}