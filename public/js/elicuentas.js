$(document).ready(function(){
    

    $('.btneli').on('click',function(){
    
        let btn= $('.btneli').index(this);
        let cod=$('.cod').eq(btn);
        
    
    
        let jjaa=cod.val();
    
    
        alert("Datos borrados")
    
        $.ajax({
    
            type:"POST",
            url:'/elicuentas',
            data:{
                mmmmm:jjaa
            }
        });
 
    
    });
    
});