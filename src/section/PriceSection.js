import PriceCard from "../compoment/PriceCard";

const B01 = {
    name: "B0.1",
    base_price: "17.500.00",
    price: "17.000.000",
    time: "2.5 Tháng"
}

const B = {
    name: "B",
    base_price: "16.500.00",
    price: "16.000.000",
    time: "3 Tháng"
}

const C = {
    name: "C",
    base_price: "20.300.00",
    price: "19.800.000",
    time: "5 Tháng"
}

export default function PriceSection() {
    return <section className="bg-[#2F1C6A] w-full h-full py-10">
        <div className="w-[80%] mx-auto">
            <div className="flex items-center justify-center font-bold  pt-2 pb-10">
                <h1 className="text-[#fff] text-3xl">Chương trình đào tạo bằng lái xe</h1>
            </div>
            <div className="flex gap-10 flex-wrap">
                <PriceCard info={B}/>
                <PriceCard info={B01}/>
                <PriceCard info={C}/>
            </div>
        </div>
    </section>
}