pokemon.forEach(p => {
  console.log(p.name);
});

$(document).ready(function(){

  for (i=0; i<pokemon.length; i++){
    var html_str = "";
    var pokename = "#"+pokemon[i].name;
    html_str += "<h2>" + pokemon[i].name + "</h2>";
    html_str += "<div class='keys'><p>Id:</p><p>Height:</p><p>Weight:</p><p>Moves:</p></div>";
    html_str += "<div class='values'>";
    html_str += "<p>" + pokemon[i].id +"</p>";
    html_str += "<p>" + pokemon[i].height +"</p>";
    html_str += "<p>" + pokemon[i].weight +"</p>";
    html_str += "<ul>";
    for(j=0; j<pokemon[i].moves.length; j++){
      html_str += "<li>" + pokemon[i].moves[j] + "</li>";
    }
    html_str += "</ul>";
    html_str += "</div>";
    console.log(html_str);
    $(pokename).html(html_str);

}}
)


    