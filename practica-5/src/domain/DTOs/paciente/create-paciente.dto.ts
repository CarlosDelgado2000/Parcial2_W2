

export class CreatepacienteDto {

  private constructor(
    public readonly nombre : string,
    public readonly identificacion: string,
    
  ){}


  static create( props: {[key:string]: any} ): [string?, CreatepacienteDto?]  {

    const { nombre, identificacion } = props;

    if ( !nombre ) return ['Se requiere nombre de propiedad', undefined];
    if ( !identificacion ) return ['Se requiere la identificacion de propiedad', undefined];

  
    return [undefined, new CreatepacienteDto(nombre, identificacion)];
  }


}