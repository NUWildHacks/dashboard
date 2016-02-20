import React from 'react';
import ReachDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';

//Sample Table Data --> will need to be changed later
const rows = [ [const rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3'],
  // .... and more
];

// RENDERING
ReactDOM.render(
  <Table
  	rowHeight = {50}
  	num_rows = {rows.length}
  	width = {5000}
  	height = {5000}
  	headerHeight = {50}>
  	<Column
      header = {<Cell> Col 1</Cell}
      cell - {<cell> Column 1 static content </Cell>}
      width = {2000}
    />
    <Column
      header={<Cell>Col 2</Cell>}
      cell={<MyCustomCell mySpecialProp="column2" />}
      width={1000}
    />
    <Column
      header={<Cell>Col 3</Cell>}
      cell={({rowIndex, ...props}) => (
        <Cell {...props}>
          Data for column 3: {rows[rowIndex][2]}
        </Cell>
      )}
      width={2000}
    />
  </Table>,
  document.getElementById('example')
);
