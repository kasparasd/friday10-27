// 1. Sukurkite funkciją kuri priimtų parametrą "name". Jos tikslas atspausdinti 
// naršyklėje tekstą "Labas," ir šalia jo perduotą vardą. Pvz "Labas, Elena".
function pirma(name) {
    const output = document.querySelector(".pirma");
    output.innerHTML = `1. Labas, ${name}`;
}

pirma('Elena')

// 2. Sukurkite funkciją  kuri priimtų vieną parametrą (tekstą) ir grąžintų atsakymą 
// kiek simbolių yra tame tekste. Iš funkcijos gautą rezultatą atvaizduokite naršyklėje.
function antra(string) {
    document.querySelector('.antra').innerHTML = `2. Tekstas ${string} sudarytas is ${string.split('').length} simobliu`
}

antra('abc')

// 3. Sukurkite funkciją kuri priimtų du parametrus "name" ir "last_name". Funkcija turi grąžinti 
// vieną stringą, kuriame būtų vardas ir pavardė prasidedantys didžiosiomis raidėmis.

function trecia(name, last_name) {
    document.querySelector('.trecia').innerHTML = `3. ${name[0].toUpperCase()+name.slice(1)} ${last_name[0].toUpperCase()+last_name.slice(1)}`
}

trecia('abc','cba')

// 4. Parašykite funkciją kuri sugeneruotų 3 random skaičius nuo 0 iki 5 ir atspausdintų konsolėje vienoje 
// eilutėje atskirtus kableliais. Po paskutinio skaičiaus kablelio neturi būti.

function rand(min, max){
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random()* (max - min + 1) + min);
}

function ketvirta(n) {
    let result = '';

    for (let i = 0; i < n; i++) {
        if(i !== n-1){
                result += rand(0,5) + ', ';
            } else result += rand (0,5);
        }
    document.querySelector(".ketvirta").innerHTML = `4. ${result}`;

}

ketvirta(3);

//5. Parašykite funkciją kuri priimtų tris parametrus "from" ir "to" ir "limit". Patikrinkite ar šie 
// perduodami parametrai yra skaičiai ir pagal juos sugeneruokite masyvą, kurio ilgį nusako "limit" 
// parametras, o reikšmės from ir to nurodo atsitiktinį skaičių šiuose rėžiuose.

function penkta(from, to, limit) {
    if(typeof(from) !== 'number' || typeof(to) !== 'number' || typeof(limit) !== 'number') {
        document.querySelector('.penkta').innerHTML = '5. Ivestas ne skaicius'
        return;
    }

    let result = [];
    for (let i = 0; i<limit; i++){
        result.push(rand(from,to))
    }

    document.querySelector(".penkta").innerHTML = `5. nuo ${from} iki ${to}, ${limit} kartus [${result.join(', ')}]`;
}

penkta(0,5,5)

// 6 Sukurkite funkciją kuri pakeltų paduotą skaičių n laipsniu, 
// ir grąžintų reikšmę (perduodami du parametrai: skaičius ir laipsnis)

function sesta(number, degree) {
    document.querySelector('.sesta').innerHTML = `6. ${number**degree}`
}

sesta(4,2)

// 7 Parašykite funkciją, kurios parametras būtų tekstas, kuris yra 
// įterpiamas į h1 tagą. Rezultatą atvaizduokite naršyklėje.
 function septinta(string) {
    document.querySelector(".septinta").innerHTML = `7. ${string}`
 }
 septinta('abc')