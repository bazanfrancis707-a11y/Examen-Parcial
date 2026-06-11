import { IsString, IsEmail, IsInt, Min, IsNotEmpty } from 'class-validator';

export class CreateInscripcionDto {
  @IsString()
  @IsNotEmpty()
  participante!: string;

  @IsEmail()
  @IsNotEmpty()
  correo!: string;

  @IsString()
  @IsNotEmpty()
  telefono!: string;

  @IsInt()
  @Min(1)
  eventoId!: number;
}