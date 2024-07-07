export type AuthProps = {
    to: string
    label: string
}

export type InputProps = {
    type: string
    name: string
    label: string
    placeholder: string
}

export type ButtonProps = {
    onClick: () => void
    label: string
}

export type AlertProps = {
    message: string
}

export type BlogCardProps = {
    authorName: string
    title: string
    content: string
    publishedDate: string
}

export type Blog = {
    title: string
    content: string
    id: string
    published: boolean
    author: {
        name: string
    }
}
