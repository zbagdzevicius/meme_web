var komentaruMasyvas = [
    'Ignas',
    'Jonas',
    'Petras'
];




// onload
// funkcija absoliuciai pirmam listui sukurt
function listoKurimasAntras() {         

    // kuriam diva listui
    var divListui = document.createElement('div'); 
    // divui id
    divListui.id = "divoId";
    // pridedam sukurta diva i body
    document.getElementsByTagName('body')[0].appendChild(divListui);
    // sukuriam ul taga
    var ulDivui = document.createElement('ul');
    //  idedam ul i diva
    divListui.appendChild(ulDivui);
    // sukuriam for loopa kad pridetu i ul  masyvo 
    // elementus kaip li
    var kiekListeYraLi = komentaruMasyvas.length;
    
    for (var i = 0; i < kiekListeYraLi; ++i) {
        var listoElementas = document.createElement('li');
        listoElementas.innerHTML = komentaruMasyvas[i];  // perdaryt kad butu su append child o ne innerHtml
        ulDivui.appendChild(listoElementas);

    };
    // pasigaunam div paciam html'e ir imetam visa komentaru reikala 'divListui' i ji.
    document.getElementById('divasIsHtmlSkriptoVietai').appendChild(divListui);
};




// funkcija istrinanti sena lista ir sukurianti nauja su nauja masyvo verte
function listoKurimas() {
    divuiAte();
    pridedamVerteIMasyva();
    var divListui = document.createElement('div'); // sukuriam diva listui
    // divui id
    divListui.id = "divoId";
    // pridedam sukurta diva i body
    document.getElementsByTagName('body')[0].appendChild(divListui);
    // sukuriam ul taga
    var ulDivui = document.createElement('ul');
    //  idedam ul i diva
    divListui.appendChild(ulDivui);
    // sukuriam for loopa kad pridetu i ul  masyvo 
    // elementus kaip li
    var kiekListeYraLi = komentaruMasyvas.length;
    

    //////////////////////////////////////////////////////////////////////////
    // cia GAL su get element by tag name pasigauti sukurta ul ir appendint kuriamus li 
    // i ji?
    for (var i = 0; i < kiekListeYraLi; ++i) {
        var listoElementas = document.createElement('li');
        listoElementas.innerHTML = komentaruMasyvas[i];
        ulDivui.appendChild(listoElementas);

    };
    document.getElementById('divasIsHtmlSkriptoVietai').appendChild(divListui);

};




// istrina elementa, div su id ="divoId"
function divuiAte() {
    var divoPasalinimoElementas = document.getElementById("divoId");
    divoPasalinimoElementas.parentNode.removeChild(divoPasalinimoElementas);
    
};




// prideda inputa i masyva kaip pirma elementa ir ismeta paskutini.
function pridedamVerteIMasyva() {
    komentaruMasyvas.push(document.getElementById("inputas").value);
    komentaruMasyvas.shift();
};



// tikrina ar inputas yra bent du simboliai
// negalima spamint tusciai             
function inputoTustumoTikrinimas(){
    var inputoVerte = document.getElementById("inputas");
    if(inputoVerte.value.length < 2){
        alert('Komentara turi sudaryti bent 2 simboliai')
    }else{
        listoKurimas();
    }
};