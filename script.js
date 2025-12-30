//Mostrar y ocultar sidebar
function showsibar(){
    const slidebar = document.querySelector('.slidebar');
    slidebar.style.display = 'flex';
}

function closesibar(){
    const slidebar = document.querySelector('.slidebar');
    slidebar.style.display = 'none';
}

//Loading

window.addEventListener("load", () => {
    const loading = document.querySelector('.Loading');
    const load = document.querySelector('.lo');
    document.body.style.background = 'rgba(0, 0, 0, 0.6)';


    setTimeout(() => {
        loading.style.display = 'none';
        load.style.display = 'none';

        document.body.style.background = 'transparent';
    }, 2000);
});


function Load(){
    const loading = document.querySelector('.Loading');
    const load = document.querySelector('.lo'); 
    loading.style.display = 'block';
    load.style.display = 'block';
    document.body.style.background = 'rgba(0, 0, 0, 0.6)';
    setTimeout(() => {
        loading.style.display = 'none';
        load.style.display = 'none';

        document.body.style.background = 'transparent';
    }, 5000);
}

function LD(){
    const loading = document.querySelector('.Loading');
    const load = document.querySelector('.lo'); 
        document.body.style.background = 'rgba(0, 0, 0, 0.6)';
    loading.style.display = 'block';
    load.style.display = 'block';

    setTimeout(() => {
        loading.style.display = 'none';
        load.style.display = 'none';
        document.body.style.background = 'transparent';
    }, 1000);
}

