var myDiv = $('.myDiv');
var ul = $('<ul>');
ul.css('list-style', 'none');
var ID;


$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET"

}).then(function (r) {
    for (var i = 0; i < r.length; i++) {
        var li = $('<li>').append('<a href="postDetails.html" data-posts-id="' + r[i].id + '">' + r[i].id + '. ' + r[i].title + '</a>');
        ul.append(li)
        myDiv.append(ul);
    }

    $('a').on('click', function (e) {
        e.preventDefault();
        localStorage.setItem('data-posts-id', $(this).attr('data-posts-id'))
        window.location.href = 'file:///C:/Users/student/Desktop/MarinaPesic/bit_pp/jsonPlaceholder/postDetails.html'

        ID = localStorage.getItem('data-posts-id')

    })
})



