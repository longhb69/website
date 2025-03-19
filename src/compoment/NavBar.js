import Button from "./Button";

export default function NavBar() {
    return <div className="flex text-[#FFCEBD] justify-between py-8">
        <div>
            <ul className="flex gap-10 items-center">
                <li>
                    <h1 className="font-bold text-3xl">LOGO</h1>
                </li>
                <liv>product</liv>
                <liv>pricing</liv>
                <li>learn</li>
            </ul>
        </div>
        <div>
            <Button className="w-[10rem] h-[2rem]">Button</Button>
        </div>
    </div>
}