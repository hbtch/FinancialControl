import React, { useState } from 'react';
import styles from './Table.module.css';
import { Button } from '../Button/Button';

export const Table = () => {
    const [data, setData] = useState([]);

    const handleExport = async () => {
        try {
            const response = await fetch('/data.json'); // Укажите правильный путь к data.json
            const jsonData = await response.json();
            setData(jsonData); // Обновляем состояние с новыми данными
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
        }
    };

    const totalQuantity = data.reduce((sum, row) => sum + row.product_quantity, 0);
    const totalPrice = data.reduce((sum, row) => sum + (row.product_quantity * row.price), 0);

    return (
        <div className={styles.tableContainer}>
            <Button 
                text="Экспорт" 
                onClick={handleExport} 
                className={styles.exportButton} 
            />
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Баркод</th>
                            <th>Бренд</th>
                            <th>Название продукта</th>
                            <th>Количество</th>
                            <th>Цена</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.id}>
                                <td>{row.barcode}</td>
                                <td>{row.product_brand}</td>
                                <td>{row.product_name}</td>
                                <td>{row.product_quantity}</td>
                                <td>{row.price}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">Итого:</td>
                            <td>{totalQuantity}</td>
                            <td>{totalPrice}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};
