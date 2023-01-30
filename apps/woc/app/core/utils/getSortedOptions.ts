export default function getSortedOptions(data, sortBy, sortType) {
  switch (sortType) {
    case "string":
      return data.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
    case "string_num":
      return data.sort((a, b) => parseInt(a[sortBy]) - parseInt(b[sortBy]))
    case "number":
      return data.sort((a, b) => a[sortBy] - b[sortBy])
    default:
      break
  }
}
