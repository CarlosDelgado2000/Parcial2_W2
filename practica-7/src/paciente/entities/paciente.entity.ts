import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Control } from 'src/control/entities/control.entity';

@ObjectType()
@Entity({name: 'paciente'})
export class Paciente {

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field(() => String)
  @Column()
  nombre: string;

  @Field(() => String)
  @Column()
  identificacion: string;

  @Field(() => String)
  @Column()
  estado: string;

  @OneToMany(
    () => Control,
    control => control.paciente,
    {cascade: true}
  )
  control: Control[];
}
