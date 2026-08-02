import { IsString, IsNotEmpty, IsArray, ArrayNotEmpty, ValidateNested, IsIn, IsPositive, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class ItemPedidoDto {
    @IsString()
    @IsNotEmpty()
    producto: string;

    @IsString()
    @IsNotEmpty()
    tamano: string;

    @IsInt()
    @IsPositive()
    cantidad: number;
}

export class CrearPedidoCafeteriaDto {
    @ApiProperty({ description: 'Identificador del cliente que realiza el pedido', example: 'jorge92' })
    @IsString()
    @IsNotEmpty()
    idCliente: string;

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => ItemPedidoDto)
    items: ItemPedidoDto[];

    @IsString()
    @IsIn(['recoger', 'domicilio'])
    metodoEntrega: string;
}