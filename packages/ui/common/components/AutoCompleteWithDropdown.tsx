import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import TextField from "@mui/material/TextField"
import Autocomplete from '@mui/material/Autocomplete'
import { Suspense } from "react"
import { Controller } from "react-hook-form"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    field: {
      //   width: "50%",
    },
    searchIcon: {
      transform: "initial",
    },
  })
)

export default function AutoCompleteWithDropdown(props) {
  const { field, register, getValues, defaultValues = {}, watch } = props
  const classes = useStyles()
  const data: any = field.dataSource
  const defValues = defaultValues.map((item) => {
    return {
      [field.key]: item,
    }
  })

  let options = [...data, ...(field.showDefault ? defValues : [])]
  const getValue = () => {
    if (typeof getValues(field.name) === "string") {
      return options.find((item) => item[field.key] === getValues(field.name))
    }
    return getValues(field.name)
  }


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={classes.field} key={watch(field.name)}>
        <Controller
          render={({ field: { value, onChange } }) => (
            <Autocomplete
              disabled={field.disabled}
              options={options}
              getOptionLabel={field.getOptionLabel}
              defaultValue={
                options.find((item) => field.getOptionLabel(item) === defaultValues[field.name]) ||
                ""
              }
              onChange={(e, data) => {
                onChange(data)
              }}
              value={getValue()}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className={classes.field}
                  variant="outlined"
                  size="small"
                  required={field.required}
                  label={field.label}
                  placeholder={field.label}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          )}
          control={props.control}
          name={field.name}
        />
      </div>
    </Suspense>
  )
}
