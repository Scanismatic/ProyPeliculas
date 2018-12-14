var getPeliculas = function() {
    let wsPeliculas = 'http://34.212.30.168:3000/peliculas';
    let apiPeliculas = 'http://www.omdbapi.com/?apikey=21f749ad&s=batman';
    $.ajax({
        async: true,
        type: 'GET',
        dataType: 'json',
        url: wsPeliculas
            /*, data: data*/
    }).done(function(res) {
        let tmpCards = $('#tmpCards').html();
        let fnCards = Handlebars.compile(tmpCards);
        let htmlCards = fnCards(res);

        $('#contenedor').html(htmlCards);
    }).fail(function() {

    });
}

var getDirectores = function() {
    let tmpDirectores = $('#tmpDirectores').html();
    $('#contenedor').html(tmpDirectores);
}
$(function() {
    _rutas();

});