const search()=>{
    
    const searchbox = document.getElementById("search-items").value.toUpperCase();
    const storeitems= document.getElementById("special")
    const product = document.querySelectorAll(".box")
    const pname = document.getElementsByTagName("h2")


    for(var i= 0; i<= pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
           let textvalue =  match.textContent || match.innerHTML

           if(textvalue.toUpperCase().indexOf(searchbox)> -1){
            product[i].style.display = "";
           }
           else{
            product[i].style.display = "None";
           }
        }
    }
}