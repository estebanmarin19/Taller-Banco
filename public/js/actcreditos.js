$(document).ready(function(){
    alert("CREDITOS")

$('.btnact').on('click',function(){
    

    let btn= $('.btnact').index(this);
    alert(btn)
    let cod=$('.cod').eq(btn);
    let doc=$('.doc').eq(btn);
    let codl=$('.codl').eq(btn);
    let mon=$('.mon').eq(btn);
    let fec=$('.fec').eq(btn);
    let pla=$('.pla').eq(btn);
    

    let ac1=cod.val();
    let ac2=doc.val();
    let ac3=codl.val();
    let ac4=mon.val();
    let ac5=fec.val();
    let ac6=pla.val();
    
    
    

    alert("Datos: "+ ac1 +"\n"+ ac2 +"\n" + ac3 +"\n" + ac4 +"\n" + ac5 +"\n" + ac6   );
    


$.ajax({

    type:"POST",
    url:'/actcreditos',
    data:{
        cc1:ac1,cc2:ac2,cc3:ac3,cc4:ac4,cc5:ac5,cc6:ac6
    }
});




});


});