"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatecontrolDto = void 0;
class CreatecontrolDto {
    constructor(id_paciente, id_signo_vital, valor, fecha = new Date(), hora = new Date()) {
        this.id_paciente = id_paciente;
        this.id_signo_vital = id_signo_vital;
        this.valor = valor;
        this.fecha = fecha;
        this.hora = hora;
    }
    static create(props) {
        const { id_paciente, id_signo_vital, valor } = props;
        if (!id_paciente)
            return ['Nombre property is required', undefined];
        if (!id_signo_vital)
            return ['Nombre property is required', undefined];
        if (!valor)
            return ['Nombre property is required', undefined];
        return [undefined, new CreatecontrolDto(id_paciente, id_signo_vital, valor)];
    }
}
exports.CreatecontrolDto = CreatecontrolDto;
