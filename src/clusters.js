import React from 'react';
import Layout from '../components/layout'

function Cluster(props) {
  return (
    <Layout>
        <div className="iframe-container" referrerPolicy="no-referrer" width="100%">
        <iframe title="clusters" src="https://cluster.covid19india.org"></iframe>
        </div>
    </Layout>
  );
}

export default Cluster;
