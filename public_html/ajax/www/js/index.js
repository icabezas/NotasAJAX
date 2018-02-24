var app = {
    // Application Constructor
    initialize: function () {
        getNotes();
        $("#postNotes").click(postNotes);
    }
};
app.initialize();
function getNotes() {
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        jsonp: "callback",
        url: "http://localhost/PHP_FILE/newEmptyPHP.php",
        data: {"tipus_consulta": "getNotes"},
        success: function (respJSON) {
            var codi = respJSON[0];
            console.log(codi);
            for (var i = 0; i < respJSON.length; i++) {
                var nota = $('<tr><td>' + respJSON[i].id_nota + '</td><td> ' + respJSON[i].text_nota + '</td></tr>');
                $("#respAjax").append(nota);
            }
        }
    });
}

function postNotes() {
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        jsonp: "callback",
        url: "http://localhost/PHP_FILE/newEmptyPHP.php",
        data: {"tipus_consulta": "postNotes"}
    });
}