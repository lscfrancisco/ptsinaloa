//imports

importScripts('js/sw-utils.js');




const STATIC_CACHE  	= 'static-v1';
const DYNAMIC_CACHE 	= 'dynamic-v1';
const INMUTABLE_CACHE 	= 'inmutable-v1';

const APP_SHELL = [
//'/',
'index.html',
'buscar.html',
'editar.html',
'eliminar.html',
'js/app.js',
'js/js.js',
'images/logo.png',
'js/sw-utils.js'
];

const APP_SHELL_INMUTABLE = [
'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
'https://unpkg.com/sweetalert/dist/sweetalert.min.js'
];

self.addEventListener('install', e => {

const cacheStatic = caches.open( STATIC_CACHE ).then(cache => {
cache.addAll( APP_SHELL );
});

const cacheInmutable = caches.open( INMUTABLE_CACHE ).then(cache => {
cache.addAll( APP_SHELL_INMUTABLE );
});


e.waitUntil( Promise.all([ cacheStatic, cacheInmutable ]) );

});

self.addEventListener('activate', e=> {

const respuesta = caches.keys().then( keys => {
	keys.forEach( key => {

		if( key !== STATIC_CACHE && key.includes('static') ){
			return caches.delete(key);
		}

	});	

	});

	e.waitUntil( respuesta );

});

self.addEventListener( 'fetch', e => {

const respuesta = caches.match( e.request ).then(res => {

	if(res) {
		return res;
	}else{

		return fetch(e.request).then( newRes=> {
        
        return actualizaCacheDinamico( DYNAMIC_CACHE, e.request, newRes );


		});
	}


});

e.respondWith( respuesta );

});