import { Box, TextField, Typography } from "@mui/material"
import {  PropsWithoutRef } from "react"
import { useFormContext } from "react-hook-form"

export interface LabeledTextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  color?: any
  size?: any
  margin?: any
  multiline?: boolean
  rows?: number
}

export const LabeledTextField = (
  ({ label, name, ...props }, ref) => {
    const {
      register,
      formState: { isSubmitting, errors },
    } = useFormContext()
    const error = Array.isArray(errors[name])
      ? (errors[name] as any).join(", ")
      : errors[name]?.message || errors[name]

    return (
      <Box  mt={2}>
        <label>
          <Typography variant="body2" style={{ marginLeft: 5, marginBottom: -5 }}>
            {label}
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            disabled={isSubmitting}
            {...register(name)}
            {...props}
          />
        </label>

        {error && (
          <div role="alert" style={{ color: "red" }}>
            {error}
          </div>
        )}
      </Box>
    )
  }
)

export default LabeledTextField
