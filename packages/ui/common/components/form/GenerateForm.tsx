import { Box, Checkbox, Divider, FormControlLabel, Grid, Typography } from "@mui/material"
import Button from "@mui/material/Button"
import DialogActions from "@mui/material/DialogActions"
import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import TextField from "@mui/material/TextField"
import Autocomplete from '@mui/material/Autocomplete'

// import { defaultConfigDefinition } from "app/ffasurveys/schemas/defaults.schema"
import { isEqual } from "lodash"
import { Suspense, useEffect } from "react"
import { Controller, useFormContext } from "react-hook-form"
import Confirmation from "../Confirmation"
import SectionHeader from "../SectionHeader"
import Address from "../Address"
import AutoCompleteWithDropdown from "../AutoCompleteWithDropdown"
import AutoCompleteWithSearch from "../AutoCompleteWithSearch"
import useModal from "../../hooks/useModal";
import usePrevious from "../../hooks/usePrevious";
import { AppConstants } from "../../constants/AppConstants";
import RadioButtonGroup from "../RadioButtonGroup";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    section: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      margin: "20px",
    },
    field: {
      width: "100%",
    },
    saveBtn: {
      position: "absolute",
      bottom: 0,
      right: 10,
      marginBottom: "2px",
      [theme.breakpoints.down('md')]: {
        position: "relative !important",
      },
    },
    divider: {
      height: 3,
      backgroundColor: theme.palette.secondary.light,
    },
    checkbox: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
    },
    radio: {
      paddingLeft: "10px",
    },
  })
)

