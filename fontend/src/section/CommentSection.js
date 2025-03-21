import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

export default function CommentSection() {
    return <section className="bg-[#fff] w-full h-full py-10">
        <div className="w-[80%] mx-auto">
            <div className="flex gap-10 mt-9">
                <div className="text-[#250E62] w-[40%] leading-5">
                    <div className="text-4xl font-bold">
                        <h1>Hỗ trợ 24/7 giúp bạn thành công </h1>
                        <div className="text-base mt-5 font-normal space-y-4">
                            <p>Cần trợ giúp với trang web của bạn? Nhận hỗ trợ từ chuyên gia thông qua trò chuyện trực tuyến hoặc email.</p>
                            <p>Không còn mất công chờ đợi - chúng tôi giải quyết mọi vấn đề trong vòng 3 phút.</p>
                            <p>Xóa bỏ rào cản ngôn ngữ - nhân viên của chúng tôi thành thạo hơn 10 ngôn ngữ.</p>
                        </div>
                    </div>
                    <div className="text-white mt-5 text-xl text-black">
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    </div>
                </div>
                <div className="w-[60%]">
                    <img
                        className="w-[600px] h-[350px] rounded ml-auto"  
                        src="https://simplycontact.com/wp-content/uploads/2023/03/Customer-Support-Outsourcing-Department.png.webp"/>
                </div>
            </div>

            <div className="flex gap-10 py-10">
                <div className="w-[360px] h-[473px]">
                    <img className="w-full h-full" src="https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/c8fa74c8-2fbf-48c6-c854-926022831600/w=1760,sharpen=1"/>
                </div>
                <div className="w-[60%] my-auto text-[#250E62]">
                    <div className="text-4xl">Tôi có thể quản lý hosting, tên miền và chứng chỉ SSL ở cùng một nơi, điều này thực sự rất mới mẻ.</div>
                    <div className="border-[1px] border my-5"></div>
                    <div className="flex w-full justify-between items-center">
                        <div className="flex flex-col font-bold">
                            Owen Phillips
                            <span>Thợ rèn | gatefootforge.co.uk</span>
                        </div>
                        <div className="flex gap-5">
                            <div className="h-[48px] w-[48px] flex items-center justify-center bg-[#D5DFFF] rounded-full cursor-pointer transition-colors duration-100 hover:bg-[#B197FC] hover:text-white">
                                <FontAwesomeIcon icon={faChevronRight} style={{color: "#250E62", transform: "rotate(180deg)"}} />
                            </div>
                            <div className="h-[48px] w-[48px] flex items-center justify-center bg-[#D5DFFF] rounded-full cursor-pointer transition-colors duration-100 hover:bg-[#B197FC] hover:text-white">
                                <FontAwesomeIcon icon={faChevronRight} style={{color: "#250E62", }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}