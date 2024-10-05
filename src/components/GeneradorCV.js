class GeneradorCV {
    constructor(builder) {
        this.builder = builder;
    }

    construirCV(datos) {
        this.builder.setInformacionPersonal(datos.informacionPersonal);

        datos.experienciaLaboral.forEach(exp => {
            this.builder.addExperienciaLaboral(exp);
        });

        datos.educacion.forEach(edu => {
            this.builder.addEducacion(edu);
        });

        this.builder.addHabilidades(datos.habilidades);
        this.builder.addProyectos(datos.proyectos);
        this.builder.addReferencias(datos.referencias);

        return this.builder.getCV();
    }
}

export default GeneradorCV;
