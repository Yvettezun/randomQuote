
function randomQuote(array){ //randomizes elements and returns an element of array 
    let index=Math.floor(Math.random()*array.length);
    return array[index];
   }

function generateOptions(object){ //displays authors and puts them into options for dropdown menu 
    let authors=[];

            object.forEach(element=>{
                if(!authors.includes(element.author)){ //if authors array does not have that author, add it to authors array
                    authors.push(element.author);
                }
            })
    let select=document.getElementById('authors');
    authors.forEach(element=>{
        let option=document.createElement('option');
        option.value=element;
        option.text=element;
        select.appendChild(option);
    })
    }

function getSelectedAuthor(){ //get selected author of user 
        let selected=document.getElementById('authors').value;
        return selected;
    }

 function getQuote(jsonResponse){ //displays random quote of users choosing 
        let selectedAuthor=getSelectedAuthor();
        
        let arr=[];
        jsonResponse.forEach(element=>{
            if(selectedAuthor===element.author){
                arr.push(element);
                
                
            }
        })
        
        let quote1=randomQuote(arr)
        document.getElementById('authorQuote').innerText=`"${quote1.text}"`;
        document.getElementById('authorName').innerText=`-${quote1.author}`;
        
        
        }

   export {randomQuote,generateOptions, getSelectedAuthor, getQuote}; 