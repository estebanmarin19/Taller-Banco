const connection=require('../conexion/conexion');
const cnn=connection();
const {render}=require('ejs');
const bcryptjs=require('bcryptjs');
const controller={};


controller.index=(req,res,next)=>{
    res.render('login')
    res.send("error en contolador");
}
controller.indexprin=(req,res,next)=>{
    res.render('paginainicio')
    
}
/*
controller.vistaclientes=(req,res,next)=>{
    res.render('vclientes')
    
}
controller.vistaadministrador=(req,res,next)=>{
    res.render('vadministrador')
    
}*/

//BOQUE PARA INSERTAR USUARIOS

controller.consultageneral=(req,res,next)=>{
    if(req.session.login){
   
   cnn.query('SELECT * FROM usuarios',(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('registrarse',{datos:resbd});
       }
   }) 
   
    }
    else{
        res.redirect('/');
    }
}
controller.insertar=async(req,res,next)=>{
const d=req.body.doccli;
const u=req.body.nomusu;
const c=req.body.clave;
const r=req.body.rol;
const e=req.body.estado;
const i=req.body.imagen;
const password=await bcryptjs.hash(c,8)
             
cnn.query('INSERT INTO usuarios SET?',{doccli:d,nomusu:u,clave:password,rol:r,estado:e,imagen:i},(err,resbd)=>{
    
    if(err){
         next(new Error(err));
     }
     else{
         //console.log(resbd);

         //res.render('index',{datos:respbd})
         res.redirect('/');
     }
 
 
});


}

controller.login=async(req,res,next)=>{
 const usu=await req.body.usu;
 const cla=await req.body.cla;
 console.log(usu, cla)
 cnn.query('SELECT * FROM usuarios WHERE nomusu=?',[usu],async(err,results)=>{
   
       
    if(err){
        next(new Error("Error de consulta login",err));
    } 


    if (results!=0){
           console.log("primer if", results)


        if(await(bcryptjs.compare(cla,results[0].clave))){
            console.log("Datos corectos segundo");
           //res.redirect('consultar');
            rol= results[0].rol;
            uss=results[0].nomusu;  //
            req.session.login=true;
            req.session.usuar=results[0].nomusu;
            
            
           switch(rol){
               case 'Cliente':
                res.redirect('vclientes');
                break;

               case 'Empleado':
                res.redirect('vempleados');
               break;

               case 'Administrador':
                res.redirect('vadministrador');
               break;
           }





        }
        else{
            console.log("Datos incorectos segundo  else");
            res.redirect('login');
        }
    }
   else{
    console.log("Datos incorrecto");
    console.log(results);
    

   }     
            
  

    //////////////////////////////////

    


    ////////////////////////////////////

//VISTA CLIENTE




 });


}


controller.actualizar=async(req,res,next)=>{
const docx=req.body.dd;
const usux=req.body.uu;
const clax=req.body.cc;
const rolx=req.body.rr;
const estx=req.body.ee;
const imgx=req.body.ii;
const password=await bcryptjs.hash(clax,8)

cnn.query('UPDATE usuarios SET nomusu="'+usux+'",clave="'+password+'",rol="'+rolx+'", estado="'+estx+'",imagen="'+imgx+'" WHERE doccli="'+docx+'"', async(err,respbb)=>{
  if(err){
      next(new Error(err));
  }
  else{
      console.log("Actualizado")
      res.redirect('registrarse');
  }
})
}

controller.eliminar=async(req,res,next)=>{
    const d=req.body.dd

    cnn.query('DELETE  FROM usuarios WHERE doccli="'+d+'"',async(err,resbd)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("Eliminado");
            res.redirect('registratse');
        }
    })
}




controller.cerrar=(req,res,next)=>{
req.session.destroy(()=>{
    res.redirect('/');
});


}

controller.consultaclientes=(req,res,next)=>{
    if(req.session.login){
   
   cnn.query('SELECT * FROM clientes',(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('clientes',{datos:resbd});
       }
   }) 
   
    }
    else{
        res.redirect('/');
    }
}

controller.consultadatclientes=(req,res,next)=>{
    if(req.session.login){
   
   cnn.query('SELECT * FROM clientes',(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('adminclientes',{datos:resbd});
       }
   }) 
   
    }
    else{
        res.redirect('/');
    }
}





