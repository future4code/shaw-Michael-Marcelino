class BatatinhaFrita extends Error {
    // podemos herdar classes que nao foram criadas por nós, como classes nativas do JS
    statusCode: number
    
    constructor(code:number, message: string) {
        super(message)
        this.statusCode = code
    }
}
