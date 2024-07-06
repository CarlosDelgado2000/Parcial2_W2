import { Injectable } from '@nestjs/common';
import { CreateControlDto } from './dto/create-control.dto';
import { UpdateControlDto } from './dto/update-control.dto';
import { Socket } from 'socket.io';

// Ejemplo de datos iniciales para Control
const Control = [
  {
    id: 1,
    id_paciente: 1,
    id_signo_vital: 1,
    fecha:"2024-07-04",
    hora: "08:22",
    valor: 1,
    paciente: 'Anthony',
    signovital: "normal"
  },
  {
    id: 2,
    id_paciente: 2,
    id_signo_vital: 2,
    fecha: "2024-07-04",
    hora: "08:30",
    valor: 2,
    paciente: 'Adonis',
    signovital: "normal"
  }
];

interface User {
  id: string;
  nombre: string;
  isActive: boolean;
}

interface ConnectedClients {
  [id: string]: {
    socket: Socket;
    user: User;
  };
}

const users: User[] = [
  { id: '1', nombre: 'user1', isActive: true },
  { id: '2', nombre: 'user2', isActive: false },
  { id: '3', nombre: 'user3', isActive: true },
];

@Injectable()
export class ControlService {

  private connectedClients: ConnectedClients = {};

  registerClient(socket: Socket, userId: string) {
    const user = users.find(user => user.id === userId);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    if (!user.isActive) {
      throw new Error('El usuario no está activo');
    }
    const userConnections = Object.values(this.connectedClients).filter(
      client => client.user.id === user.id
    );

    if (userConnections.length >= 3) {
      throw new Error('Usuario ya tiene 3 conexiones activas');
    }

    this.connectedClients[socket.id] = {
      socket: socket,
      user: user
    };
  }

  removeClient(clienteId: string) {
    delete this.connectedClients[clienteId];
  }

  getConnectedClients(): string[] {
    return Object.keys(this.connectedClients);
  }

  getUserFullName(socketId: string): string {
    return this.connectedClients[socketId].user.nombre;
  }

  checkUserConnection(user: User) {
    for (const clientId of Object.keys(this.connectedClients)) {
      const connectedClient = this.connectedClients[clientId];
      if (connectedClient.user.id === user.id) {
        // throw new Error('User is already connected');
        connectedClient.socket.disconnect();
        break;
      }
    }
  }

  create(createControlDto: CreateControlDto) {
    Control.push(createControlDto);
    return createControlDto;
  }

  findAll() {
    return Control;
  }

  findOne(id: number) {
    return Control.find(control => control.id === id);
  }

  update(id: number, updateControlDto: UpdateControlDto) {
    const index = Control.findIndex(control => control.id === id);
    if (index !== -1) {
      Control[index] = { ...Control[index], ...updateControlDto };
      return `Control #${id} actualizado exitosamente`;
    }
    throw new Error(`No se encontró el control con id ${id}`);
  }

  remove(id: number) {
    const index = Control.findIndex(control => control.id === id);
    if (index !== -1) {
      Control.splice(index, 1);
      return `Control #${id} eliminado exitosamente`;
    }
    throw new Error(`No se encontró el control con id ${id}`);
  }
}
