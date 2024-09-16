import { FinControl } from '../FinControl/FinControl';
import { Support } from '../Support/Support';
import { Button } from '../Button/Button';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <FinControl />
            <Support />
            <Button text="Связаться" className={styles.sidebarButton} onClick={() => console.log('Кнопка нажата')}/>
        </div>
    )
}

