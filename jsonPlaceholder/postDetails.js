var ID = localStorage.getItem('data-posts-id')

$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/" + ID,
    method: "GET"

}).then(function (r) {
    var p = $('<p>')
    p.append(r.userId + '\n' + r.id + '\n' + r.title + '\n' + r.body)
    $('body').append(p)

})

$.ajax({
    url: "https://jsonplaceholder.typicode.com/comments?postId=" + ID,
    method: "GET"
}).then(function (r) {
    r.forEach(element => {
        var p = $('<p>')
        p.append(element.body)
        $('body').after(p)
    });
})