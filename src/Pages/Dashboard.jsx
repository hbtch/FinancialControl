import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { Table } from "../components/Table/Table";
import { Footer } from "../components/Footer/Footer";

export const DashboardPage = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="content">
                <Header />
                <Table />
                <Footer />
            </div>
        </div>
    )
}