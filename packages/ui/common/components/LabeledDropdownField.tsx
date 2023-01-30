import { PropsWithoutRef } from "react"
import { useFormContext } from "react-hook-form"
import TextField from "@mui/material/TextField"
import { Autocomplete } from '@mui/material';

export interface LabeledDropdownFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  name: string
  label: string
  type?: "text"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  color?: any
  size?: any
  margin?: any
  options?: any
  style?: any
}

export const LabeledDropdownField = (
  ({ label, outerProps, name, options = [], ...props }) => {
    const {
      register,
      formState: { isSubmitting, errors },
    } = useFormContext()
    const error = Array.isArray(errors[name])
      ? (errors?.[name] as any).join(", ")
      : errors[name]?.message || errors[name]

    return (
      <div {...outerProps}>
        <label>
          {label}
          <Autocomplete
            options={options}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                size="small"
                fullWidth
                disabled={isSubmitting}
                {...register(name)}
                {...props}
              />
            )}
          />
        </label>

        {error && (
          <div role="alert" style={{ color: "red" }}>
            {error}
          </div>
        )}
      </div>
    )
  }
)

export default LabeledDropdownField
