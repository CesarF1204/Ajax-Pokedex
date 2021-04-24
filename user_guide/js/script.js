$.get("https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0", function(res) {
    for(var i = 0; i < res.results.length; i++) {
        $.get(res.results[i].url, function(images) {
            $('#bulbasaur').append("<div class='box'>"+images.name+"<img id='pokemon' data-name="+images.name+" data-id="+images.id+" data-type-1="+images.types[0].type.name+" data-type-2="+images.types[1].type.name+" data-height="+images.height+" data-weight="+images.weight+" src=\""+images.sprites.front_shiny+"\"><div>");
            $('#dialog').html("<img id='image' src=''><h2 id='name'></h2><h3>Types:</h3><ul><li id='type-1'></li><li id='type-2'></li></ul><h3>Height:</h3><p id='height'></p><h3>Weight:</h3><p id='weight'></p>");
        }, "json");
    }
    $(document).on("click","img#pokemon", function() {
        $( "#dialog" ).dialog();
        $('img#image').css("background-image", "url('"+($(this).attr('src'))+"')");
        $('img#image').attr('src', ($(this).attr('src')));
        $('#name').text($(this).attr('data-name').toUpperCase());
        $('#type-1').text($(this).attr('data-type-1').toUpperCase());
        $('#type-2').text($(this).attr('data-type-2').toUpperCase());
        $('#height').text($(this).attr('data-height').toUpperCase());
        $('#weight').text($(this).attr('data-weight').toUpperCase());
    });
}, "json");