import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '"Hola, le saluda el futuro Ing. Carlos Delgado."';
  }
}
