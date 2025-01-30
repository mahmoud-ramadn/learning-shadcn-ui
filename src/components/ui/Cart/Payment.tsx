import { Button } from "../button";
import { Input } from "../input";
import { Checkbox } from "../checkbox";

interface PaymentProps {
    handleSteps: () => void;
}

function Payment({ handleSteps }: PaymentProps) {
    return (
        <div className="relative min-h-screen p-8">
            <h2 className="font-semibold text-xl text-center">Payment</h2>
            <div className="mt-8 flex justify-center">
                <div className="w-[353px] h-[629px] space-y-6">
                    <div className="relative">
                        <img
                            className="absolute left-3 top-1/2 -translate-y-1/2"
                            src="/Mastercard.svg"
                            alt="Mastercard Logo"
                        />
                        <Input
                            className="w-full h-[65px] rounded-3xl border-[1px] border-gray-custom-400 pl-9 focus:border-primary-200 outline-offset-2 focus:outline-double focus:outline-primary-500"
                            placeholder="Card number"
                        />
                    </div>
                    <div className="flex gap-x-4 items-center">
                        <Input
                            type="date"
                            className="w-1/2 h-[65px] rounded-3xl border-[1px] border-gray-custom-400 pl-5 focus:border-primary-200 outline-offset-2 focus:outline-double focus:outline-primary-500"
                            placeholder="Exp. date"
                        />
                        <Input
                            type="number"
                            className="w-1/2 h-[65px] rounded-3xl border-[1px] border-gray-custom-400 pl-5 focus:border-primary-200 outline-offset-2 focus:outline-double focus:outline-primary-500"
                            placeholder="CVV"
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox className="accent-primary-600" id="terms-shipping" />
                        <label
                            htmlFor="terms-shipping"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Use shipping address as billing address
                        </label>
                    </div>

                    <div className="mt-16 space-y-6">
                        <h2 className="text-body-sub font-semibold text-xl">Remember me</h2>
                        <div className="flex items-center space-x-2">
                            <Checkbox className="accent-primary-600" id="terms-checkout" />
                            <label
                                htmlFor="terms-checkout"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Save my information for faster checkout
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full px-4">
                <Button
                    onClick={handleSteps}
                    className="w-full h-[65px]"
                    variant={"default"}
                >
                    Payment
                </Button>
            </div>
        </div>
    );
}

export default Payment;