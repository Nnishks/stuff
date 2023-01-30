import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import * as React from 'react'
import { Suspense } from "react"
import TextField from "@mui/material/TextField"
import Autocomplete from '@mui/material/Autocomplete'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    field: {
    },
  })
)

export default function Dropdown(props) {
  const { name, label, options = [], required, handleChange, variant } = props
  const classes = useStyles()
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={classes.field}>
        <Autocomplete
          options={options}
          getOptionLabel={(option: any) => option.name}
          onChange={handleChange}
          style={{ fontSize: "5px !important" }}
          {...props}
          renderInput={(params) => (
            <TextField
              {...params}
              className={classes.field}
              size="small"
              variant={variant}
              required={required}
              label={label}
              placeholder={label}
            />
          )}
        />
      </div>
    </Suspense>
  )
}
