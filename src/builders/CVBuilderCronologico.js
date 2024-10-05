import CVBuilder from './CVBuilder.js';
import CV from '../components/CV.js';

class CVBuilderCronologico extends CVBuilder {
    constructor() {
        super();
        this.cv = new CV(); // Crea una nueva instancia de CV
    }

    setInformacionPersonal(informacionPersonal) {
        this.cv.informacionPersonal = informacionPersonal; // Asigna la información personal directamente
    }

    addExperienciaLaboral(experiencia) {
        // En un CV cronológico, la experiencia laboral se ordena por fechas
        this.cv.experienciaLaboral.push(experiencia);
        this.cv.experienciaLaboral.sort((a, b) => new Date(b.fechaInicio) - new Date(a.fechaInicio));
    }

    addEducacion(educacion) {
        // La educación también se ordena cronológicamente
        this.cv.educacion.push(educacion);
        this.cv.educacion.sort((a, b) => new Date(b.fechaInicio) - new Date(a.fechaInicio));
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

export default CVBuilderCronologico;