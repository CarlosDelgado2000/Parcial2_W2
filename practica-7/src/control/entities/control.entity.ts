import { Optional } from '@nestjs/common';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { SignoVital } from 'src/signo-vital/entities/signo-vital.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'control' })
export class Control {

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  @Optional()
  @Column()
  id_paciente: number;

  @Field(() => Int)
  @Column()
  id_signo_vital: number;

  @Field(() => Date)
  @Column()
  fecha: Date;

  @Field(() => Int)
  @Column()
  hora: number;

  @Field(() => Int)
  @Column()
  valor: number;

  @Field(() => String)
  @Column()
  estado: string;

  @ManyToOne(
    () => Paciente,
    paciente => paciente.control,
    {eager: true}
  )
  @JoinColumn({ name: 'id_paciente' })
  paciente: Paciente;

  @ManyToOne(
    () => SignoVital,
    signoVital => signoVital.control,
    {eager: true}
  )
  @JoinColumn({ name: 'id_signo_vital' })
  signo_vital: SignoVital;
}
