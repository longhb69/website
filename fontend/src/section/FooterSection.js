import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

export default function FooterSection() {
    return <section className="bg-[#1A0B33] text-white w-full h-full py-10">
        <div className="w-[80%] mx-auto flex gap-10">
            <div className="w-[30%] space-y-4">
                <p>Cơ quan chủ quản: Công ty Cổ phần Đầu tư và Thương mại HB.</p>
                <p>Mã số doanh nghiệp: 5400490220 do Sở Kế hoạch và Đầu tư Thành phố Hòa Bình cấp lần đầu ngày 19/03/2018, sửa đổi lần thứ 6 ngày 26/12/2024.</p>
                <div>
                    <div>Hotline: <span className="text-[#F54343]">02183500555</span></div>
                    <div>Email: <span className="text-[#F54343]">support@viettelidc.com.vn</span></div>
                    <div className="w-[25px] h-[25px] mt-4">
                        <a href="https://www.facebook.com/laixehoabinh" target="_blank">
                            <FontAwesomeIcon className="w-full h-full" icon={faFacebook}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-[30%] flex flex-col space-y-4 items-start">
                <div className="font-semibold text-lg">TRỢ GIÚP</div>
                <div>Liên hệ hỗ trợ, khiếu nại</div>
            </div>
            <div className="w-[40%]">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2232.250386247491!2d105.35544282788136!3d20.79535353772951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31346bbbdc18f153%3A0xb98582d9931c7347!2zVHJ1bmcgVMOibSDEkMOgbyBU4bqhbyBMw6FpIFhlIEhvw6AgQsOsbmg!5e1!3m2!1sen!2s!4v1742441641359!5m2!1sen!2s" 
                    width="100%" height="300" 
                    className="rounded"
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">    
                </iframe>
            </div>
        </div>
    </section>
}