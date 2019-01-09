import React, { Component } from 'react';
import SearchInput from '../SearchInput';
import ItemRow from '../ItemRow';

// ItemTable component
class ItemTable extends Component {
    render() {
        const { items, search, onSearchChange, toggleHealthy, toggleDelicious, log } = this.props;
        const IDs = Object.keys(items);
        // Filter items according to search
        const filteredIDs = !search ? IDs : IDs.filter(id => items[id].label.toLowerCase().includes(search));

        return <table className="table table-dark table-hover table-striped">
            <thead className="thead-dark">
                <tr>
                    <th>Food</th>
                    <th>Healthy?</th>
                    <th>Delicious?</th>
                </tr>
            </thead>
            <tbody>
                {filteredIDs.map(id => <ItemRow key={id} item={items[id]} toggleHealthy={() => toggleHealthy(id)} toggleDelicious={() => toggleDelicious(id)} />)}
                <tr>
                    <td colSpan="2">
                        <SearchInput label="Search" value={search} onChange={onSearchChange} />
                    </td>
                    <td>
                        <button className="btn btn-danger" onClick={log}>Log</button>
                    </td>
                </tr>
            </tbody>
        </table>;
    }
}

export default ItemTable;
