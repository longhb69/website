import PriceCard from "../compoment/PriceCard";

export default function PriceSection() {
    return <section className="bg-[#250E62] w-full h-full py-10">
        <div className="w-[80%] mx-auto">
            <div className="flex gap-10 flex-wrap">
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
            </div>
        </div>
    </section>
}