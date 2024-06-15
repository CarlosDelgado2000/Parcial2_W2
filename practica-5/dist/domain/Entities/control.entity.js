"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controlEntity = void 0;
class controlEntity {
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
        return new controlEntity(id, nombre);
    }
}
exports.controlEntity = controlEntity;
