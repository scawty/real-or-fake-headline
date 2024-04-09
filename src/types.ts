export interface Headline {
    id: string
    text: string
    isReal: boolean
    url?: string
    guessCounts: GuessCounts
}

export interface GuessCounts {
    realGuessCount: number
    fakeGuessCount: number
}