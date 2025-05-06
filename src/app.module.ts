import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './db/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}), 
    DatabaseModule,


    TodoModule, UserModule,
    //  AuthModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
