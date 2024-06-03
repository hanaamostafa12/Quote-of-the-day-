
var Quotes = [
    {author: 'Jim Rohn', 
     quote: 'Beware of what you become in pursuit of what you want.'
    },
    {author: 'Epictetus', 
     quote: 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {author: 'Frank Sinatra', 
     quote: 'The best revenge is massive success.'
    },
    {author: 'Wayne Gretzy', 
     quote: 'You miss 100% of the shots you don\'t take.'
    },
    {author: 'Nelson Mandela', 
     quote: 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {author: 'Elbert Hubbard', 
     quote: 'Do not take life too seriously. You will not get out alive.'
    },
];



function Quote() {
    var randomIndex = Math.floor(Math.random() * Quotes.length);
    var cartona = Quotes[randomIndex].quote;
    var cartona2 = Quotes[randomIndex].author;
    document.getElementById('demoOfQuote').innerHTML = cartona;
    document.getElementById('demoOfAuthor').innerHTML = cartona2;
}













// function addQuote(){
//     var randomIndex =Math.floor(Math.random() *Quotes.length );

//     var randomQuote = Quotes[randomIndex];

//     document.getElementById("demoOfQuote").innerHTML = randomQuote;
// }