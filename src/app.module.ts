import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://wender:k8_-NNf_HbnC9bn@cluster0.kncufjy.mongodb.net/test'
      ),
      UsersModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
