import { FaGraduationCap, FaBook, FaChartBar, FaUserGraduate, FaClipboardList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate()
  const Card = ({ label, icon, onClick }: { label: string; icon: React.ReactNode; onClick: () => void; }) => {
    return (
      <div
        className="bg-blue-500 rounded-lg p-6 flex flex-col items-center justify-center h-60 hover:bg-blue-800 hover:shadow-lg transition-shadow cursor-pointer" // Thêm cursor-pointer
        onClick={onClick}
      >
        <div className="text-white text-4xl mb-2">{icon}</div>
        <p className="text-white text-lg font-medium">{label}</p>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-20 p-6">
      {/* Hàng trên: 3 card */}
      <div className="col-span-12 grid grid-cols-3 gap-4 md:gap-6">
        <div className="col-span-1">
          <Card
            label="Giảng viên"
            icon={<FaGraduationCap />}
            onClick={() => navigate('/basic-tables')}
          />
        </div>
        <div className="col-span-1">
          <Card
            label="Đề tài nghiên cứu"
            icon={<FaBook />}
            onClick={() => navigate('')}
          />
        </div>
        <div className="col-span-1">
          <Card
            label="Công bố khoa học"
            icon={<FaUserGraduate />}
            onClick={() => navigate('/science-tables')}
          />
        </div>
        <div className="col-span-1">
          <Card
            label="Tập chí, ấn phẩm"
            icon={<FaClipboardList />}
            onClick={() => navigate('/an-pham')}
          />
        </div>
        <div className="col-span-1">
          <Card
            label="Báo cáo - thống kê"
            icon={<FaChartBar />}
            onClick={() => navigate('')}
          />
        </div>
      </div>
    </div>
  );
}