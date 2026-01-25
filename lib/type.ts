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
    productImages:ProductImageDTO[]
}

export interface ProductImageDTO{
    id:string,
    imageUrl:string
}


export interface User {
    id:string,
    email:string,
    firstName:string,
    lastName:string,
    token:string,
    roles:string[]
}

export interface LoginRequest {
    email:string,
    password:string
}


export interface RegisterRequest{
    email:string,
    firstName:string,
    lastName:string,
    userName:string,
    password:string,
    confirmPassword:string
}


export interface BasketResponseDTO{
    userId:string,
    items:BasketItemResponseDTO[]
}


export interface BasketItemResponseDTO{
    productId:string,
    quantity:number,
    product:ProductDTO
}

//  public Guid ProductId { get; set; }
//  public int Quantity { get; set; }
//  public string UserId { get; set; }


export interface BasketDTO{
    productId:string,
    quantity:number,
    userId:string
}