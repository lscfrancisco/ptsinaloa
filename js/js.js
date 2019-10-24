

function editar(){

var id=document.getElementById("id").value;
 fetch('http://127.0.0.1/restful_pt/index.php/clientes/cliente_by_id/'+id)
 .then( res => res.json() )
 .then( posts => {
if(posts.err===true){
  swal("Error!", "El campo nombre ID necesario!", "error");
  }else{
    swal("Hecho!", "Persona cargada correctamente!", "success");
   var nombre    = document.getElementById("nombre")
   var apellidos = document.getElementById("apellidos")
   var domicilio = document.getElementById("domicilio")
   var colonia   = document.getElementById("colonia")
   var telefono  = document.getElementById("telefono")
   var correo    = document.getElementById("correo")
   var ciudad    = document.getElementById("ciudad")
   var municipio = document.getElementById("municipio")
   var distrito  = document.getElementById("distrito")
   var seccion   = document.getElementById("seccion")
   var agua_p    = document.getElementById("agua_p")
   var alum_p    = document.getElementById("alum_p")
   var dren      = document.getElementById("dren")
   var inst_sal  = document.getElementById("inst_sal")
   var escuelas  = document.getElementById("escuelas")
   var seguridad = document.getElementById("seguridad") 
   var otras     = document.getElementById("otras")
   var observ    = document.getElementById("observ")
   var cond_soc  = document.getElementById("cond_soc")

    persona           = posts.cliente[0]
    nombre.value      = persona.nombre
    apellidos.value   = persona.apellidos
    domicilio.value   = persona.domicilio
    colonia.value     = persona.colonia
    telefono.value    = persona.telefono
    correo.value      = persona.correo
    ciudad.value      = persona.ciudad
    municipio.value   = persona.municipio 
    distrito.value    = persona.distrito 
    seccion.value     = persona.seccion
    agua_p.value      = persona.agua_p
    alum_p.value      = persona.alum_p
    dren.value        = persona.dren
    inst_sal.value    = persona.inst_sal
    escuelas.value    = persona.escuelas
    seguridad.value   = persona.seguridad
    otras.value       = persona.otras
    observ.value      = persona.observ
    cond_soc.value    = persona.cond_soc


    console.log(posts)
  }

 })
}


function getCliente(){

var id=document.getElementById("id").value;
var persona=document.getElementById("tabla");    

 fetch('http://127.0.0.1/restful_pt/index.php/clientes/cliente/'+id)
 .then( res => res.json() )
 .then( posts =>{

if(posts.err===true){
  swal("Error!", "El campo nombre es necesario!", "error");
  }else{
    if(posts.cliente.length === 0){
swal("Error!", "No se encontraron registros!", "error");
    }else{
      
      for(var i= 0; i<posts.cliente.length; i++){
     nombre = posts.cliente[i]
    $(persona).append("<tr><td>"+nombre.id+"</td><td>"+nombre.nombre + " "+ nombre.apellidos+"</td></tr>");
  
     }
      
    }
  }

 })

 }

 function deletePersona(){
  var id=document.getElementById("id").value;
  fetch('http://127.0.0.1/restful_pt/index.php/clientes/cliente/'+id, { 
method: 'DELETE',
headers: {
            'Content-Type': 'application/json'
    },
    body: JSON.stringify(id)
  })
.then( res => res.json() )
.then( posts => {

 if(posts.mensaje.includes("existe")){
  swal("Error!", "El ID ingresado no existe!", "error");
  }

  else
  {
  
  if(posts.mensaje.includes("habia")){
  swal("Error!", "El Registro ya fue eliminado anteriormente!", "error");
  }
  
  else
  {
  
  if(posts.mensaje.includes("correctamente")){
  swal("Hecho!", "El Registro Fue eliminado!", "success");
  }
  
  }
  }

 })
}

