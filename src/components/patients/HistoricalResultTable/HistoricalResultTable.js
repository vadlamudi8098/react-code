import React from 'react';
import './HistoricalResultTable.css';
import {
    Switch,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from "@material-ui/core";

const HistoricalResultTable =()=>{
    const headerColumn = ["April 29, 2020", "Mar 20, 2020", "Trend"];
    const tableStyles={
        tableStyle:{
            border: '1px solid grey'
        },
        tableCellStyle:{
            minWidth: "1em", backgroundColor:'#b6e2e6',fontWeight: "bold"
        }
    }  

    return(
        <div className="historical-result-table-container">
            <div className="historical-result-header-row">
                <span className="font-weight-bold">Historical Result</span>
                <div className="historical-result-icons-row">
                    <span className="">Table</span>
                    <span className="">Graph</span>
                </div>
            </div>
            <div className="data-table-container">
        <Table style={tableStyles.tableStyle} stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {headerColumn.map((column, index) => (
                <TableCell 
                  key={index}
                  // align={column.align}
                  style={tableStyles.tableCellStyle}
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>WBC</TableCell>
              <TableCell>WBC</TableCell>
              <TableCell>WBC</TableCell>             
            </TableRow>
          </TableBody>
        </Table>
      </div>
        </div>

    )
}
export default HistoricalResultTable;