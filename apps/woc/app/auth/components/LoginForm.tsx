import { useMutation } from "@blitzjs/rpc"
import { Form, FORM_ERROR, LabeledTextField } from "shared-ui"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"
import Welcome from "./Welcome"
import { AuthenticationError } from "blitz"
import { makeStyles } from "@mui/styles"
import { Box, Button, Card, Grid, Link, Theme, Typography, useMediaQuery } from "@mui/material"
import VerticalNavHeader from "app/core/layouts/components/navigation/VerticalNavHeader"

type LoginFormProps = {
  onSuccess?: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
  },

  leftContainer: {
    width: "100%",
    marginBottom: 30,
  },
  loginCard: {
    margin: theme.spacing(5, 0),
    width: "80%",
    maxWidth: "500px",
  },
  rightContainer: {
    textAlign: "center",
  },
  headerText: {
    color: "#032d60",
  },
  form: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(3),
  },
  welcome: {
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    padding: 10,
    textTransform: "capitalize",
  },
}))

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`©${new Date().getFullYear()} NexGen Facilities Maintenance Solutions, LLC. All rights reserved.`}
    </Typography>
  )
}

export const LoginForm = (props: LoginFormProps) => {
  const classes = useStyles()
  const [loginMutation] = useMutation(login)
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"))

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
            <VerticalNavHeader />
            <Card className={classes.loginCard} raised>
              <Form
                className={classes.form}
                noValidate
                autoComplete="off"
                schema={Login}
                initialValues={{ email: "", password: "" }}
                onSubmit={async (values) => {
                  try {
                    await loginMutation(values)
                    props.onSuccess?.()
                  } catch (error) {
                    if (error instanceof AuthenticationError) {
                      return { [FORM_ERROR]: "The email or password is incorrect. Try again!" }
                    } else {
                      return {
                        [FORM_ERROR]:
                          "Sorry, we had an unexpected error. Please try again. - " +
                          error.toString(),
                      }
                    }
                  }
                }}
              >
                <LabeledTextField
                  id="email"
                  margin="normal"
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <LabeledTextField
                  id="password"
                  margin="normal"
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  autoComplete="email"
                />
                <Grid>
                  <Grid item md style={{ textAlign: "right", marginTop: 15 }}>
                    <Link underline="hover" href={"/forgot-password"}>
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Login
                </Button>
              </Form>
            </Card>
            <Box>
              <Copyright />
            </Box>
          </Box>
        </Grid>
        {!hidden && (
          <Grid item md={12} lg={6} className={classes.welcome}>
            <Welcome />
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default LoginForm
