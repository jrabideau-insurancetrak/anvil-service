import { ApiProperty } from '@nestjs/swagger'
import { IsOptional } from 'class-validator'



class FileDto {
    @ApiProperty({
        example: 'fileUploadNDA',
        type: 'string'
    })
    id: string

    @ApiProperty({
        example: '5FmtK3RyspyXa4nlIiox',
        type: 'string'
    })
    castEid: string    
}

class SignerDto {
    @ApiProperty({
        example: 'signer1',
        type: 'string'
    })
    id: string

    @ApiProperty({
        example: 'Testy Testerson',
        type: 'string'
    })
    name: string

    @ApiProperty({
        example: 'test@test.com',
        type: 'string'
    })
    email: string

    @ApiProperty({
        example: [{
            fileId: 'templatePdfIrsW4',
            fieldId: 'employeeSignature'
        }],
        type: 'FieldDto[]'
    })
    fields: FieldDto[]

    @ApiProperty({
        example: 'draw',
        type: 'string'
    })
    @IsOptional()
    signatureMode: string

    @ApiProperty({
        example: true,
        type: 'boolean'
    })
    @IsOptional()
    acceptEachField: boolean

    @ApiProperty({
        example: 'embedded',
        type: 'string'
    })
    @IsOptional()
    signerType: string

    @ApiProperty({
        example: 'http://test.com',
        type: 'string'
    })
    @IsOptional()
    redirectUrl: string

    @ApiProperty({
        example: false,
        type: 'boolean'
    })
    @IsOptional()
    enableEmails: false
}

export class ClientAgreementUserInputDto {
    @ApiProperty({
        example: 'Jordan Rabideau',
        type: 'string'
    })
    name: string

    @ApiProperty({
        example: 'jordan@gmail.com',
        type: 'string'
    })
    email: string
}

class FieldDto {
    @ApiProperty({
        example: 'templatePdfIrsW4',
        type: 'string'
    })
    fileId: string

    @ApiProperty({
        example: 'employeeSignature',
        type: 'string'
    })
    fieldId: string
}

export class ClientNameDto {
    @ApiProperty({
        example: 'Jordan',
        type: 'string'
    })
    firstName: string

    @ApiProperty({
        example: 'M',
        type: 'string'
    })
    mi: string

    @ApiProperty({
        example: 'Rabideau',
        type: 'string'
    })
    lastName: string
}

class PayloadsDto {
    @ApiProperty({
        example: {
            firstName: 'Jordan',
            mi: 'M',
            lastName: 'Rabideau'
        },
        type: 'ClientNameDto'
    })
    clientName: ClientNameDto
}

class DataDto {
    @ApiProperty({
        example: {
            clientName: {
                firstName: 'Jordan',
                mi: 'M',
                lastName: 'Rabideau'
            }
        },
        type: 'PayloadsDto'
    })
    data: PayloadsDto
}



class ClientAgreementPayloadDto {
    @ApiProperty({
        example: {
            data: {
                clientName: {
                    firstName: 'Jordan',
                    mi: 'M',
                    lastName: 'Rabideau'
                }
            }
        },
        type: 'DataDto'
    })
    '5FmtK3RyspyXa4nlIiox': DataDto

}

class ClientAgreementDataDto {
    @ApiProperty({
        example: {
            '5FmtK3RyspyXa4nlIiox': {
                data: {
                    clientName: {
                        firstName: 'Jordan',
                        mi: 'M',
                        lastName: 'Rabideau'
                    }
                }
            }
        },
        type: 'ClientAgreementPayloadDto'
    })
    payloads: ClientAgreementPayloadDto
}


export class ClientAgreementRequestDto {
    @ApiProperty({
        example: true,
        type: 'boolean'
    })
    isTest: boolean

    @ApiProperty({
        example: [{
            id: 'fileUploadNDA',
            castEid: '5FmtK3RyspyXa4nlIiox'
        }],
        type: 'FileDto[]'
    })
    files: FileDto[]

    @ApiProperty()
    signers: SignerDto[]

    @ApiProperty({
        example: {
            payloads: {
                clientAgreement: {
                    data: {
                        clientName: {
                            firstName: 'Jordan',
                            mi: 'M',
                            lastName: 'Rabideau'
                        }
                    }
                }
            }
        },
        type: 'ClientAgreementDataDto'
    })
    data: ClientAgreementDataDto

}