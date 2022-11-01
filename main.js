const button=document.getElementById('button');
button.addEventListener('click',generateQuote);


function randomQuote(array){
 let index=Math.floor(Math.random()*array.length);
 return array[index];
}

async function generateQuote(){
    
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

onload=generateQuote; //once page loads, automatically calls function so that when you load the page, you dont have to click the button to start
//no wait for user to click button to display quote, will execute function one time automatically so that a quote will be onscreen 