import { Button } from '../Button/Button';
import styles from './FinControl.module.css';
import SettingsIcon from '@mui/icons-material/Settings';
import DnsIcon from '@mui/icons-material/Dns';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SchoolIcon from '@mui/icons-material/School';

export const FinControl = () => {
    return (
        <div className={styles.finControl}>
            <div class={styles.finControlHeader}>
                <p>ФИН контроль</p>
                <Button text="Меню" onClick={() => console.log('Меню нажато')}/>
            </div>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <SettingsIcon className={styles.icon} />
                    <span>Настройки</span>
                </li>

                <li className={styles.navItem}>
                    <DnsIcon className={styles.icon} />
                    <span>Внесение данных</span>
                </li>
                
                <li className={styles.navItem}>
                    <ReceiptLongIcon className={styles.icon} />
                    <span>Отчеты</span>
                </li>

                <li className={styles.navItem}>
                    <SchoolIcon className={styles.icon} />
                    <span>База знаний</span>
                </li>
            </ul>
        </div>
    );
};