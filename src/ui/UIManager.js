import GeneradorCV from '../components/GeneradorCV.js';
import CVBuilderCronologico from '../builders/CVBuilderCronologico.js';
import CVBuilderFuncional from '../builders/CVBuilderFuncional.js';

class UIManager {
    constructor() {
        this.datosCV = {
            informacionPersonal: {},
            experienciaLaboral: [],
            educacion: [],
            habilidades: [],
            proyectos: [],
            referencias: []
        };
    }

    elegirFormato(formato) {
        switch (formato) {
            case 'cronologico':
                this.builder = new CVBuilderCronologico();
                break;
            case 'funcional':
                this.builder = new CVBuilderFuncional();
                break;
            default:
                throw new Error("Formato no soportado");
        }
    }

    agregarInformacionPersonal(datos) {
        this.datosCV.informacionPersonal = datos;
    }

    agregarExperienciaLaboral(experiencia) {
        this.datosCV.experienciaLaboral.push(experiencia);
    }

    agregarEducacion(educacion) {
        this.datosCV.educacion.push(educacion);
    }

    agregarHabilidades(habilidades) {
        this.datosCV.habilidades = habilidades;
    }

    agregarProyectos(proyectos) {
        this.datosCV.proyectos = proyectos;
    }

    agregarReferencias(referencias) {
        this.datosCV.referencias = referencias;
    }

    generarCV() {
        const generador = new GeneradorCV(this.builder);
        return generador.construirCV(this.datosCV);
    }
}

export default UIManager;
