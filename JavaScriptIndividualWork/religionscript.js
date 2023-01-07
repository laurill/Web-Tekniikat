// Lauri Lähdesmäki
// https://www.youtube.com/watch?v=H1DUszPZakQ&list=PLD8OYCVw7dl8V48GdYeFqzQftN-LR7yAE&index=2&t=1078s  <--- Linkki videoon josta sain apua

//Tämä quiz on "monivalintatehtävä", eli joka kysymyksellä on 4 vaihtoehtoa joista sinun pitää valita 1  oikea. 

//Tämä onclick "check" funktio laukeaa silloin, kun HTML:ssä "onclick="check"" omaavan funktion buttonista painetaan.
function check() {
    //Määritellään pisteet.
    let pisteet = 0;
    
    //Kysymysten määrittäminen (quiz on kyseisen form:in id,). .value, koska kyseessä on muutettava value (radio button).
    let k1 = document.quiz.kysymys1.value;
    let k2 = document.quiz.kysymys2.value;
    let k3 = document.quiz.kysymys3.value;
    let k4 = document.quiz.kysymys4.value;
    let k5 = document.quiz.kysymys5.value;

    //Oikeasta vastauksesta +1 piste (5pistettä maximi).
    if (k1=="Juudea") {pisteet++};
    if (k2=="Juudas") {pisteet++}
    if (k3=="Jeesus") {pisteet++};
    if (k4=="Käärme") {pisteet++};
    if (k5=="Vatikaani") {pisteet++};

    //Pisteiden tulostaminen alert ja if/elseif methodilla.
    //Jos 4 pistettä tai enemmän...
    if (pisteet>=4) {alert('Onnittelut! sait ' + pisteet + ' pistettä!')

    //Jos 3 pistettä tai vähemmän...
    }else if (pisteet<=3) {alert('Vielä vähän parannettavaa! sait ' + pisteet + ' pistettä!')}
    }