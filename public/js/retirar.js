$(document).ready(function(){
    

    $('.btnelicon').on('click',function(){
    
        let btn= $('.btnelicon').index(this);
        let doc=$('.cod').eq(btn);
        let mont=$('.sal').eq(btn);

    
        let docc=doc.val();
        let monto=mont.val();


        let a,b;

        a=parseInt(prompt("Cantidad a retirar"));

        if(a>monto){
            alert("Saldo Insuficiente")

        }
        else{
            b=prompt("Desea Continuar");
            if(b=="Si" || b=="si" ||b== "SI"){
                total=monto-a;
                alert("Retiro exitoso")

                $.ajax({
    
                    type:"POST",
                    url:'/retirar',
                    data:{
                        cudc:docc,t:total
                    }
                });

            }
            else{
                alert("Retiro Cancelado")
            }
            
            
        }


       

    
        
    
    

    
    
    
    
    });
    
    
    });