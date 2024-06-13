import { IsString, IsOptional, IsUUID, IsEnum, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { VisitStatus } from '@prisma/client';

export class CreateVisitDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ enum: VisitStatus, enumName: 'VisitStatus' })
  @IsEnum(VisitStatus)
  status: VisitStatus;

  @ApiProperty()
  @IsUUID()
  appointmentId: string;

  @ApiProperty()
  @IsUUID()
  milestoneId: string;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  time?: Date;

  @ApiProperty()
  @IsDate()
  date: Date;

  @ApiProperty()
  @IsOptional()
  @IsUUID()
  projectId?: string;

  @ApiProperty()
  @IsOptional()
  @IsUUID()
  workerProfileId?: string;

  @ApiProperty()
  @IsOptional()
  @IsUUID()
  interventionId?: string;

  constructor(createVisitDto: CreateVisitDto) {
    Object.assign(this, createVisitDto);
  }
}
