// Servidor Express

// Para probar los ficheros estáticos del fronend, entrar en <http://localhost:4500/>
// Para probar el API, entrar en <http://localhost:4500/api/items>

// Imports
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require('dotenv').config();



// Arrancar el servidor

const server = express();

// Configuración del servidor

server.use(cors());
server.use(express.json({limit: "25mb"}));

// Poner a escuchar el servidor

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Ya se ha arrancado nuestro servidor: http://localhost:${port}/`);
});

// Conexion a la base de datos

async function connectDb() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE_NAME,
    port:process.env.DB_PORT
  });

  await connection.connect();
  console.log(`conectada a la BBDD'${connection.threadId}`)
  return connection;
}

// Endpoints
//Post AddOneTime

server.post('/api/addonetask', async (req, res) => {
    console.log('llamo');
    const data = req.body;
    let insert =
      "INSERT INTO oneTask (name,iconName,alertQty,alertUnits) VALUE (?, ?, ?, ?)";
    const connect = await connectDb();
    const [resultInsert] = await connect.query(insert, [
      data.name,
      data.iconName,
      data.alertQty === '' ? null : data.alertQty,
      data.alertUnits === '' ? null : data.alertUnits,
    ]);
     connect.end();
    res.json(resultInsert);
  });

  //registro de tarea clickada oneTime
server.post('/api/addonetaskchecked', async (req, res) => {
  console.log('llamo');
  const body = req.body;
  let insert =
    'INSERT INTO oneTaskCompleted (fkOneTask) VALUE (?)';
  const connect = await connectDb();
  const [resultInsert] = await connect.query(insert, [
    body.id
  ]);
  connect.end();
  res.json(resultInsert);
});

//Get lista de tareas oneTimeTask


  server.get('/api/getonetimetasks', async (req,res)=>{
    const connect = await connectDb();
    //const selectAll = "SELECT * from oneTask "
    const selectAll = "SELECT oneTask.id,oneTask.name,oneTask.iconName,oneTask.createdAt,oneTask.alertQty,oneTask.alertUnits,completedDate FROM oneTask LEFT JOIN( SELECT fkOneTask, MAX(completedDate) as completedDate FROM oneTaskCompleted GROUP BY fkOneTask) lastComplete ON oneTask.id = lastComplete.fkOneTask"
    const[tasks] = await connect.query(selectAll)
  

    console.log(tasks)
    connect.end()
    res.json(tasks)
  })

//Get getOneTimeCalculate (CALCULAR CUANDO SE PONE ROJO O VERDE)
  server.get('/api/getonetimecompletedata/:id', async (req, res) => {
    const id = req.params.id;
    const connect = await connectDb();
    const selectAll = `select * FROM oneTask, oneTaskCompleted WHERE oneTask.id = oneTaskCompleted.fkOneTask AND id = ${id} order by completedDate DESC LIMIT 1`;
    const [tasks] = await connect.query(selectAll);

    console.log(tasks);
    connect.end();
    res.json(tasks);
  });




//Post AddTrackTask


server.post('/api/addtracktask', async (req, res) => {
  console.log('llamo');
  const data = req.body;
  let insert =
    'INSERT INTO trackList (nameTask,color,estimatedTime) VALUE (?, ?, ?)';
  const connect = await connectDb();
  const [resultInsert] = await connect.query(insert, [
    data.nameTask,
    data.color,
    data.estimatedTime 
  ]);
  connect.end();
  res.json(resultInsert);
});


//Get lista de tareas TrackList
  server.get('/api/tracktasklist', async (req, res) => {
    const selectAll = 'SELECT * from trackList ';
    const connect = await connectDb();
    const [result] = await connect.query(selectAll);
    console.log(result);
    connect.end();
    res.json(result);
  });

  //guardar el dato de stop/start de tracktime

  server.post('/api/addTimeTrack', async(req,res)=>{
   console.log(req.body)
   const hoy = new Date();
   const connect = await connectDb();
   let insert
  if(req.body.clicked === 'start'){
    insert = 'INSERT INTO trackTime (fkTrackList,startTime) VALUES (?, ?)';
    const [resultInsert] = await connect.query(insert, [req.body.idTimeTrack, hoy])
    res.json(
      resultInsert
    );
  } else{
    const lastStartTimeForfkTrackList =
      'UPDATE freedb_chronoLogica.trackTime SET stopTime = ? where fkTrackList = ?  and stopTime IS NULL';
    // insert = 'INSERT INTO trackTime (fkTrackList,stopTime) VALUES (?, ?)';
    const [resultInsert] = await connect.query(lastStartTimeForfkTrackList, [
      hoy,
      req.body.idTimeTrack,
    ]);

    connect.end();
    res.json(resultInsert);
  }


  });

  //Get all tasks and times

  server.get('/api/allTracks/:id', async (req, res) => {
    const id = req.params.id;
    const allTaskTimes = `select * FROM trackTime, trackList WHERE trackList.id = trackTime.fkTrackList AND id= ? order by stopTime desc LIMIT 1;`;
    const connect = await connectDb();
    const [result] = await connect.query(allTaskTimes, [id]);
    connect.end();
    res.json(result);
  });