import React from 'react';

import ArtifactsList from '../../containers/ArtifactsList';
import PluginsList from '../../containers/PluginsList';
import Directory from '../../containers/Directory';
import Loading from '../../containers/Loading';
import JobList from '../../containers/JobList';

const App = ({ connected }) => (
    <div>
        <Loading loaded={connected} />
        <div className="container">
            <div className="page-header">
                <Directory />
            </div>
            <PluginsList />
            <br />
            <JobList />
            <ArtifactsList />
        </div>
    </div>
);

App.propTypes = {
    connected: React.PropTypes.bool.isRequired
};

export default App;
