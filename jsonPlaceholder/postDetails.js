
$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/" + ID,
    method: "GET"

}).then(function (r) {
    var p = $('<p>')
    p.append(r.userId + '\n' + r.id + '\n' + r.title + '\n' + r.body)
    $('body').append(p)
})