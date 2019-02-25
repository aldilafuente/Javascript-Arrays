//EJERCICIOS CON ARRAYS

// EJERCICIO 00
// var lasSuaves = ['Vicki', 'Mica', 'Cata', 'Mar', 'Aldi'];
// var numbers = [1, 2, 3, 4, 5];
// console.log(lasSuaves);
// console.log(numbers);


// EJERCICIO 01
// var playlistA7x = ['Afterlife', 'Second Heartbeat', 'Girl I Know', 'Unholy Confessions', 'The Fight', 'Scream', 'Streets'];
// console.log('Segunda canción:', playlistA7x[1], 'y quinta:', playlistA7x[4]);


// EJERCICIO 02
// var bandas = ['Megadeth','Slipknot','A7x','The Lonely Island','Trivium','In Flames','Ghost','Mudvayne','Killswitch Engage','SOAD'];
// var primera = bandas[0];
// var tercera = bandas[2];
// var sexta = bandas[5];
// console.log('La banda en primer lugar es:', primera);
// console.log('La banda en tercer lugar es:', tercera);
// console.log('La banda en sexto lugar es:', sexta);


// EJERCICIO 03
// var notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(notas[0]+notas[3]+notas[4]+notas[9]);


// EJERCICIO 04
// var datos = [27, true, 'La edad de la persona es: '];
// if (datos[1] == true) {
//     console.log(datos[2]+datos[0]);
// } else {
//     console.log('Algo estás haciendo mal');
// }


// EJERCICIO 05
// var alumnas = [];
// alumnas [0] = 'Grace';
// alumnas [1] = 'Vicki';
// alumnas [2] = 'Cata';
// alumnas [3] = 'Mar';
// alumnas [4] = 'Mica';
// alumnas [5] = 'Aldi';
// console.log('Índice 0:', alumnas[0]);
// console.log('Índice 1:', alumnas[1]);
// console.log('Índice 2:', alumnas[2]);
// console.log('Índice 3:', alumnas[3]);
// console.log('Índice 4:', alumnas[4]);
// console.log('Índice 5:', alumnas[5]);


// EJERCICIO 06
// var discoNevermind = [
//     'Smells Like Teen Spirit',
//     'In Bloom',
//     'Come As You Are',
//     'Immodium',
//     'Lithium',
//     'Polly',
//     'Territorial Pissings',
//     'Drain You',
//     'Lounge Act',
//     'Pay To Play',
//     'On a Plain',
//     'Endless, Nameless'];
//     discoNevermind[3] = 'Breed';
//     discoNevermind[9] = 'Stay Away';
//     discoNevermind[11] = 'Something in the Way';
//     console.log(discoNevermind);
    

// EJERCICIO 07
// var pelis = ['Superman','Batman Begins','The Dark Knight','Man of Steel','The Dark Knight Rises','The Batman'];
// var pelisBatman = [pelis[1],pelis[2],pelis[4],pelis[5]];
// var pelisSuperman = [pelis[0],pelis[3]];
// console.log(pelisBatman);
// console.log(pelisSuperman);


// EJERCICIO 08
// var etiquetasHtml = ['<div>', '<header>', '<p>', '<h1>', '<img>'];
// console.log(etiquetasHtml[1].toUpperCase());
// console.log(etiquetasHtml[4].toLowerCase());
// console.log(etiquetasHtml.length);


// EJERCICIO 09
// var ganadorasRupaul = ['BeBe Zahara Benet',
// 'Tyra Sanchez',
// 'Raja',
// 'Sharon Needles',
// 'Jinkx Monsoon',
// 'Bianca del Rio',
// 'Violet Chachki',
// 'Bob the Drag Queen',
// 'Sasha Velour',
// 'Aquaria'];
// console.log('Primera ganadora:', ganadorasRupaul[0]);
// console.log('Última ganadora:', ganadorasRupaul[ganadorasRupaul.length-1]);


// EJERCICIO 10
// if (playlistNirvana > playlistFoo) {
//     console.log('La playlist de Nirvana tiene más canciones que la de los Foo Fighters.');
// } else {
//     console.log('La playlist de los Foo tiene más canciones que la de Nirvana.');
// }


// EJERCICIO 11
// var frutas = ['Banana','Manzana'];
// console.log(frutas);
// frutas.shift();
// frutas.unshift('Frutilla');
// console.log(frutas);


// EJERCICIO 12
// var concreteAndGold = [];
// concreteAndGold.unshift('T-Shirt','Run','Make It Right','The Sky Is a Neighborhood','La Dee Da','Dirty Water','Arrows',
// 'Happy Ever After (Zero Hour)','Sunday Rain','The Line','Concrete and Gold');
// console.log('Primera canción:',concreteAndGold[0], 'y última:',concreteAndGold[10]);
// console.log(concreteAndGold);


// EJERCICIO 13
// var concreteAndGold = [];
// concreteAndGold.unshift('Concrete And Gold','The Line','Sunday Rain','Happy Ever After (Zero Hour)','Arrows','Dirty Water','La Dee Da',
// 'The Sky Is a Neighborhood','Make It Right','Run','T-Shirt');
// console.log('Primera canción:',concreteAndGold[0], 'y última:',concreteAndGold[10]);
// console.log(concreteAndGold);


// EJERCICIO 14
// var numeros = [6, 1, 2, 3, 4, 5];
// numeros.shift();
// numeros.push(6);
// console.log(numeros);


// EJERCICIO 15
// var numeros = [6, 2, 3, 4, 5, 1];
// var primerNumero = numeros.shift();;
// var ultimoNumero = numeros.pop();;
// numeros.push(primerNumero);
// numeros.unshift(ultimoNumero);
// console.log(numeros);


// EJERCICIO 16
// var playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
// var playlistEscuchada = ['School'];
// playlistEscuchada.push(playlist.shift());
// console.log(playlist);
// console.log(playlistEscuchada);


// EJERCICIO 17
var playlist = ['Concrete and Gold','The Line','Sunday Rain','Happy Ever After (Zero Hour)',
'Arrows','Dirty Water','La Dee Da','The Sky Is a Neighborhood','Make It Right','Run','T-Shirt'];

for(var i = 0; i < playlist.length; i++) {
    console.log(playlist[i]);
}





































