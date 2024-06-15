"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pacienteEntity = void 0;
class pacienteEntity {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    static fromObject(object) {
        const { id, nombre } = object;
        if (!id)
            throw 'Id is required';
        if (!nombre)
            throw 'nombre is required';
        let newNombre;
        if (nombre) {
            newNombre = nombre.toUpperCase();
            if (newNombre !== nombre) {
                throw 'Nombre must be uppercase';
            }
        }
        return new pacienteEntity(id, nombre);
    }
}
exports.pacienteEntity = pacienteEntity;
