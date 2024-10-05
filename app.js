import UIManager from './src/ui/UIManager.js';

document.addEventListener('DOMContentLoaded', () => {
    const uiManager = new UIManager();

    // Seleccionar el formato del CV
    document.getElementById('formato').addEventListener('change', function () {
        const formatoSeleccionado = this.value;
        uiManager.elegirFormato(formatoSeleccionado); 
    });

    // Agregar más campos de experiencia laboral
    const experienciaLaboralContainer = document.getElementById('experienciaLaboralContainer');
    const addExperienciaLaboralBtn = document.getElementById('addExperienciaLaboral');
    addExperienciaLaboralBtn.addEventListener('click', () => {
        const div = document.createElement('div');
        div.classList.add('mb-3', 'experienciaLaboral');
        div.innerHTML = `
            <input type="text" class="form-control" placeholder="Título del trabajo">
            <input type="text" class="form-control mt-2" placeholder="Empresa">
            <input type="date" class="form-control mt-2" placeholder="Fecha de inicio">
            <input type="date" class="form-control mt-2" placeholder="Fecha de fin">
        `;
        experienciaLaboralContainer.appendChild(div);
    });

    // Agregar más campos de educación
    const educacionContainer = document.getElementById('educacionContainer');
    const addEducacionBtn = document.getElementById('addEducacion');
    addEducacionBtn.addEventListener('click', () => {
        const div = document.createElement('div');
        div.classList.add('mb-3', 'educacion');
        div.innerHTML = `
            <input type="text" class="form-control" placeholder="Título académico">
            <input type="text" class="form-control mt-2" placeholder="Institución">
            <input type="date" class="form-control mt-2" placeholder="Fecha de inicio">
            <input type="date" class="form-control mt-2" placeholder="Fecha de fin">
        `;
        educacionContainer.appendChild(div);
    });

    // Agregar más proyectos
    const proyectosContainer = document.getElementById('proyectosContainer');
    const addProyectoBtn = document.getElementById('addProyecto');
    addProyectoBtn.addEventListener('click', () => {
        const div = document.createElement('div');
        div.classList.add('mb-3', 'proyecto');
        div.innerHTML = `
            <input type="text" class="form-control" placeholder="Nombre del Proyecto">
        `;
        proyectosContainer.appendChild(div);
    });

    // Agregar más referencias
    const referenciasContainer = document.getElementById('referenciasContainer');
    const addReferenciaBtn = document.getElementById('addReferencia');
    addReferenciaBtn.addEventListener('click', () => {
        const div = document.createElement('div');
        div.classList.add('mb-3', 'referencia');
        div.innerHTML = `
            <input type="text" class="form-control" placeholder="Nombre de la referencia">
        `;
        referenciasContainer.appendChild(div);
    });

    // Enviar el formulario y generar el CV
    const cvForm = document.getElementById('cvForm');
    const resultadoCV = document.getElementById('resultadoCV');
    
    cvForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Recolectar los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const contacto = document.getElementById('contacto').value;

        // Usar el UIManager para mostrar el CV
        const datosCV = {
            nombre,
            contacto,
            experienciaLaboral: uiManager.recogerExperienciaLaboral(),
            educacion: uiManager.recogerEducacion(),
            habilidades: document.getElementById('habilidades').value,
            proyectos: uiManager.recogerProyectos(),
            referencias: uiManager.recogerReferencias(),
        };

        try {
            const cv = uiManager.generarCV(datosCV);
            document.getElementById('resultadoCV').textContent = JSON.stringify(cv, null, 2);
        } catch (error) {
            alert(error.message);
        }
    });
});