controller.insertarclientes=async(req,res,next)=>{
const j1=req.body.doccli;
const j2=req.body.nomcli;
const j3=req.body.apecli;
const j4=req.body.correocli;
const j5=req.body.celulra;
const j6=req.body.sexo;
const j7=req.body.fechanaccli;

             
cnn.query('INSERT INTO clientes SET?',{doccli:j1,nomcli:j2,apecli:j3,correocli:j4,celulra:j5,sexo:j6,fechanaccli:j7},(err,resbd)=>{
    
    if(err){
         next(new Error(err));
     }
     else{
         //console.log(resbd);

         //res.render('index',{datos:respbd})
         res.redirect('clientes');
     }
 
 
});


}


controller.actualizarclientes=async(req,res,next)=>{
    const docc=req.body.c1;
    const nomc=req.body.c2;
    const apec=req.body.c3;
    const corrc=req.body.c4;
    const celc=req.body.c5;
    const sexc=req.body.c6;
    const fecc=req.body.c7;
    
    cnn.query('UPDATE clientes SET nomcli="'+nomc+'",apecli="'+apec+'",correocli="'+corrc+'", celulra="'+celc+'",sexo="'+sexc+'", fechanaccli="'+fecc+'" WHERE doccli="'+docc+'"', async(err,respbb)=>{
      if(err){
          next(new Error(err));
      }
      else{
        console.log("Actualizado")
        res.redirect('clientes');
      }
    })
}


controller.eliminarclientes=async(req,res,next)=>{
    const tage=req.body.docu1cli
    console.log(tage)
    
    
    
    cnn.query('DELETE  FROM clientes WHERE doccli="'+tage+'"',async(err,resbd)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("Eliminado");
            res.redirect('clientes');
        }
    })
}
    












controller.consultalineas=(req,res,next)=>{
    if(req.session.login){
   
   cnn.query('SELECT * FROM lineas',(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('lineascreditos',{datos:resbd});
       }
   }) 
   
    }
    else{
        res.redirect('/');
    }
}
controller.insertarlineas=async(req,res,next)=>{
const e1=req.body.codlinea;
const e2=req.body.nomlinea;
const e3=req.body.montomaxicredito;
const e4=req.body.plazomaxcred;


             
cnn.query('INSERT INTO lineas SET?',{codlinea:e1,nomlinea:e2,montomaxicredito:e3,plazomaxcred:e4},(err,resbd)=>{
    
    if(err){
         next(new Error(err));
     }
     else{
         //console.log(resbd);

         //res.render('index',{datos:respbd})
         res.redirect('lineascreditos');
     }
 
 
});


}



controller.actualizarlineas=async(req,res,next)=>{
    const codq=req.body.l1;
    const nomq=req.body.l2;
    const montq=req.body.l3;
    const plazoq=req.body.l4;
    
    
    
    cnn.query('UPDATE lineas SET nomlinea="'+nomq+'",montomaxicredito="'+montq+'",plazomaxcred="'+plazoq+'" WHERE codlinea="'+codq+'"', async(err,respbb)=>{
      if(err){
          next(new Error(err));
      }
      else{
        console.log("Actualizado")
        res.redirect('lineascreditos');
      }
    })
}

controller.eliminarlineas=async(req,res,next)=>{
    const eqw=req.body.ele

    cnn.query('DELETE  FROM lineas WHERE codlinea="'+eqw+'"',async(err,resbd)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("Eliminado");
            res.redirect('lineascreditos');
        }
    })
}







controller.consultacreditos=(req,res,next)=>{
    if(req.session.login){
   
   cnn.query('SELECT * FROM creditos',(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('creditos',{datos:resbd});
       }
   }) 
   
    }
    else{
        res.redirect('/');
    }
}
controller.insertarcreditos=async(req,res,next)=>{
const m1=req.body.codigocredito;
const m2=req.body.doccli;
const m3=req.body.codlinea;
const m4=req.body.montoprestamo;
const m5=req.body.fechaaprobada;
const m6=req.body.plazo;


             
cnn.query('INSERT INTO creditos SET?',{codigocredito:m1,doccli:m2,codlinea:m3,montoprestamo:m4,fechaaprobada:m5,plazo:m6},(err,resbd)=>{
    
    if(err){
         next(new Error(err));
     }
     else{
         //console.log(resbd);

         //res.render('index',{datos:respbd})
         res.redirect('creditos');
     }
 
 
});


}

