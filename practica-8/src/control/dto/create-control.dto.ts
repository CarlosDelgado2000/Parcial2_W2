export class CreateControlDto {
    id: number;
    id_paciente: number;
    id_signo_vital: number;
    fecha: string;
    hora: string;
    valor: number;
    paciente: string;
    signovital: string;
}
