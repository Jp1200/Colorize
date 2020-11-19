window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');


    const btn = document.getElementById('btn');
    btn.addEventListener('click', ()=>{
        console.log("clicked")
        alert("Photo sent to server")
    });
});