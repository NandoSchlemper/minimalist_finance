import type { IEmailRepository } from "../ports/IEmailRepository";

export class EmailServices {
    constructor(private emailRepository: IEmailRepository) {}

    async sendEmail(emailContent: string): Promise<void> {
        try {
            this.emailRepository.sendEmail(emailContent)
            console.log("Email enviado com sucesso!")
        } catch (err) {
            throw new Error(`Email não foi enviado..., ${err}`)
        }
    }
    // need construct the variables to use nodemaider
}