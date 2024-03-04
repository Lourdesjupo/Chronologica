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
    port:process.env.DB_PORT,
    timezone: 'Z'
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
    'INSERT INTO oneTaskCompleted (fkoneTask) VALUE (?)';
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
    const selectAll = "SELECT oneTask.idoneTask,oneTask.name,oneTask.iconName,oneTask.createdAt,oneTask.alertQty,oneTask.alertUnits,completedDate FROM oneTask LEFT JOIN( SELECT fkoneTask, MAX(completedDate) as completedDate FROM oneTaskCompleted GROUP BY fkoneTask) lastComplete ON oneTask.idoneTask = lastComplete.fkoneTask"
    const[tasks] = await connect.query(selectAll)
  

    console.log(tasks)
    connect.end()
    res.json(tasks)
  })

//Get getOneTimeCalculate (CALCULAR CUANDO SE PONE ROJO O VERDE)
  server.get('/api/getonetimecompletedata/:id', async (req, res) => {
    const id = req.params.id;
    const connect = await connectDb();
    const selectAll = `select * FROM oneTask, oneTaskCompleted WHERE oneTask.idoneTask = oneTaskCompleted.fkoneTask AND id = ${id} order by completedDate DESC LIMIT 1`;
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
    const selectAll = `SELECT tl.idtrackList, tl.nameTask, tl.color, tl.estimatedTime, tl.elapsedTime, MAX(tt.startTime) AS startTime, (SELECT stopTime FROM trackTime WHERE fktrackList = tl.idtrackList AND startTime = MAX(tt.startTime)) AS stopTime FROM trackList AS tl LEFT JOIN trackTime AS tt ON tl.idtrackList = tt.fktrackList GROUP BY tl.idtrackList, tl.nameTask, tl.color, tl.estimatedTime, tl.elapsedTime;`
    const connect = await connectDb();
    const [result] = await connect.query(selectAll);
    console.log(result);
    connect.end();
    res.json(result);
  });

  //guardar el dato de stop/start de tracktime

  server.post('/api/addTimeTrack', async(req,res)=>{

    if (
      !req.body.id ||
      !req.body.action ||
      (req.body.action !== 'stop' && req.body.action !== 'start')
    ) {
      return res.status(400).send('Invalid request')
    }
      
    const now = new Date();
    const connect = await connectDb();
    let insert
    if(req.body.action === 'start'){
      insert = 'INSERT INTO trackTime (fktrackList,startTime) VALUES (?, ?)';
      await connect.query(insert, [req.body.id, now])
    } else {
      const lastStartTimeForfkTrackList = 'UPDATE trackTime SET stopTime = ? where fkTrackList = ?  and stopTime IS NULL';
      await connect.query(lastStartTimeForfkTrackList, [
        now,
        req.body.id,
      ]);
      const startTime ='select MAX(startTime) as startTime from trackTime where fkTrackList = ?'; 
      const [[{startTime: st}]] = await connect.query(startTime, [
        req.body.id,
      ]);
      
      const elTimeMins = (now - st) / 1000 / 60;
      console.log('elTimeMins', elTimeMins);
      const elapsedTime = 'UPDATE trackList SET elapsedTime = elapsedTime + ? WHERE idtrackList = ?'
      await connect.query(elapsedTime, [elTimeMins, req.body.id]);
      connect.end();
    }
    res.status(200).end();
  });

  //Get all tasks and times

  server.get('/api/allTracks/:id', async (req, res) => {
    const id = req.params.id;
    const allTaskTimes = `select * FROM trackTime, trackList WHERE trackList.idtrackList = trackTime.fktrackList AND id= ? order by stopTime desc LIMIT 1;`;
    const connect = await connectDb();
    const [result] = await connect.query(allTaskTimes, [id]);
    connect.end();
    res.json(result);
  });