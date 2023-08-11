import { Injectable } from "@nestjs/common/";
import Anvil from "@anvilco/anvil";
import { ConfigService } from "@nestjs/config";
import { ClientAgreementUserInputDto, ClientNameDto, ClientAgreementRequestDto } from "./dto/anvil.dto";

@Injectable()
export class AnvilService {
    constructor(
        private configService: ConfigService
    ) {}

    test(): string {
        return 'Success!'
    }

    async signClientAgreement(clientName: ClientAgreementUserInputDto): Promise<{
        url?: string;
        errors?: Array<Object>;
        statusCode: number;
    }> {
        const apiKey = this.configService.get<string>('ANVIL_DEVELOPMENT_KEY')
        const anvilClient = new Anvil({apiKey: apiKey})
        const variables = {
            isTest: true,
            isDraft: false,
            files: [{
                id: 'clientAgreement',
                castEid: this.configService.get<string>('CLIENT_AGREEMENT_CAST_ID')
            }],
            signers: [{
                id: 'signer1',
                name: clientName.name,
                email: clientName.email,
                fields: [
                    {
                        fileId: 'clientAgreement',
                        fieldId: 'clientName'
                    },
                    {
                        fileId: 'clientAgreement',
                        fieldId: 'signature'
                    },
                    {
                        fileId: 'clientAgreement',
                        fieldId: 'signatureDate'
                    }
                ],
                signerType: 'embedded',
                enableEmails: [
                    "etchComplete"
                ]
            }],
            data: {
                payloads: {
                    clientAgreement: {
                        data: {
                            clientName: {
                                firstName: clientName.name.split(" ")[0],
                                mi: '',
                                lastName: clientName.name.split(" ")[1]
                            }
                        }
                    }
                }
            }
        }

        const etchPacket = await anvilClient.createEtchPacket({variables})
        const signerEid = etchPacket.data.data.createEtchPacket.documentGroup.signers[0].eid
        const clientUserId = etchPacket.data.data.createEtchPacket.documentGroup.signers[0].aliasId
        const etchUrl = await anvilClient.generateEtchSignUrl({variables: { clientUserId, signerEid }})

        return etchUrl
    }
}