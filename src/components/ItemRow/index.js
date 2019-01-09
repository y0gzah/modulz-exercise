import React from 'react';
import ToggleButton from '../ToggleButton';

// ItemRow component (stateless)
const ItemRow = ({ item, toggleHealthy, toggleDelicious }) =>
    <tr className={item.isHealthy ? 'healthy' : ''}>
        <td className={item.isDelicious ? 'delicious' : ''}>{item.label}</td>
        <td>
            <ToggleButton toggle={toggleHealthy} state={item.isHealthy} />
        </td>
        <td>
            <ToggleButton toggle={toggleDelicious} state={item.isDelicious} />
        </td>
    </tr>

export default ItemRow;
