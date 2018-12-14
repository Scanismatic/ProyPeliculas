var objRutas = {
    'peliculas': function(params, query) {
        getPeliculas();
    },
    'peliculas/:id/': function(params, query) {
        console.log('peliculas', params, query);
    },
    '/generos/': function(params, query) {
        console.log('generos', params, query);
    },
    '/directores/': function(params, query) {
        getDirectores();
        console.log('directores', params, query);
    }
};

var _rutas = function() {
    var modo = 'hash',
        router,
        noEncontrado, predeterminada;

    predeterminada = function() {
        getPeliculas();
        console.log('peliculas');
    };
    noEncontrado = function() {
        //Cuando ninguna ruta conincida con las dadas de alta en el Router
    };

    router = new Navigo(null, modo === 'hash');

    router.on(objRutas);
    router.on(predeterminada);
    router.notFound(noEncontrado);
    router.resolve();
    return true;
};