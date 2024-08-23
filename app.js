
console.log("Hello");

let tblCountries = document.getElementById("tblCountries");
let tableBody = 
` <tr>
        <td>NAME</td>
        <td>FLAG</td>
        </tr>`;





fetch ( "https://restcountries.com/v3.1/all" )
. then((res)=>res.json())
//. then (data=>console.log(data))
. then (data=>{
    
   
    
    data.forEach(element => { 
        
        tableBody+=`
        <tr>
        <td>
                        <h1>${element.name.common}</h1> <br>
                        <p>Official Name : ${element.name.official}</p>
                        <p>Region : ${element.region} </p>
                        <p>Population : ${element.population} </p>
                        <p>TimeZone : ${element.timezones} </p>
                 
                        <a class="btn btn-danger" href="${element.maps.googleMaps}">Go To Map</a>
       
        </td> 

        <td><img src="${element.flags.png}" alt="Flag of ${element.name.common}" width="300"></td>
        </tr>`

   // console.log(element.name.common);
    
});

tblCountries.innerHTML=tableBody;
})




function searchCountry(){

    let userInput = document.getElementById("txtInput").value;
   // console.log(userInput);


    let flagImg = document.getElementById("flagImg");
    let name = document.getElementById("name");
    let officialName = document.getElementById("officialName");
    let region = document.getElementById("region");
    let population = document.getElementById("population");




    fetch(`https://restcountries.com/v3.1/name/${userInput}`)
    .then(res=>res.json())
   // .then(data=> console.log(data))


    .then(data=>{
        data.forEach(obj=>{
           // console.log(obj);
            
            flagImg.src=obj.flags.png
            name.innerText=obj.name.common
            officialName.innerText=obj.name.official

            region.innerText=obj.region;
            population.innerText=obj.population
        })
    })
}