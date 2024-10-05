import CVBuilder from './CVBuilder.js';
import CV from '../components/CV.js';

class CVBuilderFuncional extends CVBuilder {
    constructor() {
        super();
        this.cv = new CV();
    }

    setInformacionPersonal(informacionPersonal) {
        this.cv.setInformacionPersonal(informacionPersonal);
    }

    addExperienciaLaboral(experiencia) {
        // En un CV funcional, la experiencia laboral no se ordena cronológicamente.
        this.cv.addExperienciaLaboral(experiencia);
    }

    addEducacion(educacion) {
        this.cv.addEducacion(educacion);
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

export default CVBuilderFuncional;
