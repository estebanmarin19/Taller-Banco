$(document).ready(function(){
    

    $('.btneli').on('click',function(){
    
        let btn= $('.btneli').index(this);
        let cod=$('.cod').eq(btn);
        
    
    
        let elcodi=cod.val();
    
    
        alert("Datos borrados")
    
        $.ajax({
    
            type:"POST",
            url:'/elilineas',
            data:{
                ele:elcodi
            }
        });
 
    
    });
    
});