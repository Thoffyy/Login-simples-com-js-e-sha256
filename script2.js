function teste() {
    var lista = ["leite", "pão", "queijo", "presunto"];
    
    console.log(lista.toString());
    
    }
    

    function add(){
        var receber = document.getElementById("receber").value;
        var lista = ["leite", "pão", "queijo", "presunto"];

        lista.push(receber);
        

        alert(lista);


    }

    function receber(){
        var receber = document.getElementById("receber").value;
        var lista = ["leite", "pão", "queijo", "presunto"];

        lista.push(receber);
        

        alert(lista);
    }

    function txtarea(){
        let data = document.getElementById("txtarea2").value;
        let htmlfinal = '';


        for(var i = 0; i < 10; i++);{
            htmlfinal += "<a> data </a>";
        }

        

    }