export const convertDateToString = (date: Date): string => {
  if (date) {
    return new Date(date).toISOString().slice(0, 10)
  } else return ""
}
