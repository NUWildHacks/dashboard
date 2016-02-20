import React from 'react';
import ReachDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';

//Sample Table Data --> will need to be changed later
class MyTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTableData: [
        {name: 'Rylan'},
        {name: 'Amelia'},
        {name: 'Estevan'},
        {name: 'Florence'},
        {name: 'Tressa'},
      ],
    };
  }

  render() {
    return (
      <Table
        rowsCount={this.state.myTableData.length}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}>
        <Column
          header={<Cell>Name</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.state.myTableData[props.rowIndex].name}
            </Cell>
          )}
          width={200}
        />
      </Table>
    );
  }
}

myTableData: [
  {name: 'Rylan'},
  {name: 'Amelia'},
  {name: 'Estevan'},
  {name: 'Florence'},
  {name: 'Tressa'},
];

ReactDOM.render(
  <FilterableProductTable data={myTableData} />,
  document.getElementById('container')
);
