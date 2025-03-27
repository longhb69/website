import QuestionsDropDown from "../component/QuestionsDropDown"
import SignUpForm from "../component/SignUpForm"

export default function SignUpSection() {
    return <section className="bg-[#E1D3E7]">
        <div className="w-full p-2 md:p-0 md:w-[80%] mx-auto relative flex flex-col md:flex-row gap-10 py-10">
            <div className="flex flex-col gap-5 w-full md:w-[60%]">
                <h1 className="font-bold text-2xl px-2">Câu hỏi thường gặp khi đăng ký học</h1>
                <QuestionsDropDown/>
            </div>
            <div className="w-full md:w-[40%]">
                <SignUpForm licenseType={""}/>
            </div>
        </div>
    </section>
}