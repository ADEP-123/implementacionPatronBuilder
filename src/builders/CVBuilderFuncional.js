import CVBuilder from './CVBuilder.js';
import CV from '../components/CV.js';

class CVBuilderFuncional extends CVBuilder {
    constructor() {
        super();
        this.cv = new CV(); // Crea una nueva instancia de CV
    }

    setInformacionPersonal(informacionPersonal) {
        this.cv.informacionPersonal = informacionPersonal; // Asigna la información personal directamente
    }

    addExperienciaLaboral(experiencia) {
        // En un CV funcional, se agrega la experiencia laboral sin orden
        this.cv.experienciaLaboral.push(experiencia);
    }

    addEducacion(educacion) {
        // Agrega educación directamente
        this.cv.educacion.push(educacion);
    }

    addHabilidades(habilidades) {
        // Agrega habilidades directamente
        this.cv.habilidades.push(habilidades);
    }

    addProyectos(proyectos) {
        // Agrega proyectos directamente
        this.cv.proyectos.push(proyectos);
    }

    addReferencias(referencias) {
        // Agrega referencias directamente
        this.cv.referencias.push(referencias);
    }

    getCV() {
        return this.cv; // Devuelve el CV construido
    }
}

export default CVBuilderFuncional;

