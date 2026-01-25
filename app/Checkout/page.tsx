'use client';
import { useState } from "react";
import Navbar from "../Components/Navbar";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { addPayment } from "@/lib/redux/features/paymentSlice";
import { PaymentRequestDTO } from "@/lib/type";

export default function CheckoutPage(){

    const {baskets,isLoading,error} = useAppSelector((state) => state.basket)
    const dispatch = useAppDispatch();
    const [cardForm,setCardForm] = useState<PaymentRequestDTO>({
        cardHolderName:"",
        cardNumber:"",
        expireMonth:"",
        expireYear:"",
        cvv:""
    });

    const handleSubmitOrder = () => {
        dispatch(addPayment(cardForm)).then((res) => {
            console.log("trigger response",res)
        })
    }

  if(isLoading){
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white" style={{color:'black'}}>
        <h1> Loading... </h1>
      </div>
    )
  }


      const totalPrice = baskets?.data.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)


    return (

        <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2">
            <li><a href="/Basket" className="text-blue-600 hover:underline">Sepet</a></li>
          
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - Form */}
          <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-4">Ödeme Bilgileri</h2>

                <form onSubmit={handleSubmitOrder} className="space-y-4">
                  <div>
                    <label className="block text-yellow font-medium mb-1">Kart Üzerindeki İsim</label>
                    <input
                      type="text"
                      value={cardForm.cardHolderName}
                      onChange={(e) => setCardForm({ ...cardForm, cardHolderName: e.target.value })}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Ad Soyad"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Kart Numarası</label>
                    <input
                      type="text"
                      value={cardForm.cardNumber}
                      onChange={(e) => setCardForm({ ...cardForm, cardNumber: e.target.value.replace(/\s/g, '') })}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="1234 5678 9012 3456"
                      maxLength={16}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Ay</label>
                      <input
                        type="text"
                        value={cardForm.expireMonth}
                        onChange={(e) => setCardForm({ ...cardForm, expireMonth: e.target.value })}
                        className="w-full border rounded-lg px-3 py-2"
                        placeholder="MM"
                        maxLength={2}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Yıl</label>
                      <input
                        type="text"
                        value={cardForm.expireYear}
                        onChange={(e) => setCardForm({ ...cardForm, expireYear: e.target.value })}
                        className="w-full border rounded-lg px-3 py-2"
                        placeholder="YY"
                        maxLength={2}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">CVV</label>
                      <input
                        type="text"
                        value={cardForm.cvv}
                        onChange={(e) => setCardForm({ ...cardForm, cvv: e.target.value })}
                        className="w-full border rounded-lg px-3 py-2"
                        placeholder="123"
                        maxLength={3}
                        required
                      />
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                    <strong>Test Kart Bilgileri:</strong><br />
                    Kart No: 5528790000000008<br />
                    Ay/Yıl: 12/30<br />
                    CVV: 123
                  </div>

                  <div className="flex space-x-3">
                  
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg"
                    >
                      {isLoading ? 'İşleniyor...' : 'Ödemeyi Tamamla'}
                    </button>
                  </div>
                </form>
              </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-6">
              <h3 className="text-xl font-bold mb-4">Sipariş Özeti</h3>
              <div className="space-y-2 mb-4">
                {baskets?.data.items.map((item) => (
                  <div key={item.productId} className="flex justify-between text-sm">
                    <span>{item.product.productName} x{item.quantity}</span>
                    <span>{(item.product.price * item.quantity).toFixed(2)} ₺</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-xl font-bold">
                  <span>Toplam:</span>
                  <span>{totalPrice} ₺</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    )

}