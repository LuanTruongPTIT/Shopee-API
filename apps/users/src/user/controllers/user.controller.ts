import {
  Body,
  Controller,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { EKafkaMessage } from '@libs/common/interfaces/kafka.interface';
import { UserDto } from '../database/entities/users.dto';
import { UserService } from '../services/users.service';
import { ResourceSerialization } from '@libs/infra/serialization/resource.serialization';
@Controller()
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @UseInterceptors(ResourceSerialization)
  @MessagePattern(EKafkaMessage.REQUEST_CREATE_USER)
  async createUser(@Body() data: UserDto): Promise<UserDto> {
    const streamId = data._id;
    return await this.usersService.createUser(streamId, data);
  }

  @MessagePattern(EKafkaMessage.REQUEST_VERIFY_EMAIL)
  async VerifyEmai(@Body() token: string): Promise<any> {
    console.log(token);
  }
}
