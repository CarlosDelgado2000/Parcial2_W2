import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Control } from 'src/control/entities/control.entity';

@ObjectType()
@Entity({name: 'paciente'})
export class Paciente {

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field(() => String)
  nombre: string;

  @Field(() => String)
  identificacion: string;

  @OneToMany(
    () => Control,
    control => control.paciente
  )
  control: Control[];
  controles: any;
}
