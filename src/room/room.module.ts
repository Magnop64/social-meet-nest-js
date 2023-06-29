import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { meetModule } from 'src/meet/meet.module';
import { moduleUser } from 'src/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PositionSchema, position } from './schema/orientation.schema';

@Module({
  imports:[meetModule, moduleUser,
    MongooseModule.forFeature([
      {name: position.name, schema: PositionSchema}
    ])
  ],
  providers: [RoomService],
  controllers: [RoomController]
})
export class RoomModule {}
