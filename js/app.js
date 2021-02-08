'use strict';

let userName=prompt('What\'s you name ');
alert('okay '+userName+' let\'s play a gussing game about me!');
alert('at the end of the game I will calculate how much you know me in 100%');

let color=prompt('my favourite color is blue ?');
let corona=prompt('am I afraid of corona virus?');
let pets=prompt('Do I love pets?');
let food=prompt('am I in Love with food ?');
let out=prompt('do I cancel going out alot ?');

let result=0;

color=color.toLowerCase();
corona=corona.toLowerCase();
pets=pets.toLowerCase();
food=food.toLowerCase();
out=out.toLowerCase();

if (color=='yes' || color=='y' || color=='yea'){

    result=result+20;
}
if (corona=='yes' || corona=='y' || corona=='yea'){

    result=result+20;
}
if (pets=='yes' || pets=='y' || pets=='yea'){

    result=result+20;
}

if (food=='yes' || food=='y' || food=='yea'){

    result=result+20;
}

if (out=='yes' || out=='y' || out=='yea'){

    result=result+20;
}

result=result+'%';
document.write('you know me '+result+' thanks for playing')

console.log(result);


