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

//  public string ProductName { get; set; }
//  public string ProductDescription { get; set; }

//  public string ImageUrl { get; set; }
//  public int StockAmount { get; set; }
//  public decimal Price { get; set; }
//  public Guid CategoryId { get; set; }



export interface ProductDTO{
    id:string;
    productName:string;
    productDescription:string;
    imageUrl:string;
    stockAmount:number;
    price:number;
    categoryId:string;
}