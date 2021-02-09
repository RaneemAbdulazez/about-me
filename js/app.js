'use strict';

let userName=prompt('What\'s you name ');
let result=0;

alert('okay '+userName+' let\'s play a gussing game about me!');
alert('at the end of the game I will calculate how much you know me in 100%');





// ask about COLOR
let color=prompt('my favourite color is blue ?','answer with yes or no');
color=color.toLowerCase();


if (color.toLocaleLowerCase()=='yes' || color=='y' || color=='yea'){

    result=result+20;
    alert('that is true');

}
else {
    alert('Not really');
}






// ask about CORONA
let corona=prompt('am I afraid of corona virus?');
corona=corona.toLowerCase();

if (corona=='yes' || corona=='y' || corona=='yea'){

    result=result+20;
    alert('that is true');

}
else {
    alert('Not really');
}


// ask about PETS 
let pets=prompt('Do I love pets?');
pets=pets.toLowerCase();


if (pets=='no' || pets=='n' || pets=='nope'){

    result=result+20;
    
    alert('that is true');
}
else{
    alert('Not really');
}


// ask about FOOD
let food=prompt('am I in Love with food ?');
food=food.toLowerCase();

if (food=='yes' || food=='y' || food=='yea'){

    result=result+20;
    
    alert('that is true');
}
else{
    alert('Not really');
}


// ask about going out 
let out=prompt('do I cancel going out alot ?');
out=out.toLowerCase();

if (out=='yes' || out=='y' || out=='yea'){

    result=result+20;
    
    alert('that is true');
}
else{
    alert('Not really');
}


result=result+'%';
alert('you know me '+result+' thanks for playing');


