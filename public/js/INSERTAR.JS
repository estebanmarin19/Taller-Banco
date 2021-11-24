$(document).ready(function(){
    alert("Insertar")

$('.btnact1').on('click',function(){
    

    let btn= $('.btnact1').index(this);
    alert(btn)
    let doc=$('.forprincipal1').eq(btn);
    let usu=$('.forprincipal2').eq(btn);
    let cla=$('.forprincipal3').eq(btn);
    let rol=$('.forprincipal4').eq(btn);
    let est=$('.forprincipal5').eq(btn);
    let img=$('.forprincipal6').eq(btn);

    let d=doc.val();
    let u=usu.val();
    let c=cla.val();
    let r=rol.val();
    let e=est.val();
    let i=img.val();

    alert("datos "+d+u+c+r+e+i);
    


$.ajax({

    type:"POST",
    url:'/INSERTAR',
    data:{
        dd4:d,uu4:u,cc4:c,rr4:r,ee4:e,ii4:i
    }
});




});


});