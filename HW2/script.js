const searchField = document.getElementById("searchField");
const searchButton = document.getElementById("button-search")
const searchResults = document.getElementById("metallicaSection")

const url =`https://striveschool-api.herokuapp.com/api/deezer/search?q=`
const buttonAll = document.getElementById("All")
const url2 =`https://striveschool-api.herokuapp.com/api/deezer/search?q=''`


const searchArtist = ()=>{
 const searchName = searchField.value
 const urlName =`${url}q=${searchName}`   
 /// qui crea il loding
 return  fetch(urlName)
 .then( data => data.json() )
 .then( data => { 
  console.log(data)
// qui rimuovi

  searchResults.innerHTML = "" 
cradCard(data.data[0])
})

}

const cradCard = (dataCard)=>{
  const boxCard = document.createElement("div");
   boxCard.setAttribute("class","card m-1");
   const Img = document.createElement("img");
   Img.setAttribute("class","card-img-top w-100");
   Img.src = dataCard.album.cover_medium;
    const boxtext = document.createElement("div");
    boxtext.setAttribute("class","card-body");
    const titleAlbun = document.createElement("h5"); 
    titleAlbun.setAttribute("class","Card-title");
    titleAlbun.innerText = dataCard.title
    const description = document.createElement("p");
    description.setAttribute("class","card-text");
    description.innerText = dataCard.type
    boxtext.append(titleAlbun, description)
    boxCard.append(Img, boxtext)
    searchResults.append(boxCard)
} 



  const searchAll = ()=>{
    
     
    return  fetch(url2)
    .then( data => data.json() )
    .then(data => { 
     console.log(data)
     searchResults.innerHTML = "" 

     for(let i = 0; i< data.data.length ; i++)
      {
       cradCard(data.data[i])
 
      }
    
    
    
    })
  
   
  
   
   }
   buttonAll.addEventListener("click" ,searchAll)