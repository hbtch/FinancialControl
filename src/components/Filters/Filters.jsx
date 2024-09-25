import { Button } from '../Button/Button';
import styles from './Filters.module.css';

export const Filters = () => {
    // Получаем текущую дату
    const currentDate = new Date();
    
    // Форматируем дату как "дд.мм.гггг"
    const formattedDate = currentDate.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    return (
        <div className={styles.filters}>
            <h1>Остатки сформированы на {formattedDate} г.</h1>
            <div className={styles.filterInputs}>
                <input type="text" placeholder="Баркод" />
                <input type="text" placeholder="Артикул" />
                <input type="text" placeholder="Размер" />
                <input type="text" placeholder="Категория" />
            </div>
        </div>
    );
};
