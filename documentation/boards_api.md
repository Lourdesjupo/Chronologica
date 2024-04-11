[(reedb.te)](https://www.markdownguide.org/cheat-sheet/)

# Endpoints

## endpoint:/board

Method: GET

Description: Get all the boards of the user. For each board return id and name.
At the start of the application the boards are displayed

1. Request

   ```
   no data
   ```
2. Response

   ```
   [
    {
      "id": 1,
      "name": "board1"
    },
    {
      "id": 2,
      "name": "board2"
    },
    ...
   ]
   ```

## endpoint:/board/id {id}

**Method**: GET

Description: Get a cards of the board of the user.

For each card return name and list.

For each list return:

- date:  `date | optional`
- priority: `string | optional`
- title: `string | required `
- subItems: `string[] | optional`

Clicking on a board displays the cards with their tasks.

1. Request

   ```
   board Id
   ```
2. Response

   ```
    "name": "board name",
    "lists" : [
      { 
        "id": 1,
        "name":'todo',
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
          "task": "tarea2",
          "subtasks": []
          }
        ]
      },
    ]

   ```


## endpoint:/board/ {board_id}/card/ {card_id}

**Method**:PUT /DELETE

Description: When updating or including any of the items of cards, the items of the modified card are re-rendered.

1. Request:
   ```
   board id & card id
   ```
2. Response:
   ```
   [
       "id": 1,
       "name":'todo',
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
       ]
   ```

## endpoint:/board/ {board_id}/card

**Method**:  POST

Description: create new item of card.

1. Request:
   ```
   {"name": card name}
   ```
2. Response:
   ```
   {id: card_id}
   ```

## endpoint:/board/ {id}/card {id}/item {id}

**Method**: PUT DELETE

Description:When updating delete or modify a items of card.

1. Request:

   ```
   board id & card id & item id 
   [{
           "id": 1,
           "date": undefined,
           "priority": undefined,
           "title": "compras",
           "subItems": ["leche", "agua"]
         }
   ]
   ```
2. Response:

   ```
   {"id": 2}
   ```
## endpoint:/board/ {id}/card {id}/item

**Method**: POST
Description:add new item of card.

1. Request:

   ```
   board id & card id
   [{
      "id": 1,
      "date": undefined,
      "priority": undefined,
      "title": "compras",
      "subItems": ["leche", "agua"]
    }
   ]
   ```
2. Response:

   ```
   {"id": 2}
   ```