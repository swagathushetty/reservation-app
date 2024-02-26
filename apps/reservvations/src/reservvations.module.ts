import { Module } from '@nestjs/common';
import { ReservvationsController } from './reservvations.controller';
import { ReservvationsService } from './reservvations.service';
import { DatabaseModule } from '@app/common';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [DatabaseModule, ReservationsModule],
  controllers: [ReservvationsController],
  providers: [ReservvationsService],
})
export class ReservvationsModule {}
