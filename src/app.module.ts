import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PlacesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
