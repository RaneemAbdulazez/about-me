// As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more
//  about the site owner.




'use strict';

let userName = prompt('What\'s you name ');
let result = 0;

alert('okay ' + userName + ' let\'s play a gussing game about me!');
alert('at the end of the game I will calculate how much you know me in 100%');


// ask about COLOR
let color = prompt('my favourite color is blue ?', 'answer with yes or no');
color = color.toLowerCase();


if (color.toLocaleLowerCase() == 'yes' || color == 'y' || color == 'yea') {

    result = result + 10;
    alert('that is true');

}
else {
    alert('Not really');
}


// ask about CORONA
let corona = prompt('am I afraid of corona virus?');
corona = corona.toLowerCase();

if (corona == 'yes' || corona == 'y' || corona == 'yea') {

    result = result + 10;
    alert('that is true');

}
else {
    alert('Not really');
}


// ask about PETS 

let pets = prompt('Do I love pets?');
pets = pets.toLowerCase();


if (pets == 'no' || pets == 'n' || pets == 'nope') {

    result = result + 10;

    alert('that is true');
}
else {
    alert('Not really');
}


// ask about FOOD
let food = prompt('am I in Love with food ?');
food = food.toLowerCase();

if (food == 'yes' || food == 'y' || food == 'yea') {

    result = result + 10;

    alert('that is true');
}
else {
    alert('Not really');
}


// ask about going out 
let out = prompt('do I cancel going out alot ?');
out = out.toLowerCase();

if (out == 'yes' || out == 'y' || out == 'yea') {

    result = result + 10;

    alert('that is true');
}
else {
    alert('Not really');
}




// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.



for (let i = 1; i <= 4; i++) {
    let age = prompt('guess how old I am ? you have 4 attempts');
    age = Number(age);



    if (age <= 23) {
        alert('that\'s too LOW try again');
        if (i == 4) {
            alert('your attemps are finished my age is 24 yeas!');
        }

        continue;

    }
    else if (age >= 25) {
        alert('that\'s too HIGH try again');
        if (i == 4) {
            alert('your attemps are finished my age is 24 yeas!');

        }
        continue;
    }



    else if (age == 24) {
        alert('that\'s right');
        result=result+10
        break;


    }

}


// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.


for(let x=0;x<6;x++){
    alert('I lived in three different contries guess one of them'); 
    let contries=['SYRIA','JORDAN','KSA'];
    
    let userGuess=prompt('please guess a contry');
        userGuess= userGuess.toUpperCase();
        let f=contries.indexOf(userGuess);
        // console.log(f);
        if(f!=-1){
            alert('that\'s right here are the contiries I lived in \n'+contries.join("\n"));
            result=result+10;
            break;
        }
        while(f==-1){
            if(x==5){
                alert('here are the contires I lived in \n '+contries.join("\n"));
                
                break;
            }
            else{
            alert('that\'s not true try again');
            break;
        }
            
            }
        }
        





result=result/70*100;
result=result+'%';
alert('you know me '+result+' thanks for playing');


