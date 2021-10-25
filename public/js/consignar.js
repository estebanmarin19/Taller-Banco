$(document).ready(function(){
    

$('.btnactcon').on('click',function(){
    
    let btn= $('.btnactcon').index(this);
    let doc=$('.cod').eq(btn);
    let mont=$('.sal').eq(btn);

    
    let cdocc=doc.val();
    let monto=mont.val();


    let c,b;

    c=parseInt(prompt("Cantidad de dinero que desea consignar"));

    b=prompt("Desea continuar");
    if(b=="Si" || b=="si" ||b== "SI"){
        totalc=parseInt(monto)+parseInt(c);
                
        alert("Consignacion exitosa")
        alert(totalc )
        alert(cdocc )
        

        $.ajax({
    
            type:"POST",
            url:'/consignar',
            data:{
                ccudc:cdocc,tc:totalc
            }
        });

    }
    else{
        alert("Consignacion fallida")
    }
            
            
      
});
    
});