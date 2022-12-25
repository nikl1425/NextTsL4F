export type SearchProps = {
    placeholder?: string,
    handler: (query: string) => Promise<Array<any> | string>
}

export type SearchListElementProps = {
    name: string,
    orrurences?: number,
    imagePath: string
}