controller.actualizarcreditos=async(req,res,next)=>{
    const codn=req.body.cc1;
    const docn=req.body.cc2;
    const coln=req.body.cc3;
    const monton=req.body.cc4;
    const fecn=req.body.cc5;
    const plan=req.body.cc6;
    
    
    
    cnn.query('UPDATE creditos SET doccli="'+docn+'",codlinea="'+coln+'",montoprestamo="'+monton+'",fechaaprobada="'+fecn+'",plazo="'+plan+'" WHERE codigocredito="'+codn+'"', async(err,respbb)=>{
      if(err){
          next(new Error(err));
      }
      else{
        console.log("Actualizado")
        res.redirect('creditos');
      }
    })
}

controller.eliminarcreditos=async(req,res,next)=>{
    const wqe=req.body.cocre

    cnn.query('DELETE  FROM creditos WHERE codigocredito="'+wqe+'"',async(err,resbd)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("Eliminado");
            res.redirect('creditos');
        }
    })
}




controller.cclientes=(req,res,next)=>{
    if(req.session.login){
   
   cnn.query('SELECT * FROM usuarios INNER JOIN clientes on (usuarios.doccli=clientes.doccli) WHERE nomusu=?',[req.session.usuar],(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('clientecliente',{datos:resbd});
       }
   }) 
   
    }
    else{
        res.redirect('/');
    }
}

controller.datclientes=(req,res,next)=>{
    if(req.session.login){
   
   cnn.query('SELECT * FROM usuarios  WHERE nomusu=?',[req.session.usuar],(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('datusuclientes',{datos:resbd});
       }
   }) 
   
    }
    else{
        res.redirect('/');
    }
}


controller.linclientes=(req,res,next)=>{
    if(req.session.login){
   
   cnn.query('SELECT * FROM lineas',(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('datlineaclientes',{datos:resbd});
       }
   }) 
   
    }
    else{
        res.redirect('/');
    }
}

controller.creditosclientes=(req,res,next)=>{
    if(req.session.login){

    cnn.query('SELECT * FROM creditos INNER JOIN clientes on (creditos.doccli=clientes.doccli) INNER JOIN usuarios on (usuarios.doccli=clientes.doccli) WHERE nomusu=?',[req.session.usuar],(err,resbd)=>{
        if(err){
            next(new Error(err))  
            console.log("Error en la consulta")
        }
        else{
            // console.log(resbd)
            res.render('datcrediclientes',{datos:resbd});
        }
    }) 
        
    }
    else{
        res.redirect('/');
    }
   
       
}

controller.actualizardatcli=async(req,res,next)=>{
    const docxc=req.body.dat1;
    const usuxc=req.body.dat2;
    const claxc=req.body.dat3;
    const password=await bcryptjs.hash(claxc,8);

    console.log(usuxc)
    console.log(password)
    cnn.query('UPDATE usuarios SET  nomusu="'+usuxc+'",clave="'+password+'" WHERE doccli="'+docxc+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));

        }
        else{
            console.log("Actualizado")
            
           
        }
        res.redirect('actdatclientes')
        




    })
}

controller.consultacuentas=(req,res,next)=>{
    if(req.session.login){
   
   cnn.query('SELECT * FROM cuentas',(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('cuentas',{datos:resbd});
       }
   }) 
   
    }
    else{
        res.redirect('/');
    }
}
controller.insertarcuentas=async(req,res,next)=>{
const da1=req.body.codcuenta;
const ua1=req.body.doccli;
const ca1=req.body.tipocuenta;
const ra1=req.body.saldo;

             
cnn.query('INSERT INTO cuentas SET?',{codcuenta:da1,doccli:ua1,tipocuenta:ca1,saldo:ra1},(err,resbd)=>{
    
    if(err){
         next(new Error(err));
     }
     else{
         //console.log(resbd);

         //res.render('index',{datos:respbd})
         res.redirect('cuentas');
     }
 
 
});


}

