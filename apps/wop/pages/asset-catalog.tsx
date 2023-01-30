// ** MUI Imports
import { BlitzPage } from "@blitzjs/next"
import { Add, GridView, List, Search } from "@mui/icons-material"
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material"
import { createStyles, makeStyles } from "@mui/styles"
import {Dropdown} from "shared-ui"
import AppLayout from "app/core/layouts/AppLayout"
import AssetCatalogCard from "app/assetcatalog/components/AssetCatalogCard"
import { updateHeaderText } from "app/store/slices/commonSlice"
import { useDispatch } from "react-redux"
import { useQuery } from "@blitzjs/rpc"
import getAssetCatalogs from "app/assetcatalog/queries/getAssetCatalogs"

// styles
const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    spacing: {
      [theme.breakpoints.down("sm")]: {
        margin: "10px",
      },
    },
  })
)

const AssetCatalog: BlitzPage = () => {
  const dispatch = useDispatch()
  dispatch(updateHeaderText("Asset Catalog"))
  const classes = useStyles()
  const [{ assetCatalogs }] = useQuery(getAssetCatalogs, {}, { refetchOnWindowFocus: false }) || []
  console.log(assetCatalogs)
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<Add />}
        className="global-btn"
      >
        Asset Category
      </Button>
      <Box className={classes.container}>
        <Grid container>
          <Grid xs={12} md={12} lg={2.5} className={classes.spacing}>
            <Dropdown
              label="Store #"
              name="storeNo"
              variant="outlined"
              options={["2022", "2021", "2020"]}
            />
          </Grid>
          <Grid xs={12} md={12} lg={2.5} ml={2} className={classes.spacing}>
            <Autocomplete
              options={[]}
              value={"test"}
              popupIcon={<Search />}
              forcePopupIcon
              onChange={(e, data) => {}}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  size="small"
                  label={"Asset category"}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>
          <Grid xs={12} md={12} lg={2.5} ml={2} className={classes.spacing}>
            <Dropdown
              label="Primary Trade"
              name="primaryTrade"
              variant="outlined"
              options={["trade1", "trade2"]}
            />
          </Grid>
          <Grid xs={12} md={12} lg={2.5} ml={5}>
            <FormControlLabel

              control={<Checkbox defaultChecked size="small" />}
              label="Assets With Open WO's"
            />
          </Grid>
          <Grid xs={12} md={12} lg={1.5} style={{ textAlign: "right" }}>
            <ToggleButtonGroup
              exclusive
              value={"right"}
              size={"small"}
              color={"primary"}
              style={{
                color: "red !important",
              }}
              // onChange={handleAlignment}
            >
              <ToggleButton value="left" aria-label="left aligned">
                <GridView />
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered">
                <List />
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={5} mt={2}>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {assetCatalogs.map((catalog) => {
              return (
                <Grid item lg={4} md={6} sm={6} xs={12} key={catalog.id}>
                  <AssetCatalogCard catalog={catalog} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

AssetCatalog.authenticate = true
AssetCatalog.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default AssetCatalog
