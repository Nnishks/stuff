import * as React from 'react'
import  { Suspense } from "react"
import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import TextField from "@mui/material/TextField"
import SearchIcon from "@mui/icons-material/Search"
import Autocomplete from '@mui/material/Autocomplete'
import { Controller } from "react-hook-form"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    field: {
      //  width: "50%",
    },
    searchIcon: {
      transform: "initial",
    },
  })
)

export default function AutoCompleteWithSearch(props) {
  const { field, register, defaultValues = {} } = props
  const classes = useStyles()
  const data: any = field.dataSource
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div key={field.name} className={classes.field}>
        <Controller
          //  key={fieldKey}
          control={props.control}
          name={field.name}
          render={({ field: { value, onChange } }) => (
            <Autocomplete
              options={data}
              disabled={field.disabled}
              getOptionLabel={field.getOptionLabel}
              value={data.find((item) => field.getOptionLabel(item) === defaultValues[field.name])}
              popupIcon={<SearchIcon />}
              forcePopupIcon
              classes={{
                popupIndicatorOpen: classes.searchIcon,
              }}
              onChange={(e, data) => {
                onChange(data)
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  size="small"
                  label={field.label}
                  required={field.required}
                  placeholder={field.label}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...register(field.name)}
                />
              )}
            />
          )}
        />
      </div>
    </Suspense>
  )
}
