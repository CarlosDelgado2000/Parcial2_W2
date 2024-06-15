import { Request, Response } from 'express';
import { prisma } from '../../data/posgre';
import { CreatesignovitalDto, UpdatesignovitalDto } from '../../domain/DTOs';
import { signovitalRepository } from '../../domain';


export class SignovitalController {

  //* Inyección de dependencia
  constructor(
    private readonly signovitalRepository: signovitalRepository,
  ) { }


  public getsignovital = async ( req: Request, res: Response ) => {
    const signovital = await this.signovitalRepository.getAll();
    return res.json( signovital );
  };

  public getsignovitalById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const signovital = await this.signovitalRepository.findById( id );
      res.json( signovital );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createsignovital = async ( req: Request, res: Response ) => {
    const [ error, createsignovitalDto ] = CreatesignovitalDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const todo = await this.signovitalRepository.create( createsignovitalDto! );
    res.json( todo );

  };

  public updatesignovital = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updatesignovitalDto ] = UpdatesignovitalDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedsignovital = await this.signovitalRepository.updateById( updatesignovitalDto! );
    return res.json( updatedsignovital );

  };


  public deletesignovital = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedTodo = await this.signovitalRepository.deleteById( id );
    res.json( deletedTodo );

  };

}