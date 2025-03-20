import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import ScienceTables from "./pages/Tables/ScienceTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import AddFaculty from './pages/Faculty/AddFaculty';
import AddScience from './pages/Science/AddScience';
import UpdateScience from './pages/Science/UpdateScience';
import AddMagazine from './pages/Magazine/AddMagazine';
import MagazineTables from './pages/Tables/MagazineTables';
import StudentTables from './pages/Tables/StudentTables';
import FacultyTables from './pages/Tables/FacultyTables';
import NewTopicFormStudent from "./pages/Student/NewTopicFormStudent";
import NewTopicFormFaculty from "./pages/Faculty/NewTopicFormFaculty";
import SignInForm from "./components/auth/SignInForm";
import UdateMagazine from "./pages/Magazine/UdateMagazine";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Auth Routes (không cần đăng nhập) */}
        <Route path="/" element={<SignInForm />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes (yêu cầu đăng nhập) */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Home />} />

          {/* Others Page */}
          <Route path="/profile" element={<UserProfiles />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/blank" element={<Blank />} />

          {/* Forms */}
          <Route path="/form-elements" element={<FormElements />} />

          {/* Tables */}
          <Route path="/basic-tables" element={<BasicTables />} />
          <Route path="/science-tables" element={<ScienceTables />} />

          {/* Ui Elements */}
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/avatars" element={<Avatars />} />
          <Route path="/badge" element={<Badges />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/images" element={<Images />} />
          <Route path="/videos" element={<Videos />} />

          {/* Charts */}
          <Route path="/line-chart" element={<LineChart />} />
          <Route path="/bar-chart" element={<BarChart />} />

          {/* Faculty */}
          <Route path="/giang-vien" element={<BasicTables />} />
          <Route path="/them-giang-vien" element={<AddFaculty />} />

          {/* Science */}
          <Route path="/dang-ki-khoa-hoc" element={<AddScience />} />
          <Route path="/cap-nhat-khoa-hoc" element={<UpdateScience />} />

          {/* Đề tài nghiên cứu */}
          <Route path="/sinh-vien-nghien-cuu" element={<StudentTables />} />
          <Route path="/giang-vien-nghien-cuu" element={<FacultyTables />} />
          <Route path="/sinh-vien-nckh" element={<NewTopicFormStudent />} />
          <Route path="/giang-vien-nckh" element={<NewTopicFormFaculty />} />

          {/* Tạp chí ấn phẩm */}
          <Route path="/an-pham" element={<MagazineTables />} />
          <Route path="/cap-nhat-an-pham" element={<UdateMagazine />} />
          <Route path="/dang-ki-an-pham" element={<AddMagazine />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
