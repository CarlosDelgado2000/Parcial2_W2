"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatepacienteDto = void 0;
class UpdatepacienteDto {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    get values() {
        const returnObj = {};
        if (this.nombre)
            returnObj.nombre = this.nombre;
        return returnObj;
    }
    static create(props) {
        const { id, nombre } = props;
        let newNombre = nombre;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (nombre) {
            newNombre = nombre.toUpperCase();
            if (newNombre !== nombre) {
                return ['nombre must be uppercase'];
            }
        }
        return [undefined, new UpdatepacienteDto(id, nombre)];
    }
}
exports.UpdatepacienteDto = UpdatepacienteDto;
