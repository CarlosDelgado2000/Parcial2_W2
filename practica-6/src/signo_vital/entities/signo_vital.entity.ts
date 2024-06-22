
import { Control } from "src/control/entities/control.entity";
import { Paciente } from "src/paciente/entities/paciente.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SignoVital {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column('text', {
        unique: false,
        default: true 
    
    })
    descripcion: string;

    @Column('text', {
        unique: false,
        default: true
     })
    minimo: string;

    @Column('text', { 
        unique: false,
        default: true
     })
    maximo: string;

    @Column('text')
    estado: string;

    @OneToMany(
        () => Control,
        (control) => control.signovital,
        {eager: true}
    )
    control?: Control;
}
