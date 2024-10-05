import UIManager from './ui/UIManager.js';

const uiManager = new UIManager();

// Elegir el formato del CV (ejemplo cronológico)
uiManager.elegirFormato('cronologico');

// Agregar datos
uiManager.agregarInformacionPersonal({
    nombre: 'Andrés Elizalde',
    contacto: 'andres@example.com'
});

uiManager.agregarExperienciaLaboral({
    titulo: 'Desarrollador',
    empresa: 'Tech Corp',
    fechaInicio: '2020-01-01',
    fechaFin: '2023-01-01'
});

uiManager.agregarEducacion({
    titulo: 'Ingeniero de Software',
    institucion: 'Universidad de la Innovación',
    fechaInicio: '2016-01-01',
    fechaFin: '2020-01-01'
});

uiManager.agregarHabilidades(['JavaScript', 'React', 'Node.js']);
uiManager.agregarProyectos(['Proyecto 1', 'Proyecto 2']);
uiManager.agregarReferencias(['Juan Pérez', 'Ana Gómez']);

// Generar y mostrar el CV
const cvFinal = uiManager.generarCV();
console.log(cvFinal.mostrarCV());
