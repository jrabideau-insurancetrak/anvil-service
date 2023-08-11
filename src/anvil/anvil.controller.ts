import { Body, Controller, Get, Post, Param } from '@nestjs/common'
import { ApiTags, ApiResponse } from '@nestjs/swagger'
import Anvil from "@anvilco/anvil";
import { AnvilService } from './anvil.service'
import { ClientAgreementUserInputDto } from './dto/anvil.dto';
// import { ClientAgreementUserInputDto } from "./dto/anvil.dto";

@ApiTags('anvil')
@Controller('anvil')
export class AnvilController {
    constructor(private readonly anvilService: AnvilService) {}

    @Get('test')
    @ApiResponse({
        status: 200,
        description: 'Test the service',
        type: String,
    })
    test(): string {
        return this.anvilService.test()
    }

    // This endpoint returns a url to be used for an embedded iframe
    @Post('clientAgreement')
    @ApiResponse({})
    async signClientAgreement(@Body() info: ClientAgreementUserInputDto): Promise<{
        url?: string;
        errors?: Array<Object>;
        statusCode: number;
    }> {
        return await this.anvilService.signClientAgreement(info)
    }

}
