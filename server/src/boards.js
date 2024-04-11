
async function getAllBoards (req, res){
  await res.json([
    {
      id: 1,
      name: 'Tareas',
    },
    {
      id: 2,
      name: 'Lista de la compra',
    },
    {
      id: 3,
      name: 'Peliculas',
    },
  ]);
}
async function getAllCardsOfBoards(req, res) {
  await res.json([
  {
    "name": "Tareas",
    "lists" : [
      { 
        "id": 1,
        "name":'To-do',
        "items" :[
          {
            "id": 1,
            "date": undefined,
            "priority": undefined,
            "title": "compras",
            "subItems": ["leche", "agua"]
          },
          {
            "id": 2,          
            "date": undefined,
            "priority": undefined,
            "title": "limpieza",
            "subItems": []
          },
          {
            "id": 3,          
            "date": undefined,
            "priority": undefined,
            "title": "comidas",
            "subItems": ["comidas 1", "comidas 2"]
          }                   
      ]
      },
      {
        "id": 2,
        "name":"En proceso",
        "items" :[
          {
          "id": 1,          
          "date":"11/04/2024",
          "priority": "alta",
          "title": "tarea2",
          "subtasks": []
          }
        ]
      },
    ]

  }
]);
}

function mountBoard(server) {
  server.get('/api/boards', getAllBoards);
  server.get('/api/boards/:id', getAllCardsOfBoards);
}



module.exports = { mountBoard };