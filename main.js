import {randomQuote,generateOptions,getQuote} from './app.js'; //import methods


const button=document.getElementById('button');
button.addEventListener('click',generateQuote);//once clicked generateQuote



async function generateQuote(){ //display a random quote
    
    const url="https://type.fit/api/quotes";
    try{
        let response=await fetch(url);
        if(response.ok){
            const jsonResponse=await response.json();//extracts object from response and turn it to json object 
            let quoteArr=randomQuote(jsonResponse);
            document.getElementById("quote").innerText=`"${quoteArr.text}"`;
            document.getElementById("author").innerText=`-${quoteArr.author}`;
        }
        else{
            throw new Error('it failed to fetch ');
        }

    }catch(error){
        console.log(error);
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let authorBtn=document.getElementById('generateQuotes'); 
authorBtn.addEventListener('click',getAuthors); //once clicked generate getAuthors

async function getAuthors(){
    const url="https://type.fit/api/quotes"
    fetch(url)
    try{
        let response= await fetch(url);
        if(response.ok){
            let jsonResponse= await response.json();
            
            generateOptions(jsonResponse);//displays options of all authors in api available
            getQuote(jsonResponse);//calls getQuote- displays random quore of a user selected author 
        }
        else{
            throw new Error('oops! Something went wrong :(');
        }

    } catch(error){
        console.log(error);
    }
}


onload=getAuthors;
// onload=getAuthors;//once page loads, automatically calls function so that when you load the page, you dont have to click the button to start
//no wait for user to click button to display quote, will execute function one time automatically so that a quote will be onscreen 




