function MarioBros(){
     var altura=8
    if(altura>2 && altura<9){
   
        for(i=0; i<altura; i++){
            let contador= i;
            let espacio=altura-contador;
            let simbolo='#'

            console.log(' '.repeat(espacio)+simbolo.repeat(contador)+' '+simbolo.repeat(contador));
            
            
            
            


        }
    }
   
}

MarioBros()
