import { Injectable } from '@nestjs/common';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StationsService {
  constructor(private readonly db: PrismaService) {}

  create(createStationDto: CreateStationDto) {
    return this.db.stations.create({
      data: {
        ...createStationDto,
        ticketsAvailable: createStationDto.ticketsAvailable || false,
      }
    })

  }

  findAll() {
    return this.db.stations.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} station`;
  }

  update(id: number, updateStationDto: UpdateStationDto) {
    return this.db.stations.update({
      data: updateStationDto,
      where: { id }
    })
  }

  remove(id: number) {
    return this.db.stations.delete({
      where: { id }
    })
  }
}
