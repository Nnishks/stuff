
export const settingsSchema = {
  title: "Settings",
  description: "",
  type: "object",
  sections: [
    {
      name: "Tenant Info",
      fields: [
        {
          name: "id",
          type: "textfield",
          dataType: "string",
          label: "ID",
          disabled: true,
          mask: false,
        },
        {
          name: "customername",
          type: "textfield",
          dataType: "string",
          label: "Customer Name",
          disabled: true,
          mask: false,
        },
      ],
    },
    // {
    //   name: "AWS Setup",
    //   fields: [
    //     {
    //       name: "hostname",
    //       type: "textfield",
    //       dataType: "string",
    //       label: "Host Name",
    //       required: true,
    //     },
    //     {
    //       name: "bucketname",
    //       type: "textfield",
    //       dataType: "string",
    //       label: "Bucket Name",
    //       required: true,
    //     },
    //     {
    //       name: "region",
    //       type: "textfield",
    //       dataType: "string",
    //       label: "Region",
    //       required: true,
    //     },
    //     {
    //       name: "foldername",
    //       type: "textfield",
    //       dataType: "string",
    //       label: "Folder Name",
    //       required: true,
    //     },
    //     {
    //       name: "secretkey",
    //       type: "textfield",
    //       dataType: "string",
    //       label: "Secret Key",
    //       required: true,
    //       mask: true,
    //     },
    //     {
    //       name: "accesskey",
    //       type: "textfield",
    //       dataType: "string",
    //       label: "Access Key",
    //       required: true,
    //       mask: true,
    //     },
    //   ],
    // },
  ],
}