controller.datoscuentasclientes=(req,res,next)=>{
    if(req.session.login){
   
   cnn.query('SELECT * FROM cuentas INNER JOIN clientes on (cuentas.doccli=clientes.doccli) INNER JOIN usuarios on (clientes.doccli=usuarios.doccli) WHERE nomusu=?',[req.session.usuar],(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('datcuencliente',{datos:resbd});
       }
   }) 
   
    }
    else{
        res.redirect('/');
    }
}


controller.vistaclientes=(req,res,next)=>{
    if(req.session.login){
   
   cnn.query('SELECT * FROM usuarios INNER JOIN clientes on (usuarios.doccli=clientes.doccli) WHERE nomusu=?',[req.session.usuar],(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('vclientes',{datos:resbd});
       }
   }) 
   
    }
    else{
        res.redirect('/');
    }
}

controller.vistaempleados=(req,res,next)=>{
    if(req.session.login){
   
   cnn.query('SELECT * FROM usuarios INNER JOIN clientes on (usuarios.doccli=clientes.doccli) WHERE nomusu=?',[req.session.usuar],(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('vempleados',{datos:resbd});
       }
   }) 
   
    }
    else{
        res.redirect('/');
    }
}

controller.vistaadministrador=(req,res,next)=>{
    if(req.session.login){
   
   cnn.query('SELECT * FROM usuarios INNER JOIN clientes on (usuarios.doccli=clientes.doccli) WHERE nomusu=?',[req.session.usuar],(err,resbd)=>{
       if(err){
         next(new Error(err))  
         console.log("Error en la consulta")
       }
       else{
          // console.log(resbd)
           res.render('vadministrador',{datos:resbd});
       }
   }) 
   
    }
    else{
        res.redirect('/');
    }
}


controller.eliminarcuentas=async(req,res,next)=>{
    const wwmkm=req.body.mmmmm

    cnn.query('DELETE  FROM cuentas WHERE codcuenta="'+wwmkm+'"',async(err,resbd)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("Eliminado");
            res.redirect('cuentas');
        }
    })
}




/*Transferencias*/
controller.retirarr=async(req,res,next)=>{

    const documento=req.body.cudc;
    const mnuevo=req.body.t;

    console.log(mnuevo)

  
    
   

    cnn.query('UPDATE cuentas SET  saldo="'+mnuevo+'" WHERE codcuenta="'+documento+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));

        }
        else{
            console.log("Actualizado")
           
        }
        res.redirect('datcuencliente')




    })
}

controller.consignarr=async(req,res,next)=>{

    const cdocumento=req.body.ccudc;
    const cmnuevo=req.body.tc;
    console.log(cdocumento,cmnuevo)


    cnn.query('UPDATE cuentas SET  saldo="'+cmnuevo+'" WHERE codcuenta="'+cdocumento+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));

        }
        else{
            console.log("Actualizado")
           
        }
        res.redirect('datcuencliente')




    })
}

controller.transferirr=async(req,res,next)=>{

    const tdocumento=req.body.tcudc;
    const tmnuevo=req.body.tc;
    const trans=req.body.tr;
    const ncuenta=req.body.noc;

    console.log(tmnuevo)

  
    
   

    cnn.query('UPDATE cuentas SET  saldo="'+tmnuevo+'" WHERE codcuenta="'+tdocumento+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));

        }
        else{
            console.log("Actualizado")
           
        }
        res.redirect('datcuencliente')




    })
    cnn.query('UPDATE cuentas SET  transferencia="'+trans+'" WHERE codcuenta="'+ncuenta+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));

        }
        else{
            console.log("Actualizado")
           
        }
        res.redirect('datcuencliente')




    })
}


controller.recibirr=async(req,res,next)=>{

    const tdocumento=req.body.rcudc;
    const tmnuevo=req.body.rt;
    const transnuevo=req.body.ttr;

    

  
    
   

    cnn.query('UPDATE cuentas SET  saldo="'+tmnuevo+'",transferencia="'+transnuevo+'" WHERE codcuenta="'+tdocumento+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));

        }
        else{
            console.log("Actualizado")
           
        }
        res.redirect('datcuencliente')




    })
}



     
    
     
     



module.exports=controller;





