import { Box, CircularProgress, CircularProgressProps } from "@mui/material"

function CustomCircularProgress(props: CircularProgressProps) {
  const { variant, thickness, size, color, value } = props
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        sx={{
          color: (theme) => theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        variant={variant}
        thickness={thickness}
        size={size}
        value={100}
      />
      <CircularProgress
        disableShrink
        sx={{
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          opacity: 0.7,
          color: color,
        }}
        variant={variant}
        thickness={thickness}
        size={size}
        value={value}
      />
    </Box>
  )
}

export default CustomCircularProgress
