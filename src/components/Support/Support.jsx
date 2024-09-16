import styles from './Support.module.css';

export const Support = () => {
    return (
        <div className={styles.support}>
            <div className={styles.supportHeader}>
                <p>Техническая поддержка</p>
            </div>
            <div className={styles.supportInfo}>
                <p className={styles.contactInfo}>Номер поддержки: <a href="tel:+89999999999">8 (999) 999 99 99</a></p>
                <p className={styles.contactInfo}>Почта поддержки: <a href="mailto:pf1@werthesest.ru">pf1@werthesest.ru</a></p>
                <p>Часы работы: ПН - ПТ с 9:00 до 19:00 МСК</p>
            </div>
            <div className={styles.links}>
                <ul className={styles.linkList}>
                    <li><a href="#">Пользовательское соглашение</a></li>
                    <li><a href="#">Политика конфиденциальности</a></li>
                    <li><a href="#">Юридическая информация</a></li>
                    <li><a href="#">Публичная оферта</a></li>
                </ul>
            </div>
        </div>
    );
};
