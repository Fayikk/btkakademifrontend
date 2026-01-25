'use client';
import Link from "next/link";
import Navbar from "../Components/Navbar";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/redux/hooks";

export default function BasketPage(){

    const router = useRouter();
    const {baskets,isLoading,error} = useAppSelector(state => state.basket);


  if(isLoading){
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white" style={{color:'black'}}>
        <h1> Loading... </h1>
      </div>
    )
  }

  const totalPrice = baskets?.data.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

return(

    <>
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Sepetim</h1>

          {baskets?.data.items.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-500 mb-4">Sepetiniz boş</p>
              <Link
                href="/products"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
              >
                Alışverişe Başla
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {baskets?.data.items.map((item) => (
                  <div
                    key={item.productId}
                    className="bg-white rounded-lg shadow p-4 flex items-center gap-4"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gray-200 rounded overflow-hidden shrink-0">
                      {item.product.imageUrl && (
                        <img
                          src={`https://localhost:7230${item.product.productImages[0].imageUrl}`}
                          alt={item.product.productName}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <Link
                        href={`/products/${item.productId}`}
                        className="font-semibold text-gray-900 hover:text-blue-600"
                      >
                        {item.product.productName}
                      </Link>
                      <p className="text-sm text-gray-600 mt-1">
                        Fiyat: {item.product.price.toFixed(2)} ₺
                      </p>
                      <p className="text-sm text-gray-600">Adet: {item.quantity}</p>
                    </div>

                    {/* Price and Remove */}
                    <div className="text-right">
                      <p className="font-bold text-lg text-gray-900 mb-2">
                        {(item.product.price * item.quantity).toFixed(2)} ₺
                      </p>
                      <button
                        // onClick={() => handleRemoveItem(item.productId)}
                        onClick={() => console.log()}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Çıkar
                      </button>
                    </div>
                  </div>
                ))}

                <button
                //   onClick={handleClearBasket}
                  onClick={() => console.log()}
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Sepeti Temizle
                </button>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow p-6 sticky top-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Sipariş Özeti</h2>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-gray-600">
                      {/* <span>Ürün Sayısı:</span> */}
                      {/* <span>{itemCount} adet</span> */}
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Toplam Miktar:</span>
                      <span>
                        {baskets?.data.items.reduce((sum, item) => sum + item.quantity, 0)} adet
                      </span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between text-xl font-bold text-gray-900">
                        <span>Toplam Tutar:</span>
                        <span>{totalPrice} ₺</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => router.push('/Checkout')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
                  >
                    Siparişi Tamamla
                  </button>

                  <Link
                    href="/products"
                    className="block text-center text-blue-600 hover:text-blue-800 mt-4"
                  >
                    Alışverişe Devam Et
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
    </>


)


}