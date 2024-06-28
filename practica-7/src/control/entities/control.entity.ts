import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { SignoVital } from 'src/signo-vital/entities/signo-vital.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'control' })
export class Control {

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field(() => Int)
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
    paciente => paciente.controles,
  )
  @Field(() => Paciente)
  paciente: Paciente;

  @ManyToOne(
    () => SignoVital,
    signoVital => signoVital.controles,
  )
  @Field(() => SignoVital)
  signo_vital: SignoVital;
}
