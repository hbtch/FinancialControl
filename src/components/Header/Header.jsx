import { Button } from '../Button/Button';
import styles from './Header.module.css';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerUserInfo}>
                <SupervisorAccountIcon className={styles.userIcon} />
                <p>Иванов И.И</p>
                <div className={styles.headerTariff}>
                    <CalendarMonthIcon className={styles.tariffIcon} />
                    <p>Тариф до 15.04.24</p>
                </div>
            </div>

            <div className={styles.headerButtonGroup}>
                <Button 
                    text="Выйти" 
                    className={styles.buttonGetOut} 
                />
                <Button 
                    text="О нас" 
                    className={styles.buttonAboutUs} 
                />
            </div>
        </div>
    );
};