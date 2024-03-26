export interface IDiamond {
    id: number
    image: string
    price?: number | string
    diamond?: number | undefined
}[]

const dataModalDiamond: IDiamond[] = [
    {
        id: 1,
        image:"https://i.ibb.co/JjX02XT/diamond-2.png",
        price: 20000,
        diamond: 100,
    },
    {
        id: 2, 
        image:"https://i.ibb.co/JjX02XT/diamond-2.png",
        price: 37000,
        diamond: 250,
    },
    {
        id: 3,
        image:"https://i.ibb.co/JjX02XT/diamond-2.png",
        price: 69000,
        diamond: 500,
    },
    {
        id: 4,
        image:"https://i.ibb.co/JjX02XT/diamond-2.png",
        price: 20000,
        diamond: 100,
    },
    {
        id: 5,
        image:"https://i.ibb.co/JjX02XT/diamond-2.png",
        price: 37000,
        diamond: 250,
    },
    {
        id: 6,
        image:"https://i.ibb.co/JjX02XT/diamond-2.png",
        price: 69000,
        diamond: 665,
    }
]

export default dataModalDiamond