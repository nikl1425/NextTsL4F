export type SearchProps = {
    placeholder?: string,
    handler: (title: string, dispatcher: Dispatch<SetStateAction<[]>>) => void
}