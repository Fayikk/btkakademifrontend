export interface ResponseModel<T>{
    data:T;
    isSuccess:boolean;
    message:string;
}


export interface CategoryDTO {
    id:string;
    categoryName:string;
    description:string;
    createBy:string;
}



export interface ProductDTO{
    id:string;
    productName:string;
    productDescription:string;
    imageUrl:string;
    stockAmount:number;
    price:number;
    categoryId:string;
}