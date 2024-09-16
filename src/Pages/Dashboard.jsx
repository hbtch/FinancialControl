import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { Table } from "../components/Table/Table";
import { Footer } from "../components/Footer/Footer";
import styles from './Dashboard.module.css'

export const DashboardPage = () => {
    return (
        <div className={styles.dashboard}>
            <Sidebar />
            <div className={styles.content}>
                <Header />
                <Table />
                <Footer />
            </div>
        </div>
    )
}