$(document).ready(function(){
    
    for(var x=1;x<=151;x++){
        $('.col-md-10').append('<img class="pok" id="'+x+'\"src="http://pokeapi.co/media/img/'+x+'.png">')
    }

    $('.col-md-10').on('click','.pok',function(){
        $("#right_main").empty();
        $("#right_main").append('<img class="pok2" src="'+$(this).attr('src')+'\">'); 
        $.get('https://pokeapi.co/api/v2/pokemon/'+this.id+'/', function(res) {
            var html_str = "";
            html_str += "<h4>Types</h4>";
            html_str += "<ul>"; 
            for(var i = 0; i < res.types.length; i++) {
                html_str += "<li>" + res.types[i].type.name + "</li>";
            }
            html_str += "</ul>";
            $(".pok2").before('<h1>'+res.name+'</h1>');    
            $("#right_main").append(html_str);
            $("#right_main").append('<br><h4>Height</h4><h4>'+res.height+'</h4><br>');
            $("#right_main").append('<h4>Height</h4><h4>'+res.weight+'</h4>');
        }, "json");

    })

    


});






