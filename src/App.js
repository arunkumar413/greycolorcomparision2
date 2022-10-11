import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h2> Dark and light grey color comparision </h2>
      <div className="container">
        <div className="darkgreys">
          <h1 className="gray">gray</h1>
          <h1 className="darkgray">darkgray</h1>
          <h1 className="darkslategray">darkslategray</h1>
          <h1 className="dimgray">dimgray</h1>
          <h1 className="lightgray">lightgray</h1>
          <h1 className="lightslategray">lightslategray</h1>
          <h1 className="slategray">slategray</h1>
        </div>

        <div className="lightgreys">
          <h1 className="grey">grey</h1>
          <h1 className="darkgrey">darkgrey</h1>
          <h1 className="darkslategrey">darkslategrey</h1>
          <h1 className="dimgrey">dimgrey</h1>
          <h1 className="lightgrey">lightgrey</h1>
          <h1 className="lightslategrey">lightslategrey</h1>
          <h1 className="slategrey">slategrey</h1>
        </div>
      </div>
    </div>
  );
}
