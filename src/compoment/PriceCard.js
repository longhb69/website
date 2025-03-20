import Button from "./Button"

export default function PriceCard() {
    return <div className="bg-[#fff] w-[30%] h-[600px] rounded-lg text-[#250E62]">
        <div className="p-5">
            <h1 className="font-bold text-3xl">B0.1</h1>
            <div className="flex items-center gap-2">
                <div className="font-bold line-through">17.500.000 VNĐ</div>
                <div className="bg-[#D5DFFF] font-semibold rounded-full text-sm text-center p-2">Giảm 500k khi đăng ký online</div>
            </div>
            <div className="text-4xl font-bold py-3">17.000.000 <span className="text-xl font-semibold">VNĐ</span></div>
            <Button variant="thirdary" className="border-1 border border-black w-full mb-5 mt-3 shadow-xl">
                Đăng ký ngay
            </Button>
            <div className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </div>
            <div className="border-[1px] border my-5"></div>
            <div className="text-black">Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem</div>
            <Button variant="secondary" className="mt-5 w-full">Xem Chi Tiết</Button>
        </div>
    </div>
}