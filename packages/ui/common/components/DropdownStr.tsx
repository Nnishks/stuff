import * as React from 'react'
import { Suspense } from "react"
import TextField from "@mui/material/TextField"
import Autocomplete from '@mui/material/Autocomplete'


export default function DropdownStr(props) {
  const { name, label, options = [], required, handleChange, variant, value, disabled } = props
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Autocomplete
        options={options}
        getOptionLabel={(option: any) => option}
        onChange={handleChange}
        disabled={disabled}
        value={value}
        style={{ fontSize: "5px !important" }}
        {...props}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            name={name}
            variant={variant}
            required={required}
            label={label}
            placeholder={label}
          />
        )}
      />
    </Suspense>
  )
}
