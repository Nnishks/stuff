import { Box, Button, Snackbar } from "@mui/material"
import { forwardRef, PropsWithoutRef, ReactNode, useEffect, useState } from "react"
import { FormProvider, useForm, UseFormProps } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import MuiAlert, { AlertProps } from "@mui/material/Alert"
//@ts-ignore
export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
  /** All your form fields */
  children?: ReactNode
  /** Text to display in the submit button */
  submitText?: string
  schema?: S
  onSubmit: (values: z.infer<S>) => Promise<void | OnSubmitResult>
  initialValues?: UseFormProps<z.infer<S>>["defaultValues"]
  handleClose?: () => void
}

interface OnSubmitResult {
  FORM_ERROR?: string
  [prop: string]: any
}

export const FORM_ERROR = "FORM_ERROR"

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  schema,
  initialValues,
  onSubmit,
  ...props
}: FormProps<S>) {
  const ctx = useForm<z.infer<S>>({
    mode: "onBlur",
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues: initialValues,
  })
  const [formError, setFormError] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (formError) {
      setOpen(true)
    }
  }, [formError])
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }
  return (
    // @ts-ignore
    <FormProvider {...ctx} defaultValues={initialValues}>
      <form
        onSubmit={ctx.handleSubmit(async (values) => {
          const result = (await onSubmit(values)) || {}
          for (const [key, value] of Object.entries(result)) {
            if (key === FORM_ERROR) {
              setFormError(value)
              setOpen(true)
            } else {
              ctx.setError(key as any, {
                type: "submit",
                message: value,
              })
            }
          }
        })}
        className="form"
        {...props}
      >
        {/* Form fields supplied as children are rendered here */}
        {children}

        {/* {formError && (
          <div role="alert" style={{ color: "red" }}>
            {formError}
          </div>
        )} */}
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={open}
          autoHideDuration={10000}
          onClose={handleClose}
        >
          <Alert onClose={() => handleClose} severity="error">
            {`We hit a snag! Contact Administrator if you are not sure about next step. Error Message`}
            {formError}
          </Alert>
        </Snackbar>

        {submitText && (
          <Box mt={2}>
            <Button
              type="submit"
              disabled={ctx.formState.isSubmitting}
              variant="contained"
              color="primary"
            >
              {submitText}
            </Button>
          </Box>
        )}
      </form>
    </FormProvider>
  )
}

export default Form
