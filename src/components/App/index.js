import React, { Component } from 'react';
import ItemTable from '../ItemTable';
import './index.css';

// Data
const Items = {
    e5d9d9f5: {
        label: 'Ice Cream',
        isDelicious: true,
        isHealthy: false,
    },
    a9ba692b: {
        label: 'Pizza',
        isDelicious: true,
        isHealthy: false,
    },
    ze128a47: {
        label: 'Spinach',
        isDelicious: false,
        isHealthy: true,
    },
};

// App component
class App extends Component {

    // Constructor
    constructor() {
        super();

        // Load items from localStorage or use default items
        var itemsFromStorage = localStorage.getItem('items');
        this.state = {
            items: itemsFromStorage ? JSON.parse(itemsFromStorage) : Items,
            search: ''
        };

        // Bind handlers context
        this.log = this.log.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.toggleHealthy = this.toggleHealthy.bind(this);
        this.toggleDelicious = this.toggleDelicious.bind(this);
    }

    // Save state to localStorage
    save(state) {
        localStorage.setItem('items', JSON.stringify(state.items));

        return state;
    }

    // Log inventory button handle
    log() {
        console.log('Current inventory:');
        console.log(this.state.items);
    }

    // On search input value changed
    onSearchChange(e) {
        this.setState({ ...this.state, search: e.target.value && e.target.value.toLowerCase() });
    }

    // Toggle item's isHealthy field
    toggleHealthy(id) {
        this.setState(this.save({ ...this.state, items: { ...this.state.items, [id]: { ...this.state.items[id], isHealthy: !this.state.items[id].isHealthy } } }));
    }

    // Toggle item's isDelicious field
    toggleDelicious(id) {
        this.setState(this.save({ ...this.state, items: { ...this.state.items, [id]: { ...this.state.items[id], isDelicious: !this.state.items[id].isDelicious } } }));
    }

    // Render
    render() {
        const { items, search } = this.state;

        return <div className="app">
            <ItemTable items={items} search={search} onSearchChange={this.onSearchChange} toggleDelicious={this.toggleDelicious} toggleHealthy={this.toggleHealthy} log={this.log} />
        </div>;
    }
}

export default App;
