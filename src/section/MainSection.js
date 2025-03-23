import Button from "../component/Button";
import NavBar from "../component/NavBar";

export default function MainSection() {
    return (
        <>
            <section className="bg-[#250E62] w-full h-screen pb-10">
                <div className="w-[80%] mx-auto">
                    <NavBar />
                    <div className="flex gap-10 mt-9">
                        <div className="text-[#FFCEBD] w-[40%] leading-5">
                            <div className="text-4xl font-bold">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            </div>
                            <div className="text-white mt-5 text-xl">
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis, sem.
                            </div>
                            <Button className="mt-8" variant="secondary">
                                discover web
                            </Button>
                        </div>
                        <div className="w-[60%]">
                            <img
                                className="w-[700px] h-[430px] ml-auto"
                                src="https://assetsio.gnwcdn.com/13909957108.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
