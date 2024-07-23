
let valorKg = 0;
let kgPorHora = 0;
let continuar = true;

const ingresarValorKg = () => {
    valorKg = parseFloat(prompt('Ingrese el valor actual del kilo de novillo:'));
};

const ingresarKgPorHora = () => {
    kgPorHora = parseFloat(prompt('Ingrese cuántos kilos de novillo cobra por hora:'));
};

const ejecutarPrograma = () => {
    while (continuar) {
        const operacion = prompt('¿Qué operación desea realizar?\n1 - Cargar\n2 - Sacar\n3 - Salir');
        
        switch (operacion) {
            case '1':
                cargar();
                break;
            case '2':
                sacar();
                break;
            case '3':
                continuar = false;
                alert('saluditos crodiales!');
                break;
            default:
                alert('Opción no válida. Debes colocar 1, 2 o 3');
        }
    }
};

const cargar = () => {
    const opcionCargar = prompt('¿Qué desea cargar?\n1 - Por kilo de novillo\n2 - Por pesos\n3 - Por horas trabajadas');
    
    switch (opcionCargar) {
        case '1':
            cargarPorKilo();
            break;
        case '2':
            cargarPorPesos();
            break;
        case '3':
            cargarPorHoras();
            break;
        default:
            alert('Opción no válida. Por favor, ingrese 1, 2 o 3.');
    }
};

const sacar = () => {
    const opcionSacar = prompt('¿Qué desea sacar?\n1 - Kilos de novillo\n2 - Por Pesos\n3 - Horas de trabajo');
    
    switch (opcionSacar) {
        case '1':
            sacarPorKilos();
            break;
        case '2':
            sacarPorPesos();
            break;
        case '3':
            sacarPorHoras();
            break;
        default:
            alert('Opción no válida. Ingrese 1, 2 o 3.');
    }
};

const cargarPorKilo = () => {
    let kgCargar = parseFloat(prompt('Ingrese cuántos kilos de novillo quiere cargar:'));
    let horasAnotadas = kgCargar / kgPorHora;
    let pesosCobrados = kgCargar * valorKg;
    alert('Cargaste ' + kgCargar.toFixed(2) + ' kg de novillo.\n Equivalentes:\nHoras trabajadas: ' + horasAnotadas.toFixed(2) + '\n Pesos: $' + pesosCobrados.toFixed(2));
};

const cargarPorPesos = () => {
    let pesosCargados = parseFloat(prompt('Ingrese cuántos pesos desea cargar:'));
    let kgAnotar = pesosCargados / valorKg;
    let horasAnotadas = (pesosCargados / valorKg) / kgPorHora;
    alert('Cargaste ' + kgAnotar.toFixed(2) + ' kg de novillo. \nEquivalentes: \nPesos: ' + pesosCargados.toFixed(2) + '\nHoras Trabajadas: ' + horasAnotadas.toFixed(2));
};

const cargarPorHoras = () => {
    let horasTrabajadas = parseFloat(prompt('Ingrese cuántas horas trabajó:'));
    if (horasTrabajadas>8){
        alert('denuncialos por explotación')
    }
    let kgAnotar = horasTrabajadas * kgPorHora;
    let pesosCobrados = horasTrabajadas * kgPorHora * valorKg;
    alert('Cargaste ' + kgAnotar.toFixed(2) + ' kg de novillo.\nEquivalentes:\nHoras trabajadas: ' + horasTrabajadas.toFixed(2) + '\nPesos: $' + pesosCobrados.toFixed(2));
};

const sacarPorKilos = () => {
    let kgSacar = parseFloat(prompt('Ingrese cuántos kilos de novillo desea sacar:'));
    let pesosEquivalentes = kgSacar * valorKg;
    let horasEquivalentes = kgSacar / kgPorHora;
    alert('Sacaste ' + kgSacar.toFixed(2) + ' kg de novillo.\nEquivalentes:\nPesos: $' + pesosEquivalentes.toFixed(2) + '\nHoras trabajadas: ' + horasEquivalentes.toFixed(2));
};

const sacarPorPesos = () => {
    let pesosSacar = parseFloat(prompt('Ingrese cuántos pesos desea sacar:'));
    let kgEquivalentes = pesosSacar / valorKg;
    let horasEquivalentes = kgEquivalentes / kgPorHora;
    alert('Ha sacado $' + pesosSacar.toFixed(2) + '\nEquivalentes:\nKilos de novillo: ' + kgEquivalentes.toFixed(2) + '\nHoras trabajadas: ' + horasEquivalentes.toFixed(2));
};

const sacarPorHoras = () => {
    let horasSacar = parseFloat(prompt('Ingrese cuántas horas de trabajo desea sacar:'));
    let kgEquivalentes = horasSacar * kgPorHora;
    let pesosEquivalentes = horasSacar * valorKg * kgPorHora;
    alert('Ha sacado ' + horasSacar.toFixed(2) + ' horas de trabajo.\nEquivalentes:\nKilos de novillo: ' + kgEquivalentes.toFixed(2) + '\nPesos: $' + pesosEquivalentes.toFixed(2));
};

ingresarValorKg();
ingresarKgPorHora();

ejecutarPrograma();
