class CV {
    constructor() {
        this.informacionPersonal = null;
        this.experienciaLaboral = [];
        this.educacion = [];
        this.habilidades = [];
        this.proyectos = [];
        this.referencias = [];
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
