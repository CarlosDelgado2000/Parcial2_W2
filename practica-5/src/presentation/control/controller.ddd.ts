import { Request, Response } from 'express';
import { prisma } from '../../data/posgre';
import { CreatecontrolDto, UpdatecontrolDto } from '../../domain/DTOs';
import { controlRepository } from '../../domain';


export class controlcontroller {

  //* Inyección de dependencia
  constructor(
    private readonly controlRepository: controlRepository,
  ) { }


  public getcontroles = async ( req: Request, res: Response ) => {
    const controles = await this.controlRepository.getAll();
    return res.json( controles );
  };

  public getcontrolById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const control = await this.controlRepository.findById( id );
      res.json( control );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createcontrol = async ( req: Request, res: Response ) => {
    const [ error, createcontrolDto ] = CreatecontrolDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const todo = await this.controlRepository.create( createcontrolDto! );
    res.json( todo );

  };

  public updatecontrol = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updatecontrolDto ] = UpdatecontrolDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedcontrol = await this.controlRepository.updateById( updatecontrolDto! );
    return res.json( updatedcontrol );

  };


  public deletecontrol = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedTodo = await this.controlRepository.deleteById( id );
    res.json( deletedTodo );

  };



}