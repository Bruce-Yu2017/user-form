$(document).ready(function() {
//    var valformfirstname = $("#formfirstname").val();
    $(".form").submit(function() {
        $("table").append("<tr></tr>");
        $("table tr:last-child").append('<td>' + $("#formfirstname").val() + '</td>');
        $("table tr:last-child").append('<td>' + $("#formlastname").val() + '</td>');
        $("table tr:last-child").append('<td>' + $("#formemail").val() + '</td>');
        $("table tr:last-child").append('<td>' + $("#formnum").val() + '</td>');
        return false;
    })
})  