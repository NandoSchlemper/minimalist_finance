import type { IMagicLinkRepository } from "../ports/IMagicLinkRepository";

export class MagicLinkServices {
    constructor(private magicLinkRepository: IMagicLinkRepository) {}

    async generateLink(jwtToken: string): Promise<string> {
        try {
            const result = await this.magicLinkRepository.generateLink(jwtToken)
            return result
        } catch (err) {
            throw new Error(`Erro ao gerar o Magic Link, ${err}`)
        }
    }
}