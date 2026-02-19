export interface IPost {
    id: number,
    title: string,
    type: string,
    content: string | null,
    image: string,
    likes: number
    publishedAt: Date | string;
}