const express=require('express')//Requerir un modulo
const rutas=express.Router();//Requerir el modulo Router
const controller=require('../controlador/controller')////Requerir un modulo, Hecho por nosotross, requerido en controlador
rutas.get('/',controller.indexprin);//Atrapar metodo control index
rutas.get('/login',controller.index);//Atrapar metodo control index

rutas.post('/login',controller.login)//Atrapar metodo control login
rutas.get('/registrarse',controller.consultageneral);//Llamar a la funcion consulta general
rutas.post('/frminsertar',controller.insertar);//Informacion de tipo post, conectarse con el formulario, llamar la funcion insertar

rutas.post('/actualizar',controller.actualizar);
rutas.post('/eliminar',controller.eliminar);
rutas.get('/cerrar',controller.cerrar);

rutas.get('/vempleados',controller.vistaempleados);
rutas.get('/clientes',controller.consultaclientes);
rutas.post('/frminsertarcli',controller.insertarclientes);
rutas.post('/actclientes',controller.actualizarclientes);
rutas.post('/eliclientes',controller.eliminarclientes);

rutas.get('/lineascreditos',controller.consultalineas);
rutas.post('/frminsertarli',controller.insertarlineas);
rutas.post('/actlineas',controller.actualizarlineas);
rutas.post('/elilineas',controller.eliminarlineas);


rutas.get('/creditos',controller.consultacreditos);
rutas.post('/frminsertarcre',controller.insertarcreditos);
rutas.post('/actcreditos',controller.actualizarcreditos);
rutas.post('/elicreditos',controller.eliminarcreditos);

rutas.get('/vclientes',controller.vistaclientes);
rutas.get('/clientecliente',controller.cclientes);


rutas.get('/vadministrador',controller.vistaadministrador);
rutas.post('/actdatclientes',controller.actualizardatcli);

rutas.get('/datusuclientes',controller.datclientes);
rutas.get('/datlineaclientes',controller.linclientes);
rutas.get('/datcrediclientes',controller.creditosclientes);
rutas.get('/adminclientes',controller.consultadatclientes);

rutas.get('/cuentas',controller.consultacuentas);
rutas.post('/frminsertarcuentas',controller.insertarcuentas);
rutas.get('/datcuencliente',controller.datoscuentasclientes);

rutas.post('/elicuentas',controller.eliminarcuentas);

rutas.post('/consignar',controller.consignarr);
rutas.post('/retirar',controller.retirarr);
rutas.post('/transferir',controller.transferirr);
rutas.post('/recibir',controller.recibirr);


module.exports=rutas//exportar lo que se requiere en el app
