$(document).ready(function(){
    alert("Datos de Inicio de Session")
    $('.btnact').on('click',function(){
    
        let btn= $('.btnact').index(this);
        let doc=$('.doc').eq(btn);
        let usu=$('.usu').eq(btn);
        let cla=$('.cla').eq(btn);
    
        let a1=doc.val();
        let a2=usu.val();
        let a3=cla.val();
        alert("Datos actualizados");

        alert("Datos: "+ a1 +"\n"+ a2 +"\n" + a3);
        
    
    
        $.ajax({
    
            type:"POST",
            url:'/actdatclientes',
            data:{
                dat1:a1,dat2:a2,dat3:a3
            }
        });
    
    
    
    
    });
    
    
    });