export default function GenerateForm(props) {
  const {
    register,
    formState: { isSubmitting, errors },
    getValues,
    watch,
    setValue,
    control,
    // @ts-ignore
    defaultValues,
  } = useFormContext()
  const { schema, handleClose, showPopulateDefault } = props
  const classes = useStyles()
  const { toggle, isShowing } = useModal()
  const prevStoreId = usePrevious(watch("storeid"))
  const handlePopulateDefault = () => {
    toggle()
    // const defaultSchema = defaultConfigDefinition.defaultConfig
    // schema.sections.forEach((item) => {
    //   item.fields.forEach((sub) => {
    //     const fieldName = sub.name
    //     if (!getValues(fieldName) && defaultSchema[fieldName]) {
    //       setValue(fieldName, defaultSchema[fieldName])
    //     }
    //   })
    // })
  }
  // const fieldNames = useMemo(() => {
  //   const fieldNames: string[] = []
  //   schema.sections.forEach((item) => {
  //     item.fields.forEach((sub) => {
  //       fieldNames.push(sub.name as string)
  //     })
  //   })
  //   return fieldNames
  // }, [schema])

  useEffect(() => {
    // logic for auto populating the nstt popup
    if (
      schema.populateFieldsBasedOnStore &&
      watch("storeid") &&
      !isEqual(prevStoreId, watch("storeid")) &&
      typeof watch("storeid") === "object"
    ) {
      const getStore = () => {
        const store = getValues("storeid")
        setValue("region", store.region)
        setValue("facilitymanager", store.facilitymanager)
      }
      void getStore()
    }
  }, [watch("storeid")])

  return (
    <Box className={classes.root}>
      {schema.sections.map((section) => {
        return (
          <>
            <Box key={section.name}>
              <SectionHeader
                sectionId={props.initialValues?.sectionId}
                section={section}
                sectionName={schema.name}
                currentUser={{}}
                storeInfo={props.initialValues?.storeInfo ? props.initialValues?.storeInfo : {}}
              />
              <Box className={classes.section}>
                <Grid container spacing={2}>
                  {section.fields.map((field) => {
                    switch (field.type) {
                      case AppConstants.fieldTypes.checkbox:
                        return (
                          <Grid xs={12} md={6} key={field.name} className={classes.checkbox}>
                            <Controller
                              name={field.name}
                              control={control}
                              render={({ field: { value, onChange } }) => {
                                return (
                                  <>
                                    <FormControlLabel
                                      key={field.name}
                                      label={field.label}
                                      disabled={field.disabled}
                                      control={
                                        <Checkbox checked={value} onChange={(e) => onChange(e)} />
                                      }
                                    />
                                  </>
                                )
                              }}
                            />
                          </Grid>
                        )
                      case AppConstants.fieldTypes.radio:
                        return (
                          <Grid xs={12} md={6} key={field.name} className={classes.radio}>
                            <RadioButtonGroup
                              field={field}
                              setFormValue={setValue}
                              getValues={getValues}
                              control={control}
                              {...register(field.name)}
                            />
                          </Grid>
                        )
                      case AppConstants.fieldTypes.number:
                        return (
                          <Grid xs={12} md={6} key={field.name} className={classes.field}>
                            <TextField
                              className={classes.field}
                              variant="outlined"
                              size="small"
                              type={field.type}
                              required={field.required}
                              disabled={field.disabled}
                              label={field.label}
                              placeholder={field.label}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              {...register(field.name)}
                            />
                          </Grid>
                        )
                      case AppConstants.fieldTypes.textField:
                        return (
                          <Grid xs={12} md={6} key={field.name} className={classes.field}>
                            <TextField
                              className={classes.field}
                              variant="outlined"
                              size="small"
                              type={field.type}
                              required={field.required}
                              disabled={field.disabled}
                              label={field.label}
                              placeholder={field.placeHolder ? field.placeHolder : field.label}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              {...register(field.name)}
                            />
                          </Grid>
                        )
                      // when data is coming from server
                      case AppConstants.fieldTypes.dropdownWithDBSource:
                        return (
                          <Grid xs={12} md={6} key={field.name} className={classes.field}>
                            <AutoCompleteWithDropdown
                              register={register}
                              field={field}
                              pickBy={field.pickBy}
                              setValue={setValue}
                              getValues={getValues}
                              watch={watch}
                              control={control}
                              defaultValues={defaultValues}
                            />
                          </Grid>
                        )
                      //when data is passed in config
                      case AppConstants.fieldTypes.dropdownWithStaticData:
                        return (
                          <Grid xs={12} md={6} key={field.name} className={classes.field}>
                            <Autocomplete
                              options={field.dropdownData}
                              disabled={field.disabled}
                              getOptionLabel={field.getOptionLabel}
                              defaultValue={
                                field.dropdownData.find(
                                  (item) =>
                                    field.getOptionLabel(item) ===
                                    (defaultValues ? defaultValues[field.name] : "")
                                ) || ""
                              }
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  className={classes.field}
                                  variant="outlined"
                                  size="small"
                                  required={field.required}
                                  label={field.label}
                                  placeholder={field.label}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  {...register(field.name)}
                                />
                              )}
                            />
                          </Grid>
                        )
                      // when data is coming from server
                      case AppConstants.fieldTypes.search:
                        return (
                          <Suspense fallback={<Box>Loading...</Box>}>
                            <Grid xs={12} md={6} key={field.name} className={classes.field}>
                              <AutoCompleteWithSearch
                                register={register}
                                field={field}
                                setValue={setValue}
                                getValues={getValues}
                                watch={watch}
                                control={control}
                                defaultValues={defaultValues}
                              />
                            </Grid>
                          </Suspense>
                        )
                      case AppConstants.fieldTypes.date:
                        return (
                          <Grid xs={12} md={6} key={field.name} className={classes.field}>
                            <Controller
                              render={({ field: { value, onChange } }) => {
                                return (
                                  <TextField
                                    className={classes.field}
                                    variant="outlined"
                                    size="small"
                                    required={field.required}
                                    label={field.label}
                                    placeholder={field.label}
                                    type="date"
                                    onChange={(e) => {
                                      onChange(e.target.value)
                                    }}
                                    value={value}
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                  />
                                )
                              }}
                              control={control}
                              name={field.name}
                            />
                          </Grid>
                        )
                      case "text":
                        return (
                          <Grid xs={12} md={6} key={field.name} className={classes.field}>
                            <Box m={2}>
                              <Typography variant="body1">{field.label}</Typography>
                              <Typography>{field.content}</Typography>
                            </Box>
                          </Grid>
                        )
                      case AppConstants.fieldTypes.divider:
                        return (
                          <Grid xs={12} key={field.name} className={classes.field}>
                            <Divider className={classes.divider} />
                          </Grid>
                        )
                      /**
                       * Render store locations readonly address on form
                       */
                      case AppConstants.fieldTypes.address:
                        const store = watch(field.dataKey)
                        let storeId
                        if (typeof store === "object") storeId = store && store.id
                        else storeId = store
                        return (
                          <Grid xs={12} md={6} key={field.name} className={classes.field}>
                            {storeId && (
                              <Box p={2}>
                                <Address label={field.label} storeId={storeId} />
                              </Box>
                            )}
                          </Grid>
                        )
                    }
                  })}
                </Grid>
              </Box>
            </Box>
          </>
        )
      })}
      <DialogActions className={classes.saveBtn}>
        <Button onClick={() => handleClose()} variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Box>
  )
}
