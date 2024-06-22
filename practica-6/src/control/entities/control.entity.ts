import { Paciente } from "src/paciente/entities/paciente.entity";
import { SignoVital } from "src/signo_vital/entities/signo_vital.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Control {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_paciente: Number;

    @Column()
    id_signo_vital: Number;

    @Column({ type: 'timestamp'})
    fecha: Date;

    @Column({ type: 'timestamp'})
    hora: Date;

    @Column()
    valor: number;

    @Column('text')
    estado: string;

    @ManyToOne(
        () => Paciente,
        (paciente) => paciente.control
    )
    
    paciente?: Paciente;

    @ManyToOne(
        () => SignoVital,
        (SignoVital) => SignoVital.control
    )
    signovital?: SignoVital;
}
