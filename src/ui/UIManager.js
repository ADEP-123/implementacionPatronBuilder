import GeneradorCV from '../components/GeneradorCV.js';
import CVBuilderCronologico from '../builders/CVBuilderCronologico.js';
import CVBuilderFuncional from '../builders/CVBuilderFuncional.js';

class UIManager {
    constructor() {
        this.builder = null;
    }

    elegirFormato(formato) {
        if (formato === 'cronologico') {
            this.builder = new CVBuilderCronologico();
        } else if (formato === 'funcional') {
            this.builder = new CVBuilderFuncional();
        }
    }

    // Recoger la experiencia laboral del formulario
    recogerExperienciaLaboral() {
        const experiencias = [];
        const experienciaLaboralElements = document.querySelectorAll('.experienciaLaboral');

        experienciaLaboralElements.forEach((expElement) => {
            const titulo = expElement.children[0].value;
            const empresa = expElement.children[1].value;
            const fechaInicio = expElement.children[2].value;
            const fechaFin = expElement.children[3].value;

            experiencias.push({ titulo, empresa, fechaInicio, fechaFin });
        });

        return experiencias;
    }

    // Recoger la educación del formulario
    recogerEducacion() {
        const educacion = [];
        const educacionElements = document.querySelectorAll('.educacion');

        educacionElements.forEach((eduElement) => {
            const titulo = eduElement.children[0].value;
            const institucion = eduElement.children[1].value;
            const fechaInicio = eduElement.children[2].value;
            const fechaFin = eduElement.children[3].value;

            educacion.push({ titulo, institucion, fechaInicio, fechaFin });
        });

        return educacion;
    }

    // Recoger los proyectos del formulario
    recogerProyectos() {
        const proyectos = [];
        const proyectoElements = document.querySelectorAll('.proyecto');

        proyectoElements.forEach((proElement) => {
            const nombre = proElement.children[0].value;
            proyectos.push({ nombre });
        });

        return proyectos;
    }

    // Recoger las referencias del formulario
    recogerReferencias() {
        const referencias = [];
        const referenciaElements = document.querySelectorAll('.referencia');

        referenciaElements.forEach((refElement) => {
            const nombre = refElement.children[0].value;
            referencias.push({ nombre });
        });

        return referencias;
    }

    // Generar el CV usando el builder seleccionado
    generarCV(datos) {
        // Verificar si se ha seleccionado un builder
        if (!this.builder) {
            throw new Error("No se ha seleccionado un formato de CV.");
        }

        const generador = new GeneradorCV(this.builder);

        // Añadir las diferentes secciones al CV
        this.builder.setInformacionPersonal(datos.informacionPersonal); 

        datos.experienciaLaboral.forEach(exp => {
            this.builder.addExperienciaLaboral(exp); 
        });

        datos.educacion.forEach(edu => {
            this.builder.addEducacion(edu); 
        });

        this.builder.addHabilidades(datos.habilidades); 
        datos.proyectos.forEach(pro => {
            this.builder.addProyectos(pro); 
        });

        datos.referencias.forEach(ref => {
            this.builder.addReferencias(ref); 
        });

        // Generar y retornar el CV final
        return generador.construirCV(datos);
    }


}

export default UIManager;
