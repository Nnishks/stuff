import * as React from "react";
import { useMemo, useEffect, useState } from "react"
import makeStyles from "@mui/styles/makeStyles"
import { AgGridReact } from "ag-grid-react"
import { CsvExportModule } from "ag-grid-community"
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "10px",
    height: "100%",
    width: "100%",
  },
  wrapperContainer: {
    height: "100%",
    width: "100%",
    // border: `1px solid #dedada`,
  },
}))

function GridWrapper(props: any) {
  // never changes, so we can use useMemo
  const modules = useMemo(() => [ClientSideRowModelModule, CsvExportModule], [])
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperContainer}>
        <AgGridReact
          reactUi="true"
          // all other properties as normal...
          className="ag-theme-material"
          animateRows="true"
          modules={modules}
          {...props}
        />
      </div>
    </div>
  )
}
export { GridWrapper }
