import { CreateChallengeDto } from './dto';

export class UpdateDto {
  id: string;
  properties: Partial<CreateChallengeDto>;
}
