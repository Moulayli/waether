function Main(ville) {
    let req = new XMLHttpRequest();
    let token="9d6eb00e81df4fc71bc62d7785b7cbfc";
    let villes=ville;
    let url="http://api.openweathermap.org/data/2.5/weather?q="+villes+"&units=metric&lang=fr&APPID="+token;
    req.open('GET', url);
    req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) {
        let data = JSON.parse(req.responseText);
        document.getElementById('Temperature').innerHTML=data.main.temp+" °";
        document.getElementById('Ciel').innerHTML=data.weather.description;
        document.getElementById('min').innerHTML=data.main.temp_min;
        document.getElementById('max').innerHTML=data.main.temp_max;
        document.getElementById('humidite').innerHTML=data.main.humidity;
        document.getElementById('ville').innerHTML=villes;
        let click= Number(document.getElementById('autre').dataset.point);
        document.getElementById('button').addEventListener('click' , function () {
            if (click == 0) {
                document.getElementById('autre').innerHTML="<div class='vent'> <input class='form-control mr-sm-2 mr-lg-2 rounded-pill' type='search' placeholder='Saisisez une ville' aria-label='Search' style='border-radius:3%;' name='recherche' value='"+villes+"' id='search'> <br>  <input class='form-control mr-sm-2 mr-lg-2 rounded-pill' type='submit'  style='border-radius:3%;' value='Rechercher' id='ok'> <br>  </div>";
                document.getElementById('ok').addEventListener('click',function () {
                    ma_ville=document.getElementById('search').value;
                    Main(ma_ville);
                })
                click += 1;
            }else{
                document.getElementById('autre').innerHTML="";
                click=0;
            }
            

        })
    }
    }
    req.send();
}
document.addEventListener('DOMContentloaded',Main('Montpellier'))