function Cajero(){

    let montoentrada=221;

    for(i=0;i<1;i++){
        cincuenta=montoentrada / 50;
        cincuenta1=montoentrada % 50;

        veinte=cincuenta1 / 20;
        veinte1=montoentrada % 20;

        diez=veinte1 / 10;
        diez1=montoentrada % 10;

        cinco=diez1 / 5;
        cinco1=montoentrada % 5;

        uno=cinco1 / 1;

        console.log('Monto a retirar:'+montoentrada);

        console.log('Cantidad de billetes de 50:', Math.trunc(cincuenta));
        console.log('Cantidad de billetes de 20:', Math.trunc(veinte));
        console.log('Cantidad de billetes de 10:', Math.trunc(diez));
        console.log('Cantidad de billetes de 5:',Math.trunc(cinco));
        console.log('Cantidad de billetes de 1:', Math.trunc(uno));



        
    }
}

Cajero()