import { FinControl } from '../FinControl/FinControl';
import { Support } from '../Support/Support';
import { Button } from '../Button/Button';
import styles from './Sidebar.module.css';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <FinControl />
            <Support />
            <Button className={styles.sidebarButton} onClick={() => console.log('Кнопка нажата')}>
                <SettingsPhoneIcon style={{marginRight: '8px' }} />
                Связаться
            </Button>
        </div>
    )
}

