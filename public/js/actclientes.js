$(document).ready(function(){
    alert("CLIENTES")

$('.btnact').on('click',function(){
    

    let btn= $('.btnact').index(this);
    alert(btn)
    let doc=$('.doc').eq(btn);
    let nom=$('.nom').eq(btn);
    let ape=$('.ape').eq(btn);
    let corr=$('.corr').eq(btn);
    let cel=$('.cel').eq(btn);
    let sex=$('.sex').eq(btn);
    let fec=$('.fec').eq(btn);

    let ac1=doc.val();
    let ac2=nom.val();
    let ac3=ape.val();
    let ac4=corr.val();
    let ac5=cel.val();
    let ac6=sex.val();
    let ac7=fec.val();

    alert("Datos: "+ ac1 +"\n"+ ac2 +"\n" + ac3 +"\n" + ac4 +"\n" + ac5 +"\n" + ac6 +"\n" + ac7 );
    


$.ajax({

    type:"POST",
    url:'/actclientes',
    data:{
        c1:ac1,c2:ac2,c3:ac3,c4:ac4,c5:ac5,c6:ac6,c7:ac7
    }
});




});


});