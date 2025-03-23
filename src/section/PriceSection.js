import MotorBikePriceCard from "../component/MotorBikePriceCard";
import PriceCard from "../component/PriceCard";

const B01 = {
    name: "B0.1",
    base_price: "17.500.00",
    price: "17.000.000",
    discount: "500",
    time: "2.5 Tháng",
};

const B = {
    name: "B",
    base_price: "16.500.00",
    price: "16.000.000",
    discount: "500",
    time: "3 Tháng",
};

const C = {
    name: "C",
    base_price: "20.300.00",
    price: "19.800.000",
    discount: "500",
    time: "5 Tháng",
};

const A1 = {
    name: "A1",
    base_price: "700.00",
    price: "600.000",
    discount: "100",
    time: "1 tuần",
};

const A2 = {
    name: "A2",
    base_price: "2.000.00",
    price: "1.900.000",
    discount: "100",
    time: "1 tuần",
};

export default function PriceSection() {
    return (
        <section className="bg-[#2F1C6A] w-full h-full py-10">
            <div className="w-full md:w-[80%] mx-auto">
                <div className="flex flex-col items-center justify-center font-bold pt-2 pb-10">
                    <h1 className="text-[#fff] text-xl lg:text-3xl">Chương trình đào tạo bằng lái xe</h1>
                </div>
                <div className="flex flex-col lg:flex-row w-full items-center p-5 md:p-0 gap-10 flex-wrap">
                    <PriceCard info={B} />
                    <PriceCard info={B01} />
                    <PriceCard info={C} />
                    <MotorBikePriceCard info={A1} />
                    <MotorBikePriceCard info={A2} />
                </div>
            </div>
        </section>
    );
}
