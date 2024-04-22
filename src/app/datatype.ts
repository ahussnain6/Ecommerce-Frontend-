export interface sign{
    username: string;
    email: string;
    password: string;
    phone: string;
    sellerId: string
}
export interface login {
    email: string;
    password: string
}
export interface usersignup {
    username: string;
    email: string;
    password: string;
     phone: string,
      userId: number
}
export interface product {
    _id: string,
    name: string,
    price: number,
    color: string,
    image: string,
    desc: string,
    sellerId: string
}
export interface cart {
    name: string, 
    price: number,
     color: string, 
     image: string, 
     desc: string, 
     sellerId: string, 
     userId: string, 
     productId: number

}