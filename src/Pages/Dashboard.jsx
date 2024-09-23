import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { Filters } from "../components/Filters/Filters";
import { Table } from "../components/Table/Table";
import { Footer } from "../components/Footer/Footer";
import styles from './Dashboard.module.css'

export const DashboardPage = () => {
    return (
        <div className={styles.dashboard}>
            <Sidebar />
            <div className={styles.content}>
                <Header />
                <Filters />
                <Table />
                <Footer />
            </div>
        </div>
    )
}