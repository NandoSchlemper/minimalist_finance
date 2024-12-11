export interface IEmailRepository {
    sendEmail(message: string): Promise<void> // Will send magic link URL
}