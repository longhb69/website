export default function AboutSection() {
    return <section className="bg-[#fff] text-[#250E62] w-full h-full py-10">
        <div className="w-[80%] flex gap-5 mx-auto">
            <div className="w-[50%] h-fit">
                <h1 className="text-3xl font-bold">Về Chúng Tôi</h1>
                <p className="mt-2">Hơn cả một nhà cung cấp dịch vụ giải pháp, Viettel IDC là người chăm sóc hệ thống hạ tầng CNTT của khách hàng, đồng hành cùng khách hàng tiến tới thành công.</p>
                <div className="flex gap-5 mt-5">
                    <div className="flex flex-col">
                        <div className="space-y-2 pb-5">
                            <h1 className="font-bold text-xl text-[#F54343]">Số 1</h1>
                            <p>Nhà cung cấp dịch vụ Cloud và Data Center lớn nhất tại Việt Nam</p>
                        </div>
                        <div className="space-y-2">
                            <h1 className="font-bold text-xl text-[#F54343]">Tin cậy</h1>
                            <p>Chúng tôi sở hữu các chứng chỉ bảo mật quốc tế, cam kết kiểm soát, hạn chế rủi ro hệ thống, bảo đảm an toàn dữ liệu</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="space-y-2 pb-5">
                            <h1 className="font-bold text-xl text-[#F54343]">25.000 +</h1>
                            <p>Khách hàng trong nước và quốc tế đã tin tưởng, lựa chọn sử dụng dịch vụ</p>
                        </div>
                        <div className="space-y-2">
                            <h1 className="font-bold text-xl text-[#F54343]">48.500 m2</h1>
                            <p>Diện tích phòng máy đáp ứng mọi yêu cầu về hạ tầng với hệ thống 6 Trung tâm dữ liệu đạt tiêu chuẩn quốc tế ANSI/TIA-942-B:2017 Rated 3</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-full">
                <img className="w-full max-h-[450px]  rounded" src="https://lh3.googleusercontent.com/p/AF1QipO4_JPfmrOSPlpX21IGBn34DrKu8iVvZ7Zh-mMC=s680-w680-h510"/>
            </div>
        </div>
    </section>
}