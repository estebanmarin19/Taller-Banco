$(document).ready(function(){
    

    $('.btnelicon1').on('click',function(){
    
        let btn= $('.btnelicon1').index(this);
        let doc=$('.cod').eq(btn);
        let mont=$('.sal').eq(btn);

    
        let docc=doc.val();
        let monto=mont.val();


        let a,b;

        a=parseInt(prompt("Cantidad a transferir"));
        nc=parseInt(prompt("Digite el codigo de la cuenta"));

        if(a>monto){
            alert("Saldo insuficiente")

        }
        else{
            b=prompt("Desea Continuar");
            if(b=="Si" || b=="si" ||b== "SI"){
                total=monto-a;
                alert("Transferencia exitosa")

                $.ajax({
    
                    type:"POST",
                    url:'/transferir',
                    data:{
                        tcudc:docc,tc:total,tr:a,noc:nc
                    }
                });

            }
            else{
                alert("Transferencia Cancelada")
            }
            
            
        }


       

    
        
    
    

    
    
    
    
    });
    
    
    });