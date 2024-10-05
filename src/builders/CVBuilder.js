import CV from '../components/CV.js'
class CVBuilder {
    constructor() {
        this.cv = new CV();
    }

    setInformacionPersonal(informacionPersonal) {
        this.cv.informacionPersonal = informacionPersonal;
    }

    addExperienciaLaboral(experiencia) {
        this.cv.experienciaLaboral.push(experiencia);
    }

    addEducacion(educacion) {
        this.cv.educacion.push(educacion);
    }

    addHabilidades(habilidades) {
        this.cv.habilidades.push(habilidades);
    }

    addProyectos(proyectos) {
        this.cv.proyectos.push(proyectos);
    }

    addReferencias(referencias) {
        this.cv.referencias.push(referencias);
    }

    getCV() {
        return this.cv;
    }
}


export default CVBuilder;
