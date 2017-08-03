$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        var firstname = data.results[0].name.first
        var lastname = data.results[0].name.last

        var photo = "<img src=" + data.results[0].picture.large + ">";
        var state = "<h2>State: " + data.results[0].location.state + "</h2>"
        var fullname = "<h1>" + data.results[0].name.first + " " + data.results[0].name.last + "</h1>"

        console.log(data.results[0]);
        
        $("body").append(photo);
        $("body").append(fullname);
        $("body").append(state);
    }

});
