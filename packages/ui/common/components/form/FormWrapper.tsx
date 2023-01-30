import { Form, FORM_ERROR } from "./Form"
import { z } from "zod"
import GenerateForm from "./GenerateForm"
import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { AppConstants } from "../../constants/AppConstants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(1),
        width: "95%",
      },
    },
  })
)
const dataSourceTypes = [
  AppConstants.fieldTypes.searchWithImage,
  AppConstants.fieldTypes.dropdownWithStaticImage,
  AppConstants.fieldTypes.dropdownWithDBSource,
  AppConstants.fieldTypes.search,
]

export function FormWrapper<S extends z.ZodType<any, any>>(props: any) {
  const classes = useStyles()
  const schema = props.formSchema

  return (
    <Form<S> {...props} className={classes.root} initialValues={props.initialValues}>
      <GenerateForm
        schema={schema}
        handleClose={props.handleClose}
        initialValues={props.initialValues}
        showPopulateDefault={props.showPopulateDefault}
      />
    </Form>
  )
}
