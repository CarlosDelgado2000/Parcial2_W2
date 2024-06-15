"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatepacienteDto = void 0;
class CreatepacienteDto {
    constructor(nombre, identificacion) {
        this.nombre = nombre;
        this.identificacion = identificacion;
    }
    static create(props) {
        const { nombre, identificacion } = props;
        if (!nombre)
            return ['Se requiere nombre de propiedad', undefined];
        if (!identificacion)
            return ['Se requiere la identificacion de propiedad', undefined];
        return [undefined, new CreatepacienteDto(nombre, identificacion)];
    }
}
exports.CreatepacienteDto = CreatepacienteDto;
