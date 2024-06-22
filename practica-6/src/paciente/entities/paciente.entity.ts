import { Control } from "src/control/entities/control.entity";
import { SignoVital } from "src/signo_vital/entities/signo_vital.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Paciente {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column('text', { unique: false })
    nombre: string;

    @Column('text', { unique: false })
    identificacion: string;

    @OneToMany(
        () => Control,
        (control) => control.paciente
    )
    control?: Control;
}
