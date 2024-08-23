//console.log("Hello2");


let row = document.getElementById("card-row");
let cardBody ;





fetch ( "https://restcountries.com/v3.1/all" )
. then((res)=>res.json())
. then (data=>console.log(data))
. then (data=>{
    
   
    
    data.forEach(element => { 


cardBody+=
`

<div class="col-lg-3">
<div class="card" style="width: 18rem;">

    <img src="${element.flags.png}" class="card-img-top" alt="${element.name.common}">
    <div class="card-body">
        <h5 class="card-title">  ${element.name.official}</h5>
        <p class="card-text"> ${element.flags.alt}</p>
        <a href="${element.maps.googleMaps}" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
</div>

`

   console.log(element.name.common);
    
});


row.innerHTML=cardBody;
})