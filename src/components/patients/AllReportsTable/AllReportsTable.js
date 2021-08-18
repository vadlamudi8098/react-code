import {
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import CircleWithLineComponent from "../../CircleWithLineComponent/CircleWithLineComponent";
import "./AllReportsTable.css";

const tableStyles={
    tableStyle:{
        border: '1px solid grey'
    },
    tableCellStyle:{
        minWidth: "1em", backgroundColor:'#b6e2e6',fontWeight: "bold"
    }
}

const AllReportsTable = () => {
  const headerColumn = ["Test", "Result", "Ref.Range", "Visual Ref.Range"];
  return (
    <div className="all-reports-table-container">
      <div className="all-reports-visual-ref-row">
        <span className="font-weight-bold">Current result (Jul 13,2021)</span>
        <div>
          <label className="font-weight-bold">Visual Ref Range On</label>{" "}
          <Switch
            // checked={state.checkedB}
            // onChange={handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
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
              <TableCell>
                <CircleWithLineComponent />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default AllReportsTable;
