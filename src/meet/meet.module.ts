import { Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { moduleUser } from 'src/user/user.module';
import { GetMeet } from './dto/getMeet.dto';
import { MeetServices } from './meet.service';
import { MeetController } from './meet.controller';
import { SchemaMeet } from './schema/modelMeet.schema';

@Module({
  imports: [moduleUser, MongooseModule.forFeature([{name: GetMeet.name, schema: SchemaMeet}])],
  controllers: [MeetController],
  providers: [MeetServices],
  exports: [ MongooseModule, MeetServices],
})

export class MeetModule {};