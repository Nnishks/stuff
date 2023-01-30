import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Box, CardActions, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  card: {
    height: 250,
    width: 350,
  },
  btnContainer: {
    marginTop: -10,
    marginBottom: 10
  },
  actionBtn: {
    textTransform: 'none',
    margin: 5,
    fontSize: 10
  }
}))

interface AssetCatalogCardProps {
  catalog: {
    name: string
    primarytrade: string
  }
}

export default function AssetCatalogCard(props: AssetCatalogCardProps) {
  const { catalog } = props
  const classes = useStyles ()
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="120"
        image="/assets/images/asset.jpeg"
      />
      <CardContent style={{ marginTop: -10}}>
        <Typography gutterBottom variant="caption" component="span">
          {catalog.primarytrade}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          {catalog.name}
        </Typography>
      </CardContent>
      <CardActions style={{ marginTop: -10}}>
        <Button size="small" variant="outlined"  className={classes.actionBtn}>
          Asset List
        </Button>
        <Button size="small" variant="outlined"  className={classes.actionBtn}>
          WO History
        </Button>
        <Button size="small" variant="outlined"  className={classes.actionBtn}>
          Add WO
        </Button>
      </CardActions>
    </Card>
  )
}
