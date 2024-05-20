import { IsNotEmpty } from '@nestjs/class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Gender, Marital, Religion, User, UserType } from '@prisma/client';

export class UpdateDto {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
  @ApiProperty({
    enum: UserType,
  })
  type: UserType;
  // @ApiPropertyOptional({
  //   description: 'property for change',
  // })
  // property: string;
  @ApiProperty({
    description: 'new value for the property',
  })
  property: Partial<User>;
}

export class CreateFarmerDto {
  @ApiProperty()
  @IsNotEmpty()
  first_name: string;
  @ApiProperty()
  @IsNotEmpty()
  last_name: string;
  @ApiProperty()
  @IsNotEmpty()
  email: string;
  @ApiProperty()
  @IsNotEmpty()
  password: string;
  @ApiProperty()
  @IsNotEmpty()
  phone_number: string;
  @ApiProperty({
    enum: UserType,
  })
  type: UserType;
  @ApiProperty()
  @IsNotEmpty()
  age: number;
  @ApiProperty({
    enum: Gender,
  })
  sex: Gender;
  @ApiProperty()
  @IsNotEmpty()
  address: {};
  @ApiProperty()
  @IsNotEmpty()
  birthday: string;
  @ApiProperty({
    enum: Religion,
  })
  @IsNotEmpty()
  religion: Religion;
  @ApiProperty({
    enum: Marital,
  })
  @IsNotEmpty()
  maritalStatus: Marital;
  @ApiProperty()
  @IsNotEmpty()
  photo: Buffer;
  @ApiProperty()
  @IsNotEmpty()
  household_size: number;
  @ApiProperty()
  @IsNotEmpty()
  household_number: number;
  @ApiProperty()
  @IsNotEmpty({
    message: 'lga cant be empty',
  })
  lga: string;
}
