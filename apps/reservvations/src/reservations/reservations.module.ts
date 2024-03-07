import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { DatabaseModule } from '@app/common';
import { ReservationDocument, ReservationSchema } from './models/reservation.schema';

@Module({
  imports:[DatabaseModule, ReservationsModule,DatabaseModule.forFeature([{name:ReservationDocument.name,schema:ReservationSchema}]],
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule {}
