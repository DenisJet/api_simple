import { IsString, IsEmail, IsOptional, IsNumber, Min } from 'class-validator';

export class CreateContactDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  project_type: string;

  @IsString()
  @IsOptional()
  project_description?: string;

  @IsNumber()
  @Min(0)
  budget_min: number;

  @IsNumber()
  @Min(0)
  budget_max: number;
}
