var app = {
    // Application Constructor
    initialize: function () {
        getNotes();
        $("#postNotes").click(postNotes);
        $("#deleteNota").click(deleteNota);
        $("#editNota").click(editNota);
    }
};
app.initialize();
function getNotes() {
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        jsonp: "callback",
        url: "http://localhost/PHP_FILE/newEmptyPHP.php",
        data: {tipus_consulta: "getNotes"},
        success: function (respJSON) {
            $("#respAjax").html('');
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
    var nota = $("#text_nota").val();
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        jsonp: "callback",
        url: "http://localhost/PHP_FILE/newEmptyPHP.php",
        data: {tipus_consulta: "postNotes", text_nota: nota},
        success: function (result) {
            getNotes();
        }
    });
}

function deleteNota() {
    console.log('hola');
    var idNota = $("#id_nota").val();
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        jsonp: "callback",
        url: "http://localhost/PHP_FILE/newEmptyPHP.php",
        data: {tipus_consulta: "deleteNota", id_nota: idNota},
        success: function (result) {
            $("#respAjax").html(idNota);
            getNotes();
        }
    });
}
function editNota() {
    console.log('hola');
    var idNota = $("#id_edit").val();
    var textNota = $("#new_text").val();
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        jsonp: "callback",
        url: "http://localhost/PHP_FILE/newEmptyPHP.php",
        data: {tipus_consulta: "editNota", id_nota: idNota, text_nota: textNota},
        success: function (result) {
            getNotes();
        }
    });
}