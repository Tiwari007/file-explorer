const explorer = [
  {
    id: 1,
    name: "root",
    type: "folder",
    children: [
      {
        id: 2,
        name: "Folder 1",
        type: "folder",
        children: [
          {
            id: 3,
            name: "File 1",
            type: "file",
            size: "10KB"
          },
          {
            id: 4,
            name: "File 2",
            type: "file",
            size: "5KB"
          },
          {
            id: 5,
            name: "Subfolder 1",
            type: "folder",
            children: [
              {
                id: 6,
                name: "File 3",
                type: "file",
                size: "2KB"
              },
              {
                id: 7,
                name: "File 4",
                type: "file",
                size: "8KB"
              }
            ]
          }
        ]
      },
      {
        id: 8,
        name: "Folder 2",
        type: "folder",
        children: [
          {
            id: 9,
            name: "File 5",
            type: "file",
            size: "15KB"
          }
        ]
      },
      {
        id: 10,
        name: "File 6",
        type: "file",
        size: "12KB"
      }
    ]
  }
];

export default explorer;
