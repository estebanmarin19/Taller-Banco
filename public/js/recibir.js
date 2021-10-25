$(document).ready(function(){
    

    $('.btnactcon2').on('click',function(){
    
        let btn= $('.btnactcon2').index(this);
        let doc=$('.cod').eq(btn);
        let mont=$('.sal').eq(btn);
        let tra=$('.tra').eq(btn);

    
        let docc=doc.val();
        let monto=mont.val();
        let tran=tra.val();


        let a=0,b;

        

        if(tran==0){
            alert("Sin transferencias")

        }
        else{
            b=prompt("Desea recibir la trasnferencia");
            if(b=="Si" || b=="si" ||b== "SI"){
                total=parseInt(monto)+parseInt(tran);
                a=0;
                alert("Transferencia exitosa")

                $.ajax({
    
                    type:"POST",
                    url:'/recibir',
                    data:{
                        rcudc:docc,rt:total,ttr:a
                    }
                });

            }
            else{
                alert("Proceso  Cancelado")
            }
            
            
        }


       

    
        
    
    

    
    
    
    
    });
    
    
    });