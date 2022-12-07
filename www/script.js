window.onload = function(){
        const opcoes = {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'default'
            }
            fetch(`https://adinfinutum.profrodolfo.com.br/pedroArt/proMobile.php`, opcoes)
            .then(
                response => {response.json()
                .then(json => {
                        for(i = 0; i < json.length; i++){
                        document.querySelector('.content').innerHTML+= '<div class="card"><div class="img"><img src="'+json[i].imagem+'" alt="" width="200px"></div><div class="text"><h3>'+json[i].nome+'</h3><h3>'+json[i].valor+'</h3><h3>'+json[i].ds_produto+'</h3></div><div class="btn"><a href="instagram.com/pedrol_art"><button>Comprar</button></a></div></div>';
                    }
                })            
            })

}