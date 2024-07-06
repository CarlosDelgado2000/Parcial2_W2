import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { ControlService } from './control.service';
import { CreateControlDto } from './dto/create-control.dto';
import { UpdateControlDto } from './dto/update-control.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ControlGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly controlService: ControlService) {}

  async handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    try {
      // Validar el token
      await this.controlService.registerClient(client, token); 
    } catch (error) {
      client.disconnect();
      return;
    }
    this.wss.emit('clients-updated', this.controlService.getConnectedClients()); 
  }

  handleDisconnect(client: Socket) {
    this.controlService.removeClient(client.id); 
    this.wss.emit('clients-updated', this.controlService.getConnectedClients()); 
  }

  @SubscribeMessage('agregar-transaccion')
  create(@MessageBody() createControlDto: CreateControlDto) {
    const inserted = this.controlService.create(createControlDto); 
    this.wss.emit('newControl', this.findAll());
    return inserted;
  }

  @SubscribeMessage('consultar-activos')
  findAll() {
    return this.controlService.findAll(); 
  }
}
