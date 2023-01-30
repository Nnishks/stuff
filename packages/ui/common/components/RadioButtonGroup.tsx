import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { Controller } from "react-hook-form"

export default function RadioButtonGroup(props) {
  const { field, setFormValue, getValues, control } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fm = getValues("facilitymanager")
    setFormValue(
      "primarytrainername",
      event.target.value === "facilitymanager" ? fm && fm.name : ""
    )
  }

  return (
    <Box>
      <FormLabel>{field.label}</FormLabel>
      <Controller
        name={field.name}
        control={control}
        render={({ field: { value, onChange } }) => {
          return (
            <>
              <RadioGroup
                name={field.name}
                row
                value={value}
                onChange={(ev) => {
                  onChange(ev)
                  handleChange(ev)
                }}
              >
                <Box ml={2}>
                  {field.radioOptions.map((option) => {
                    return (
                      <FormControlLabel
                        key={option.name}
                        value={option.value}
                        control={
                          <Radio key={option.name} value={option.value} required={field.required} />
                        }
                        label={option.name}
                      />
                    )
                  })}
                </Box>
              </RadioGroup>
            </>
          )
        }}
      />
      {/* <RadioGroup
        defaultValue={field.defaultvalue}
        name={field.name}
        row
        value={value}
        onChange={handleChange}
      >
        <Box ml={2}>
          {field.radioOptions.map((option) => {
            return (
              <FormControlLabel
                key={option.name}
                value={option.value}
                control={<Radio value={option.value} />}
                label={option.name}
              />
            )
          })}
        </Box>
      </RadioGroup> */}
    </Box>
  )
}
