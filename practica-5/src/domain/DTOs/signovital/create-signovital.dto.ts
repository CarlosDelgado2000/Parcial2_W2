

export class CreatesignovitalDto {

  private constructor(
    public readonly descripcion: string,
    public readonly minimo: Date = new Date(),
    public readonly maximo: Date= new Date(),

  ){}


  static create( props: {[key:string]: any} ): [string?, CreatesignovitalDto?]  {

    const { descripcion } = props;

    if ( !descripcion ) return ['Nombre property is required', undefined];

  
    return [undefined, new CreatesignovitalDto(descripcion)];
  }


}