window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
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
            console.log(file);
        }
        else{
            alert("No file selected");
        }
    });
    about.addEventListener('clicked', (event)=>{
        
        document.getElementById('AboutMeHTML').style = "visibility:1"
    });
    home.addEventListener('click', ()=>{

    });
    contact.addEventListener('clicked', ()=>{

    });
});