import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../ui/table";
import Badge from "../../ui/badge/Badge";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import { useEffect,useState} from "react";
import {fetchNCKHGiangVien} from "../../../api/NCKHGiangVienAPI";

interface Faculty {
    maDeTai: number;
    tenDeTai: string;
    chuNhiemDeTai: string;
    trangThai: string;
    khoa: string;
    ngayBatDau: string;
    ngayKetThuc: string;
}

const tableData: Faculty[] = [
    {
        id: 1,
        nameProject: "ỨNG DỤNG AI DỰ BÁO THỜI TIẾT",
        facultyName: "PSG. TS Nguyễn Văn An",
        status: "Đang thực hiện",
        science: "CNTT",
        startDate: "08/01/2005",
        endDate: "08/05/2005",
    },
    {
        id: 2,
        nameProject: "ỨNG DỤNG AI DỰ BÁO THỜI TIẾT",
        facultyName: "PSG. TS Nguyễn Văn An",
        status: "Đã hoàn thành",
        science: "CNTT",
        startDate: "08/01/2005",
        endDate: "08/05/2005",
    },
];

export default function FacultyTablesOne() {
    const [facultyData, setFacultyData] = useState<Faculty[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate(); 

    useEffect(() => {
        // Thêm từ khóa async vào đây
        const loadFacultyData = async () => {
          try {
            const data = await fetchNCKHGiangVien();
            setFacultyData(data);
          } catch (err) {
    
            setError(
              err.message || "Không thể tải dữ liệu từ API. Vui lòng thử lại sau!"
            );
            console.error(err);
          } finally {
            setLoading(false);
          }
        };
    
        loadFacultyData();
      }, []);

    if (loading) return <div className="text-gray-500">Đang tải dữ liệu...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    const handleViewDetail = (id: number) => {
        navigate(`/xem-chi-tiet-giang-vien`); 
    };
    const handleEdit = (id: number) => {
        console.log('Sửa thông tin giảng viên:', id);
    };

    const handleDelete = (id: number) => {
        const confirmDelete = window.confirm("Bạn có muốn xóa giảng viên này không?");
        if (confirmDelete) {
            console.log("Đã xóa giảng viên với ID:", id);
        } else {
            console.log("Hủy bỏ xóa giảng viên với ID:", id);
        }
    };
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
                <div className="min-w-[1102px]">
                    <Table>
                        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                            <TableRow>
                                {/* Table Headers */}
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    ID
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    TÊN ĐỀ TÀI
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    CHỦ NHIỆM
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    TIẾN ĐỘ
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    KHOA
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    NGÀY BẮT ĐẦU
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    NGÀY KẾT THÚC
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    HÀNH ĐỘNG
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                            {tableData.map((Faculty) => (
                                <TableRow key={Faculty.maDeTai}>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {Faculty.maDeTai}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {Faculty.tenDeTai}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {Faculty.chuNhiemDeTai}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        <Badge
                                            size="sm"
                                            color={
                                                Faculty.trangThai === "Đã hoàn thành"
                                                    ? "success"
                                                    : Faculty.trangThai === "Đang Thực Hiện"
                                                    ? "warning"
                                                    : "error"
                                            }
                                        >
                                            {Faculty.trangThai}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        {Faculty.khoa}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        {Faculty.ngayBatDau}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        {Faculty.ngayKetThuc}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400 flex ml-4 ">
                                        <div className="flex items-center gap-2">
                                            {/* Nút Xem chi tiết */}
                                            <button
                                                className="text-blue-600 hover:text-blue-900 transition-colors"
                                                onClick={() => handleViewDetail(Faculty.id)}
                                            >
                                                <FiEye className="w-4 h-4" />
                                            </button>

                                            {/* Nút Xóa */}
                                            <button
                                                className="text-red-600 hover:text-red-900 transition-colors"
                                                onClick={() => handleDelete(Faculty.id)}
                                            >
                                                <FiTrash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
