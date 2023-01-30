import { useMutation } from "@blitzjs/rpc";
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import signup from "app/auth/mutations/signup"
import { Signup } from "app/auth/validations"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import CardHeader from "@mui/material/CardHeader"
import Button from "@mui/material/Button"
import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import CssBaseline from "@mui/material/CssBaseline"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

type SignupFormProps = {
  onSuccess?: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  form: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(3),
  },
  leftContainer: {
    width: "100%",
    margin: theme.spacing(10),
  },
  loginCard: {
    width: "100%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup)
  const classes = useStyles()
  return (
    <Box>
      <Grid container className={classes.root}>
        <Grid md={12} lg={6} justifyContent="center" alignContent="center" container>
          <Box
            justifyContent="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            className={classes.leftContainer}
          >
            <Typography component="h1" variant="h1">
              Create an Account
            </Typography>
            <Card className={classes.loginCard} raised>
              <Form
                submitText="Create Account"
                className={classes.form}
                schema={Signup}
                initialValues={{ name: "", email: "", phone: "", password: "" }}
                onSubmit={async (values) => {
                  try {
                    await signupMutation(values)
                    props.onSuccess?.()
                  } catch (error) {
                    if (error.code === "P2002" && error.meta?.target?.includes("email")) {
                      // This error comes from Prisma
                      return { email: "This email is already being used" }
                    } else {
                      return { [FORM_ERROR]: error.toString() }
                    }
                  }
                }}
              >
                <LabeledTextField name="name" label="First Name" placeholder="firstname" />
                <LabeledTextField name="email" label="Email" placeholder="Email" />
                <LabeledTextField name="phone" label="Phone" placeholder="phone" />
                <LabeledTextField
                  name="password"
                  label="Password"
                  placeholder="Password"
                  type="password"
                />
              </Form>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SignupForm
