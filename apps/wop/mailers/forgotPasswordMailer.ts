/* TODO - You need to add a mailer integration in `integrations/` and import here.
 *
 * The integration file can be very simple. Instantiate the email client
 * and then export it. That way you can import here and anywhere else
 * and use it straight away.
 */
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
type ResetPasswordMailer = {
  to: string
  token: string
}

export function forgotPasswordMailer({ to, token }: ResetPasswordMailer) {
  // In production, set APP_ORIGIN to your production server origin
  const origin = process.env.APP_ORIGIN || process.env.BLITZ_DEV_SERVER_ORIGIN
  const resetUrl = `${origin}/reset-password?token=${token}`

  const msg = {
    from: { name: "NexFMx", email: "support@nexfmx.io" },
    to,
    subject: "Password reset request",
    html: `
    <div>
    <p>Hello,</p>
    <p>We’ve received a request to reset the password for your NexFMx account.</p>
    <p>You can reset your password by clicking the link <a href="${resetUrl}">here</a></p>
    <p>This link will expire in 48 hours. After that, try to reset your password again from login page or please reply to this email for assistance.</p>
    <p>If you need more help or believe this email was sent in error, feel free to reply to this email.</p>
    <p>- The NexFMx team</p>
    </div>
    `,
  }

  return {
    async send() {
      // if (process.env.NODE_ENV === "production") {
      // TODO - send the production email, like this:
      // await postmark.sendEmail(msg)
      sgMail
        .send(msg)
        .then((response) => {
          console.log(response[0].statusCode)
          console.log(response[0].headers)
        })
        .catch((error) => {
          console.error(error)
        })
      //throw new Error("No production email implementation in mailers/forgotPasswordMailer")
      // } else {
      //   sgMail
      //     .send(msg)
      //     .then((response) => {
      //       console.log(response[0].statusCode)
      //       console.log(response[0].headers)
      //     })
      //     .catch((error) => {
      //       console.error(error)
      //     })
      //   // Preview email in the browser
      //   // await previewEmail(msg)
      // }
    },
  }
}
