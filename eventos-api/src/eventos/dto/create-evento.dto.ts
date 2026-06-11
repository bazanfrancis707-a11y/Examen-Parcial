import { IsString, IsInt, IsDateString, Min, IsNotEmpty } from 'class-validator';

export class CreateEventoDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  descripcion!: string;

  @IsString()
  @IsNotEmpty()
  ubicacion!: string;

  @IsDateString()
  @IsNotEmpty()
  fechaEvento!: string;

  @IsInt()
  @Min(1)
  capacidad!: number;
}