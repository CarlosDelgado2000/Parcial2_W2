import { Request, Response } from 'express';
import { prisma } from '../../data/posgre';
import { CreatepacienteDto, UpdatepacienteDto } from '../../domain/DTOs';
import { pacienteRepository } from '../../domain';


export class pacientecontroller {

  //* Inyección de dependencia
  constructor(
    private readonly pacienteRepository: pacienteRepository,
  ) { }


  public getpacientes = async ( req: Request, res: Response ) => {
    const pacientes = await this.pacienteRepository.getAll();
    return res.json( pacientes );
  };

  public getpacienteById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const paciente = await this.pacienteRepository.findById( id );
      res.json( paciente );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createpaciente = async ( req: Request, res: Response ) => {
    const [ error, createpacienteDto ] = CreatepacienteDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const todo = await this.pacienteRepository.create( createpacienteDto! );
    res.json( todo );

  };

  public updatepaciente = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updatepacienteDto ] = UpdatepacienteDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedpaciente = await this.pacienteRepository.updateById( updatepacienteDto! );
    return res.json( updatedpaciente );

  };


  public deletepaciente = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedTodo = await this.pacienteRepository.deleteById( id );
    res.json( deletedTodo );

  };

}