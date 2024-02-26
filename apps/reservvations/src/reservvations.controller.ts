import { Controller, Get } from '@nestjs/common';
import { ReservvationsService } from './reservvations.service';

@Controller()
export class ReservvationsController {
  constructor(private readonly reservvationsService: ReservvationsService) {}

  @Get()
  getHello(): string {
    return this.reservvationsService.getHello();
  }
}
