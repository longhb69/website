import QuestionsDropDown from "../component/QuestionsDropDown"
import SignUpForm from "../component/SignUpForm"

export default function SignUpSection() {
    return <section className="bg-[#E1D3E7]">
        <div className="w-[80%] mx-auto relative flex flex-col justify-center items-center md:flex-row gap-10 p-10">
            <div className="flex flex-col justify-center gap-5 w-full">
                <h1 className="font-bold text-center text-[#250E62] text-4xl p-5">Câu hỏi thường gặp khi đăng ký học</h1>
                <QuestionsDropDown/>
            </div>
            {/* <div className="w-full md:w-[40%]">
                <SignUpForm licenseType={""}/>
            </div> */}
        </div>
    </section>
}