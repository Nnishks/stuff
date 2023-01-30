export const picklistFormSchema = {
  title: "New Picklist",
  description: "New Picklist",
  type: "object",
  sections: [
    {
      name: "Information",
      fields: [
        {
          name: "name",
          type: "textfield",
          dataType: "string",
          label: "Name",
          required: true,
        },
        {
          name: "uniquename",
          type: "textfield",
          dataType: "string",
          label: "Unique Name",
          required: true,
        },
        {
          name: "description",
          type: "textfield",
          dataType: "string",
          label: "Description",
        },
        {
          name: "valueName",
          type: "textfield",
          dataType: "string",
          label: "Picklist Value",
          required: true,
        },
      ],
    },
  ],
}
