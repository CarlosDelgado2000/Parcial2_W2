import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Control } from '../../control/entities/control.entity';

@ObjectType()
@Entity({ name: 'signo_vital' })
export class SignoVital {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field(() => String)
  @Column()
  descripcion: string;

  @Field(() => String)
  @Column()
  minimo: string;

  @Field(() => String)
  @Column()
  maximo: string;

  @Field(() => String)
  @Column()
  estado: string;

  @OneToMany(
    () => Control,
    control => control.signo_vital,
  )
  @Field(() => [Control])
  controles: Control[];
}
