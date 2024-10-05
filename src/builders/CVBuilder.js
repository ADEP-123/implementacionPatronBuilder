import CV from '../components/CV.js'; 
class CVBuilder {
    constructor() {
        this.cv = new CV(); // Crear un objeto CV en el constructor
    }

    setInformacionPersonal(informacionPersonal) {
        throw new Error("Este método debe ser implementado");
    }

    // Métodos abstractos para agregar información
    addExperiencia(experiencia) {
        throw new Error("Este método debe ser implementado");
    }

    addEducacion(educacion) {
        throw new Error("Este método debe ser implementado");
    }

    addHabilidades(habilidades) {
        throw new Error("Este método debe ser implementado");
    }

    addProyectos(proyectos) {
        throw new Error("Este método debe ser implementado");
    }

    addReferencias(referencias) {
        throw new Error("Este método debe ser implementado");
    }

    getCV() {
        return this.cv; 
    }
}

export default CVBuilder;
