class CV {
    constructor() {
        this.informacionPersonal = null;
        this.experienciaLaboral = [];
        this.educacion = [];
        this.habilidades = [];
        this.proyectos = [];
        this.referencias = [];
    }

    setInformacionPersonal(informacionPersonal) {
        this.informacionPersonal = informacionPersonal;
    }

    addExperienciaLaboral(experiencia) {
        this.experienciaLaboral.push(experiencia);
    }

    addEducacion(educacion) {
        this.educacion.push(educacion);
    }

    addHabilidades(habilidades) {
        this.habilidades.push(habilidades);
    }

    addProyectos(proyectos) {
        this.proyectos.push(proyectos);
    }

    addReferencias(referencias) {
        this.referencias.push(referencias);
    }

    mostrarCV() {
        return {
            informacionPersonal: this.informacionPersonal,
            experienciaLaboral: this.experienciaLaboral,
            educacion: this.educacion,
            habilidades: this.habilidades,
            proyectos: this.proyectos,
            referencias: this.referencias,
        };
    }
}

export default CV;
