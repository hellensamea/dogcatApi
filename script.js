$(document).ready(function(){
    $('#fatos').hide();
    $('#gato').on('click', function(){
        $.get('https://api.thecatapi.com/v1/images/search', function(dados, status){
        if (status == 'success'){
            $('#foto').attr("src", dados[0].url); 
        }else{
            alert('ocorreu um erro')
        }
        })
        $.get('https://cat-fact.herokuapp.com/facts', function(dados, status){
            if (status == 'success'){
                console.log(dados)
                $('#fatos').show().text("Curious fact: " + dados[0].text).css("background-color", "rgba(150, 30, 219, 0.226)");
            }
    })
})
    $('#caes').on('click', function(){
        $('#fatos').hide();
        $.get('https://random.dog/woof.json?ref=publicapis.dev', function(dados, status){
        let mp4 = dados.url
        if (mp4.includes("mp4")){
            $('#fatos').show().text("Something happened. Hit the button again, please.").css("background-color", "rgba(231, 50, 50, 0.774)")
            $('#foto').empty();
        }else{
            if (status == 'success'){
                $('#foto').attr("src", dados.url);
            }else{
                alert('ocorreu um erro')
            }
        }
       
        })
    })
})