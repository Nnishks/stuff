import * as React from 'react'
import  { Suspense } from "react"
import { Box } from "@mui/material"
import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      fontWeight: "bold",
      fontSize: "15px",
      color: "#8898aa",
    },
  })
)

export default function Address(props) {
  const { label, addressData } = props
  const classes = useStyles()

  const {
    address = "",
    city = "",
    stateprovince = "",
    postalcode = "",
    country = "",
  } = addressData || {}

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {address && (
        <Box>
          <span className={classes.label}>{label}</span>
          <Box>{address}</Box>
          <Box>
            {city ? city + ", " : ""} {stateprovince ? stateprovince + ", " : ""} {postalcode}
          </Box>
          <Box>{country}</Box>
        </Box>
      )}
    </Suspense>
  )
}
