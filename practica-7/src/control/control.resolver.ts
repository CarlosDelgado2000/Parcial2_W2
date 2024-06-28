import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ControlService } from './control.service';
import { Control } from './entities/control.entity';
import { CreateControlInput } from './dto/create-control.input';
import { UpdateControlInput } from './dto/update-control.input';

@Resolver(() => Control)
export class ControlResolver {
  constructor(private readonly controlService: ControlService) {}

  @Mutation(() => Control)
  createControl(@Args('createControlInput') createControlInput: CreateControlInput) {
    return this.controlService.create(createControlInput);
  }

  @Query(() => [Control], { name: 'controles' })
  findAll(@Args('estado', { type: () => String, nullable: true }) estado: string) {
    return this.controlService.findAll(estado);
  }

  @Query(() => Control, { name: 'control' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.controlService.findOne(id);
  }

  @Mutation(() => Control)
  updateControl(@Args('updateControlInput') updateControlInput: UpdateControlInput) {
    return this.controlService.update(updateControlInput.id, updateControlInput);
  }

  @Mutation(() => Control)
  removeControl(@Args('id', { type: () => Int }) id: number) {
    return this.controlService.remove(id);
  }
}
