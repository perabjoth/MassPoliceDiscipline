import React, { useState } from 'react';
import OfficerTable from './OfficerTable';
import SearchBar from './Searchbar';
import './App.css';
import officerData from './data/officerData.json';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
      setSearchQuery(query);
  };

    const filteredData = officerData.filter((item) =>
        searchQuery.trim() == "" || (item.LastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.FirstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ReportingAgency?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.Allegation_Type?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.FirstName?.toLowerCase().concat(' ').concat(item.LastName?.toLowerCase()).includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="App">
            <h1>Massachusetts Police Officer Disciplinary Actions</h1>
            <p>Data is publicly sourced from <a href="https://mapostcommission.gov/discipline-status-records/disciplinary-records/" target='_blank'>Officer Disciplinary Records Database</a></p>
            <SearchBar onSearch={handleSearch} />
            <OfficerTable data={filteredData} />
        </div>
    );
}

export default App;
