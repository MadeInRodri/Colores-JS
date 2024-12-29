
function genHexAl()
{
    let digitos = '0123456789ABCDEF';
    let color = '#'

    for(let i = 0; i < 6; i++){
        let indiAleatorio = Math.floor(Math.random() * 16);
        color += digitos[indiAleatorio];
    }

    return color
}

function cambiarFondo(e)
{
    let texto = e.target.previousElementSibling;
    let color = texto.previousElementSibling;

    texto.innerText = genHexAl();
    color.style.backgroundColor = genHexAl();
}

const padre = document.querySelector('.grid');

function presionarBoton(e)
{
    if (e.target && e.target.tagName === 'BUTTON') 
    {
        cambiarFondo(e);  // Ejecuta el cambio de fondo
    }
}

// Delegación de eventos
padre.addEventListener('click', presionarBoton);

let colorCount = 2
function crearColor(){
    const contenedor = document.createElement('div');
    contenedor.classList.add('container');
    const color = document.createElement('div');
    color.classList.add('color');
    const titulo = document.createElement('h3');
    titulo.innerText = `Color ${colorCount}`;
    const boton = document.createElement('button');
    boton.innerText = 'Cambiar';

    const padre = document.querySelector('.grid');

    padre.appendChild(contenedor);
    contenedor.appendChild(color);
    contenedor.appendChild(titulo);
    contenedor.appendChild(boton);
    colorCount++;
}

const btnCrear = document.getElementById('btn-crear');
btnCrear.addEventListener('click',crearColor)


