import CVBuilder from './CVBuilder.js';
import CV from '../components/CV.js';

class CVBuilderCronologico extends CVBuilder {
    constructor() {
        super();
        this.cv = new CV();
    }

    setInformacionPersonal(informacionPersonal) {
        this.cv.setInformacionPersonal(informacionPersonal);
    }

    addExperienciaLaboral(experiencia) {
        // En un CV cronológico, la experiencia laboral se ordena por fechas.
        this.cv.addExperienciaLaboral(experiencia);
        this.cv.experienciaLaboral.sort((a, b) => new Date(b.fechaInicio) - new Date(a.fechaInicio));
    }

    addEducacion(educacion) {
        // La educación también se ordena cronológicamente.
        this.cv.addEducacion(educacion);
        this.cv.educacion.sort((a, b) => new Date(b.fechaInicio) - new Date(a.fechaInicio));
    }

    addHabilidades(habilidades) {
        this.cv.addHabilidades(habilidades);
    }

    addProyectos(proyectos) {
        this.cv.addProyectos(proyectos);
    }

    addReferencias(referencias) {
        this.cv.addReferencias(referencias);
    }

    getCV() {
        return this.cv;
    }
}

export default CVBuilderCronologico;
