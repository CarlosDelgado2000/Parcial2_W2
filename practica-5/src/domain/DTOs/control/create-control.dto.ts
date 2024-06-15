

export class CreatecontrolDto {

  private constructor(
    public readonly id_paciente: number,
    public readonly id_signo_vital: number,
    public readonly valor: number,
    public readonly fecha: Date = new Date(),
    public readonly hora: Date= new Date(),
  ){}


  static create( props: {[key:string]: any} ): [string?, CreatecontrolDto?]  {

    const { id_paciente, id_signo_vital, valor } = props;

    if ( !id_paciente ) return ['Nombre property is required', undefined];
    if ( !id_signo_vital ) return ['Nombre property is required', undefined];
    if ( !valor ) return ['Nombre property is required', undefined];

  
    return [undefined, new CreatecontrolDto(id_paciente, id_signo_vital, valor)];
  }


}