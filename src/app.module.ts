import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
require('dotenv').config()
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.kncufjy.mongodb.net/${process.env.MONGO_DATABASE}`
      ),
      UsersModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
