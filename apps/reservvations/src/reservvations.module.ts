import { Module } from '@nestjs/common';
import { ReservvationsController } from './reservvations.controller';
import { ReservvationsService } from './reservvations.service';
import { DatabaseModule } from '@app/common';
import { ReservationsModule } from './reservations/reservations.module';
import { ReservationsRepository } from './reservations/reservations.repository';
import { ReservationDocument, ReservationSchema } from './reservations/models/reservation.schema';

@Module({
  imports: [DatabaseModule, ReservationsModule,DatabaseModule.forFeature([{name:ReservationDocument.name,schema:ReservationSchema}])],
  controllers: [ReservvationsController],
  providers: [ReservvationsService,ReservationsRepository],
})
export class ReservvationsModule {}
