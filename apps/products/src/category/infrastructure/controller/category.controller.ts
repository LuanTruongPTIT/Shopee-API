import { EKafkaMessage } from '@libs/common/interfaces';
import { Body, Controller } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { MessagePattern } from '@nestjs/microservices';
import { CreateCategoryCommand } from '../../application/command/create-category.command';
import { CreateCategorySerilization } from '@libs/common/serializations/product/create.category.serialization';
import { HelperIdManagementService } from '@libs/common/helper/services/helper.id.management.service';
import { IResponse } from '@libs/common/response/interfaces/response.interface';
import { AttributeValueDto } from '@libs/common/dto/product/attribute-value.category.dto';
import { GetCategoryHandler } from '../../application/query/handler/get-category.handler';
import { GetCategoryQuery } from '../../application/query/impl/get-category.query';

@Controller()
export class CategoryController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly helperId: HelperIdManagementService,
    private readonly queryBus: QueryBus,
  ) {}

  @MessagePattern(EKafkaMessage.REQUEST_ADD_CATEGORY_PRODUCT)
  async CreateCategory(
    @Body() data: CreateCategorySerilization,
  ): Promise<IResponse> {
    const _id = this.helperId.generateId();
    this.commandBus.execute(
      new CreateCategoryCommand(
        _id,
        data.category_name,
        data.file,
        data.level,
        data.category_parent_id,
      ),
    );
    return {
      data: {
        statusCode: 200,
        message: 'Create Category Success',
        category_id: _id,
      },
    };
  }

  @MessagePattern(EKafkaMessage.REQUEST_ADD_ATTRIBUTE_CATEGORY)
  async CreateAttributeCategory(@Body() data: AttributeValueDto) {
    console.log(data);
  }

  @MessagePattern(EKafkaMessage.REQUEST_GET_ALL_CATEGORY)
  async GetCategory(@Body() data: string): Promise<IResponse> {
    const result = await this.queryBus.execute(new GetCategoryQuery());
    return {
      data: result,
    };
  }
}