/*const connection=require('../conexion/conexion');//Requerir la conexion
const cnn=connection();//Guardar lo que trae de conexion 
const {render}=require('ejs');//Instruccion para el renderizado de vistas, ver los ejs
const bcryptjs=require('bcryptjs');//
const controller={};//Objeto vacio,Ingresar metodos que se van generando


controller.index=(req,res,next)=>{//Funcion para la vista donde esta el logueo, peticion,respuesta, enviar error
    res.render('login')//Renderizar 
    res.render("error de controlador");// Mensaje en caso de error
}


controller.consultageneral=(req,res,next)=>{//Funcion para la consulta que se va a hacer
    if(req.session.login){

    cnn.query('SELECT * FROM usuarios',(err,resbd)=>{//Hcer la consulta de los datos de la tabla usuarios
        if(err){//Si hay un error
            next(new Error(err))//Mostrar error
            console.log("Error en la consulta")//Mensaje de erro
        }
        else{//Si no hay error
            console.log(resbd)//Mostrar lo que trae de la base de datos
            res.render('registrarse',{datos:resbd});//Renderizar la respuesta en el archivo registrarse
        }
    })
    }
    else{
        res.redirect('/');
    }
}
controller.insertar=async(req,res,next)=>{//Funcion para poder insertar los datos
const d=req.body.doccli;//Atrapar el dato
const u=req.body.nomusu;//Atrapar el dato
const c=req.body.clave;//Atrapar el dato
const r=req.body.rol;//Atrapar el dato
const e=req.body.estado;//Atrapar el dato
const i=req.body.imagen;//Atrapar el dato

const password=await bcryptjs.hash(c,8)

console.log(d,u)//Imprimir datos
cnn.query('INSERT INTO usuarios SET?',{doccli:d,nomusu:u,clave:password,rol:r,estado:e,imagen:i},(err,resbd)=>{//Insertar datos
if(err){//Si hay error
    next(new Error(err))//Mostrar el error
}
else{//Si no hay error
res.redirect('/')//Redireccionar 

}
});
}

controller.login=async(req,res,next)=>{ //Funcion 
    const usu=await req.body.usu; //Variable que atrapa el campo  de login
    const cla=await req.body.cla;//Variable que atrapa el campo  de login
    console.log(usu, cla)
    cnn.query('SELECT * FROM  usuarios WHERE nomusu=?',[usu],(err,results)=>{//Pedir todos los datos segun una condicion
        if(err){
            next(new Error("Error de consulta login",err));//Enviar un mensaje y mostarlo
        }
        
        if(results!=0){
            console.log("primer if")
            console.log(results[0].nomusu)
            console.log(results[0].clave)
            if((bcryptjs.compare(cla,results[0].clave))){

                console.log("Datos correctos")
            //res.redirect('registrarse')
            rol=results[0].rol;
            uss=results[0].nomusu;
            req.session.login=true;
            switch(rol){

                case 'Cliente':
                    res.redirect('ccc');
                break;

                case 'empleado':
                    res.redirect('registrarse');
                break;

            }


        }
        }
        else{
            console.log(results[0].nomusu)
            console.log(results[0].clave)
            console.log("Datos Incorrectos");
            res.redirect('/');


        }



            
    })
}


controller.mcliente=(req,res,next)=>{
    console.log("en la vista de usuario")//Enviar Mensaje
    res.render('ccc')//Resdirecionar
    
}

controller.actualizar=async(req,res,next)=>{
    const docx=req.body.dd;
    const usux=req.body.uu;
    const clax=req.body.cc;
    const rolx=req.body.rr;
    const estx=req.body.ee;
    const imgx=req.body.ii;
    const password=await bcryptjs.hash(clax,8);

console.log(docx)
    
    cnn.query('UPDATE usuarios SET nomusu="'+usux+'",clave="'+password+'",rol="'+rolx+'",estado="'+estx+'",imagen="'+imgx+'" WHERE doccli="'+docx+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));

        }
        else{
            console.log("Actualizado")
            res.redirect('registrarse')
        }




    })
}
controller.eliminar=async(req,res,next)=>{
    const d=req.body.dd

    cnn.query('DELETE  FROM usuarios WHERE doccli="'+d+'"',async(err,resbd)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("Eliminado");
            res.redirect('registratse');
        }
    })
}


controller.cerrar=(req,res,next)=>{//Cerar sesion
req.session.destroy(()=>{//Destruye la Sesion
    res.redirect('/');//Redirecciona
})
}

module.exports=controller; //Exportar modulo

*/