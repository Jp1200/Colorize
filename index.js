window.addEventListener('DOMContentLoaded', (event) => {
    

   
   
    console.log('DOM fully loaded and parsed');
    const elements = Array.prototype.slice.call(document.body.children).slice(3-1);
    console.log(elements)
    
    const about = document.getElementById('about');
    const home = document.getElementById('home');
    const contact = document.getElementById('contact');
    const file = document.getElementById('file');
    const btn = document.getElementById('btn');
    const mainDiv = document.getElementsByClassName("main-div")
    let selection;
    btn.addEventListener('click', (event)=>{

        event.preventDefault();
        if (file){
            console.log(file.src);
        }
        else{
            alert("No file selected");
        }
    });
    // handle link logic
    about.addEventListener('click', ()=>{
        document.getElementById("ContactHTML").style="visibility:hidden"
        document.getElementById('form').style="visibility:hidden"
        document.getElementById('AboutMeHTML').style = "visibility:1"
    });
    home.addEventListener('click', ()=>{
        document.getElementById("ContactHTML").style="visibility:hidden"
        document.getElementById("form").style="visibility:1"
        document.getElementById("AboutMeHTML").style = "visibility:hidden"
    });
    contact.addEventListener('click', ()=>{
        document.getElementById("ContactHTML").style="visibility:1"
        document.getElementById("form").style="visibility:hidden"
        document.getElementById("AboutMeHTML").style = "visibility:hidden"
    });


});