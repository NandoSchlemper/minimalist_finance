export interface IMagicLinkRepository {
    generateLink(jwtToken: string): Promise<string> // return URL
}