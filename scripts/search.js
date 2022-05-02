// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar  from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

let url="https://masai-mock-api.herokuapp.com/news?q=tesla";

fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
    appenddata(res.articles)
    console.log(res)
})
.catch(function(err){
    console.log(err)
});


function appenddata(articles){
    articles.forEach(function(el){
        
         let div = document.createElement("div")
         div.addEventListener("click",function(){
             news(el)
         })
 
         let img = document.createElement("img")
         img.src = el.urlToImage
         img.setAttribute("class","img")

          div.append(img)
          results.append(div)

        })
    }