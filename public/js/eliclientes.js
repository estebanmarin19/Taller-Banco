$(document).ready(function(){
    

    $('.btneli').on('click',function(){
    
        let btn= $('.btneli').index(this);
        let doc=$('.doc').eq(btn);
        
    
    
        let docli1=doc.val();
    
    
        alert("Datos borrados")
    
        $.ajax({
    
            type:"POST",
            url:'/eliclientes',
            data:{
                docu1cli:docli1
            }
        });
    
    
    
    
    });
    
    
    });