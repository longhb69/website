import { useParams } from "react-router-dom"
import SignUpSection from "../section/SignUpSection"
import SignUpForm from "../component/SignUpForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function CarClass() {
    const { name } = useParams();

    const B = () => {
        return (
            <div className="container w-[60%] px-4 py-12">
                <div className="w-full space-y-6">
                    <h1 className="text-3xl font-bold text-[#250E62] mb-6">
                        Học Lái Xe Ô Tô Hạng B
                    </h1>

                    <div className="bg-white border-gray-400 border rounded-xl p-6 shadow-lg space-y-4">
                        <h2 className="text-xl font-semibold text-[#250E62]">
                            Từ 01/01/2025, bằng B được phép lái:
                        </h2>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-[#00B090] mt-1">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Xe ô tô chở người đến 08 chỗ (không kể chỗ của người lái xe)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#00B090] mt-1">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ đến 3.500 kg
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#00B090] mt-1">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Xe ô tô hạng B kéo rơ moóc có khối lượng đến 750 kg
                            </li>
                        </ul>

                        <div className="mt-6 pt-4 border-t">
                            <h3 className="text-lg font-semibold text-[#250E62] mb-2">
                                Điều kiện học bằng B:
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00B090] mt-1">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    Độ tuổi: Đủ 18 tuổi (tính đến ngày dự sát hạch lái xe)
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00B090] mt-1">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    Đủ sức khỏe theo quy định
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00B090] mt-1">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    Là công dân Việt Nam, người nước ngoài được phép cư trú hoặc đang làm việc, học tập tại Việt Nam.
                                </li>
                            </ul>
                        </div>

                        <div className="mt-6 pt-4 border-t">
                            <h3 className="text-lg font-semibold text-[#250E62] mb-2">
                                Hồ sơ của người học lái xe ô tô hạng B:
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00B090] mt-1">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    06 ảnh màu 3×4 chụp chân dung nền xanh (mặc áo có cổ, không đeo kính).
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00B090] mt-1">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    01 CMND/CCCD Photo công chứng
                                </li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg mt-4">
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold">Lưu ý:</span> Từ 01/01/2025, 
                                bằng B sẽ thay thế cho bằng B1, B2 hiện hành. Các bằng B1, B2 
                                cũ vẫn được sử dụng đến hết hạn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderLicenseInfo = () => {
        switch(name) {
            case "B":
                return <B/>
            default:
                return null
        }
    }

    return <div className="flex p-10">
        {renderLicenseInfo()}
        <div className="w-[40%]">
            <SignUpForm licenseType={ name }/>  
        </div>
    </div>
}