function modificar(){
   
   var id = document.getElementById("id").value;
   var nombre    = document.getElementById("nombre").value;
   var apellidos = document.getElementById("apellidos").value;
   var domicilio = document.getElementById("domicilio").value;
   var colonia   = document.getElementById("colonia").value;
   var telefono  = document.getElementById("telefono").value;
   var correo    = document.getElementById("correo").value;
   var ciudad    = document.getElementById("ciudad").value;
   var municipio = document.getElementById("municipio").value;
   var distrito  = document.getElementById("distrito").value;
   var seccion   = document.getElementById("seccion").value;
   var agua_p    = document.getElementById("agua_p").value;
   var alum_p    = document.getElementById("alum_p").value;
   var dren      = document.getElementById("dren").value;
   var inst_sal  = document.getElementById("inst_sal").value;
   var escuelas  = document.getElementById("escuelas").value;
   var seguridad = document.getElementById("seguridad").value;
   var otras     = document.getElementById("otras").value;
   var observ    = document.getElementById("observ").value;
   var cond_soc  = document.getElementById("cond_soc").value;

    var data = {
    nombre    : nombre,
    apellidos : apellidos,
    domicilio : domicilio,
    colonia   : colonia,
    telefono  : telefono,
    correo    : correo,
    ciudad    : ciudad,
    municipio : municipio,
    distrito  : distrito,
    seccion   : seccion,
    agua_p    : agua_p,
    alum_p    : alum_p,
    dren      : dren,
    inst_sal  : inst_sal,
    escuelas  : escuelas,
    seguridad : seguridad,
    otras     : otras,
    observ    : observ,
    cond_soc  : cond_soc
  };

  fetch('http://127.0.0.1/restful_pt/index.php/clientes/cliente/'+id, {
    method: 'PUT',
    headers: {
            'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then ( res => res.json() )
  .then ( res =>  {
    if(res.err===true){
      swal("Error!", "Revisa los campos!", "error");
    }else{
      if(res.err===false){
        swal("Hecho!", "Registro actualizado correctamente!", "success");
      }
    }
  } )
  .catch( err => console.log('app.js error: ', err));

}

 function guardar(){
    
   var nombre    = document.getElementById("nombre").value;
   var apellidos = document.getElementById("apellidos").value;
   var domicilio = document.getElementById("domicilio").value;
   var colonia   = document.getElementById("colonia").value;
   var telefono  = document.getElementById("telefono").value;
   var correo    = document.getElementById("correo").value;
   var ciudad    = document.getElementById("ciudad").value;
   var municipio = document.getElementById("municipio").value;
   var distrito  = document.getElementById("distrito").value;
   var seccion   = document.getElementById("seccion").value;
   var agua_p    = document.getElementById("agua_p").value;
   var alum_p    = document.getElementById("alum_p").value;
   var dren      = document.getElementById("dren").value;
   var inst_sal  = document.getElementById("inst_sal").value;
   var escuelas  = document.getElementById("escuelas").value;
   var seguridad = document.getElementById("seguridad").value;
   var otras     = document.getElementById("otras").value;
   var observ    = document.getElementById("observ").value;
   var cond_soc  = document.getElementById("cond_soc").value;


 	var data = {
    nombre    :  nombre,
    apellidos :  apellidos,
    domicilio :  domicilio,
    colonia   :  colonia,
    telefono  :  telefono,
    correo    :  correo,
    ciudad    :  ciudad,
    municipio :  municipio,
    distrito  :  distrito,
    seccion   :  seccion,
    agua_p    :  agua_p,
    alum_p    :  alum_p,
    dren      :  dren,
    inst_sal  :  inst_sal,
    escuelas  :  escuelas,
    seguridad :  seguridad,
    otras     :  otras,
    observ    :  observ,
    cond_soc  :  cond_soc
 	};
 	fetch('http://127.0.0.1/restful_pt/index.php/clientes/cliente', {
 		method: 'POST',
 		headers: {
            'Content-Type': 'application/json'
 		},
 		body: JSON.stringify(data)
 	})
 	.then ( res => res.json() )
 	.then ( res => {
    if(res.err===true){
     console.log(res.errores)
     if(res.errores.nombre){
      document.getElementById("error-nombre").innerHTML = `
     <div class="alert alert-danger"> ${ res.errores.nombre } </div>
      `
     }
     if(res.errores.correo){
      document.getElementById("error-correo").innerHTML = `
     <div class="alert alert-danger"> ${ res.errores.correo } </div>
      `
     }
     if(res.errores.apellidos){
      document.getElementById("error-apellidos").innerHTML = `
     <div class="alert alert-danger"> ${ res.errores.apellidos } </div>
      `
     }
     if(res.errores.domicilio){
      document.getElementById("error-domicilio").innerHTML = `
     <div class="alert alert-danger"> ${ res.errores.domicilio } </div>
      `
     }
      if(res.errores.telefono){
      document.getElementById("error-telefono").innerHTML = `
     <div class="alert alert-danger"> ${ res.errores.telefono } </div>
      `
     }
     if(res.errores.colonia){
      document.getElementById("error-colonia").innerHTML = `
     <div class="alert alert-danger"> ${ res.errores.colonia } </div>
      `
     }
     if(res.errores.ciudad){
      document.getElementById("error-ciudad").innerHTML = `
     <div class="alert alert-danger"> ${ res.errores.ciudad } </div>
      `
     }
     if(res.errores.municipio){
      document.getElementById("error-municipio").innerHTML = `
     <div class="alert alert-danger"> ${ res.errores.municipio } </div>
      `
     }
     if(res.errores.distrito){
      document.getElementById("error-distrito").innerHTML = `
     <div class="alert alert-danger"> ${ res.errores.distrito } </div>
      `
     }
     if(res.errores.seccion){
      document.getElementById("error-seccion").innerHTML = `
     <div class="alert alert-danger"> ${ res.errores.seccion } </div>
      `
     }
    }else{
      if(res.err===false){
        swal("Hecho!", "Registro Insertado correctamente!", "success")
        
      }
    }
  } )
    .catch( err => console.log('app.js error: ', err));
 }
