
document.addEventListener('DOMContentLoaded', postData)




const data = document.location.search;
const params = new URLSearchParams(data);


let andyrating = 0;
let image;

const cereal = params.get('cereal');
const siblings = params.get('siblings');
const movies = params.get('movies');
const fruit = params.get('fruit');
const scaleof = params.get('scaleof');



if (cereal == "flakes" && siblings == "many" && movies == "farhome" && fruit == "banana" && scaleof == "7" ) {
    andyrating += 25;
} else if (cereal == "cocoa" && siblings == "one" && movies == "nohome" && fruit == "orange" && scaleof == "2" ) {
    andyrating += 50;
} else if (cereal == "wheats" && siblings == "none" && movies == "nohome" && fruit == "grape" && scaleof == "10" ) {
    andyrating += 70;
} else if (cereal == "cocoa" && siblings == "nofam" && movies == "homecoming" && fruit == "apple" && scaleof == "0" ) {
    andyrating += 80;
} else {
    andyrating += 0;
}

function postData() {
    const container = document.getElementById("results");
    if (andyrating > 0 && andyrating < 25) {
        image = "images/venice.jpg";
        container.innerHTML = `<h1>You are Venice!</h1>
                           <img id="image" src="${image}"></img>
                           <p>Venice is the debut studio album by American rapper Anderson .Paak. It was released on October 28, 2014, 
                           by Steel Wool, OBE and Empire Distribution. Anderson .Paak produced the album, 
                           alongside several other record producers such as Lo_Def, DJ Nobody, DK the Punisher, 
                           Mikos the Gawd, Kelsey Gonzalez, Tokimonsta, Ta-Ku; as well as it features guest appearance from SiR. 
                           The album was supported by two singles: "Drugs" and "Miss Right".</p>`;
    } else if (andyrating >= 25 && andyrating < 50){
        image = "images/oxnard.jpeg";
        container.innerHTML = `<h1>You are Oxnard</h1>
                              <img id="image" src=${image}></img>
                              <p>Oxnard is the third studio album by American musician Anderson .Paak. It was released on November 16, 2018, by 12 Tone Music, 
                           Aftermath Entertainment, and OBE. The album features guest appearances from Kadhja Bonet, Norelle, Kendrick Lamar, Sonyae Elise, 
                           Dr. Dre, Cocoa Sarai, Pusha T, Snoop Dogg, The Last Artful, Dodgr, J. Cole, Q-Tip, and BJ the Chicago Kid.</p>`;
    } else if (andyrating >= 50 && andyrating < 75){
        image = "images/malibu.jpg";
        container.innerHTML = `<h1>You are Malibu!</h1>
                           <img id="image" src="${image}"></img>
                           <p>Malibu is the second studio album by American rapper Anderson .Paak. It was released on January 15, 2016, by ArtClub International, 
                           Empire Distribution, OBE and Steel Wool Records following the release of his EP, Link Up & Suede, with Knxwledge 
                           (credited as the duo, NxWorries).</p>`;
    } else if (andyrating >= 75 && andyrating < 100){
        image = "images/ventura.png";
        container.innerHTML = `<h1>You are Ventura!</h1>
                           <img id="image" src="${image}"></img>
                           <p>Ventura is the fourth studio album by American rapper Anderson .Paak. It was released on April 12, 2019, by 12 Tone Music and 
                           Aftermath Entertainment. It features guest appearances from André 3000, Smokey Robinson, Lalah Hathaway, Jazmine Sullivan, 
                           Sonyae Elise, and Brandy, along with posthumous vocals from Nate Dogg.</p>`;
    } else {
        image = "images/yeslawd.jpg";
        container.innerHTML = `<h1>You are YES LAWD!</h1>
                           <img id="image" src="${image}"></img>
                           <p>Yes Lawd! is the debut studio album by American neo soul duo NxWorries, 
                           which consists of vocalist Anderson .Paak and producer Knxwledge. 
                           It was released on October 21, 2016, by Stones Throw Records. 
                           It is supported by four singles, "Suede", "Link Up", "Lyk Dis", and 
                           "Get Bigger / Do U Luv".</p>`;
    }
    
}

