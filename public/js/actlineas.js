$(document).ready(function(){
    alert("LINEAS")

$('.btnact').on('click',function(){
    

    let btn= $('.btnact').index(this);
    alert(btn)
    let cod=$('.cod').eq(btn);
    let nom=$('.nom').eq(btn);
    let mont=$('.mont').eq(btn);
    let plazo=$('.plazo').eq(btn);
    

    let ac1=cod.val();
    let ac2=nom.val();
    let ac3=mont.val();
    let ac4=plazo.val();
    
    

    alert("Datos: "+ ac1 +"\n"+ ac2 +"\n" + ac3 +"\n" + ac4   );
    


$.ajax({

    type:"POST",
    url:'/actlineas',
    data:{
        l1:ac1,l2:ac2,l3:ac3,l4:ac4
    }
});




});


});