import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../ui/table";
import Badge from "../../ui/badge/Badge";
import { FiEye, FiEdit, FiTrash2,FiClock } from "react-icons/fi";

interface Faculty {
    id: number;
    nameProject: string;
    facultyName: string;
    status: string;
    science: string;
    startDate: string;
    endDate: string;
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
    const navigate = useNavigate();

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
    const handleClock = (id: number) => {
        navigate(`/cap-nhat-tien-do-gv`)
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
                                <TableRow key={Faculty.id}>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {Faculty.id}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {Faculty.nameProject}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {Faculty.facultyName}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        <Badge
                                            size="sm"
                                            color={
                                                Faculty.status === "Đã hoàn thành"
                                                    ? "success"
                                                    : Faculty.status === "Đang Thực Hiện"
                                                        ? "warning"
                                                        : "error"
                                            }
                                        >
                                            {Faculty.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        {Faculty.science}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        {Faculty.startDate}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        {Faculty.endDate}
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
                                            <button
                                                className="text-purple-600 hover:text-purple-900 transition-colors"
                                                onClick={() => handleClock(Faculty.id)}
                                            >
                                                <FiClock className="w-4 h-4" />
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
