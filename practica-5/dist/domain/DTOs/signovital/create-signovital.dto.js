"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatesignovitalDto = void 0;
class CreatesignovitalDto {
    constructor(descripcion, minimo = new Date(), maximo = new Date()) {
        this.descripcion = descripcion;
        this.minimo = minimo;
        this.maximo = maximo;
    }
    static create(props) {
        const { descripcion } = props;
        if (!descripcion)
            return ['Nombre property is required', undefined];
        return [undefined, new CreatesignovitalDto(descripcion)];
    }
}
exports.CreatesignovitalDto = CreatesignovitalDto;
