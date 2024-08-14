
let valorKg = 0;
let kgPorHora = 0; 
let kgTotales = 0; 
let movimientos = []; 


const userNameSpan = document.getElementById('usuario');
const kgTotalesSpan = document.getElementById('kg-totales');
const movimientosDiv = document.getElementById('movimientos');
const operacionesDiv = document.getElementById('operaciones');
const formularioOperacionDiv = document.getElementById('formulario-operacion');
const valorInputDiv = document.getElementById('valorIn');

document.getElementById('guardar-nombre').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    if (nombre !== "") {
        userNameSpan.textContent = nombre;
        document.getElementById('usuario').style.display = 'none';
        valorInputDiv.style.display = 'block';
    }
});

document.getElementById('guardar-valores').addEventListener('click', () => {
    valorKg = parseFloat(document.getElementById('valorKg').value);
    kgPorHora = parseFloat(document.getElementById('kgPorHora').value);
    if (valorKg > 0 && kgPorHora > 0) {
        valorInputDiv.style.display = 'none';
        operacionesDiv.style.display = 'block';
    }
});

document.getElementById('botonIngreso').addEventListener('click', () => {
    mostrarFormulario('ingreso');
});

document.getElementById('botonEgreso').addEventListener('click', () => {
    mostrarFormulario('egreso');
});

function mostrarFormulario(tipo) {
    formularioOperacionDiv.style.display = 'block';
    formularioOperacionDiv.innerHTML = `
        <p>Seleccione la opción deseada:</p>
        <p>1 - Por horas trabajadas</p>
        <p>2 - Por kilos</p>
        <p>3 - Por pesos</p>
        <input type="text" id="opcion" placeholder="Ingrese 1, 2 o 3">
        <input type="text" id="valor" placeholder="Ingrese el valor">
        <button id="realizar-operacion">Realizar Operación</button>
    `;

    document.getElementById('realizar-operacion').addEventListener('click', () => {
        const operacion = document.getElementById('opcion').value;
        const valor = parseFloat(document.getElementById('valor').value);

        if ((operacion === '1' || operacion === '2' || operacion === '3') && valor > 0) {
            realizarOperacion(tipo, operacion, valor);
            formularioOperacionDiv.style.display = 'none';

        }
    });
}

function realizarOperacion(tipo, operacion, valor) {
    let kg;
    switch (operacion) {
        case '1': 
            kg = valor * kgPorHora;
            break;
        case '2': 
            kg = valor;
            break;
        case '3': 
            kg = valor / valorKg;
            break;
        default:
            return;
    }

    if (tipo === 'ingreso') {
        kgTotales += kg;
        movimientos.push({ tipo: 'Ingreso', kg });
    } else {
        kgTotales -= kg;
        movimientos.push({ tipo: 'Egreso', kg });
    }

    actualizarMovimientos();
}
function actualizarMovimientos() {
    kgTotalesSpan.textContent = kgTotales;
    movimientosDiv.innerHTML = "";
    movimientos.forEach(movimiento => {
        movimientosDiv.innerHTML += `<div>${movimiento.tipo}: ${movimiento.kg} kg</div>`;
    });
}