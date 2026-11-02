function calcolaDiv(){
    const div=[];
    let num;
    let conta = 0;
    let p = document.getElementById("contaDiv");
    let spin;
    num = document.getElementById("numero").value;
    num = parseInt(num);

    for (let i = 0; i <= num/2; i++){
        if (num % i == 0){
            conta++;
            div.push (i);
        }
    }
    div.push (num);
    conta++;

    spin = document.getElementById("spin");
    spin.style.display="none";

    if (conta == 2){
        p.classList.add("primo");
        p.innerHTML= "i divisori sono " + conta + "<br>" + "numero primo";
        
    }
    else{
        p.classList.remove("primo");
        p = document.getElementById("contaDiv").innerHTML="i divisori sono " + conta + "<br>" + div.join(" - ");
    }

    


}