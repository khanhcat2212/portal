import { ChevronDown } from 'lucide-react'
import React from 'react'

interface CheckoutProps {
    payment: string,
    setPayment: (payment: string) => void,
    method: string,
    setMethod: (method: string) => void
}

const Checkout: React.FC<CheckoutProps> = ({ payment, setPayment, method, setMethod }) => {
    return (
        <div className="w-full py-8 px-8 rounded-md bg-white">
            <p className="text-[1.125rem] font-bold mb-6 text-black-300">
                Thanh toán (COMING SOON)
            </p>

            <div className='flex items-center gap-4'>
                <div className='w-1/2 flex flex-col justify-center gap-2 border-r-2 border-grey-300 pr-4'>
                    <label className="flex items-center gap-2 text-[.875rem]">
                        <input
                            type="radio"
                            name="payment"
                            value="prepaid"
                            checked={payment === "prepaid"}
                            onChange={() => setPayment("prepaid")}
                        />
                        Thanh toán trước khi nhận hàng
                    </label>

                    <label className="flex items-center gap-2 text-[.875rem]">
                        <input
                            type="radio"
                            name="payment"
                            value="cod"
                            checked={payment === "cod"}
                            onChange={() => setPayment("cod")}
                        />
                        Thanh toán sau khi nhận hàng
                    </label>
                </div>

                <div className='flex flex-col gap-2 w-1/2 px-4'>
                    <p className="text-[14px] text-black-300">
                        Hình thức thanh toán:
                    </p>
                    <div className="relative h-8 my-2 flex items-center w-full">
                        <select
                            className="appearance-none text-[14px] w-full border border-grey-200 rounded-md px-4 py-2 pr-8"
                            value={method}
                            onChange={(e) => setMethod(e.target.value)}
                        >
                            <option value="cash">Tiền mặt</option>
                            <option value="bank">E-banking</option>
                        </select>
                        <ChevronDown
                            size={20}
                            className="absolute right-2 text-grey-500 pointer-events-none"
                            style={{ top: "50%", transform: "translateY(-50%)" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout