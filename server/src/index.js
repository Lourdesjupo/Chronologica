// Servidor Express

// Para probar los ficheros estáticos del fronend, entrar en <http://localhost:4500/>
// Para probar el API, entrar en <http://localhost:4500/api/items>
// Imports
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
import sql from './db.js';



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

// Endpoints

//Post AddOneTime

server.post('/api/addonetask', async (req, res) => {
    console.log('body', req.body);
    const data = req.body;
    try {
      if (!data.name || !data.iconName) {
        res.status(400).send(`Invalid parameters`);
        return
      }
      let resultInsert = await sql`
      INSERT INTO chronologica.onetask (name,"iconName","alertQty","alertUnits") 
      VALUES (
        ${data.name},
        ${data.iconName},
        ${data.alertQty === '' ? null : data.alertQty},
        ${data.alertUnits === '' ? null : data.alertUnits}
      )`;
      res.json(resultInsert);
    } catch (err) {
      res.status(500).send(`Internal error: ${err.message ?? 'unknown'}`)
    }
  });

  //registro de tarea clickada oneTime
server.post('/api/addonetaskchecked', async (req, res) => {
  try{
    console.log('llamo');
    const body = req.body;
    let resultInsert = await sql`
    INSERT INTO chronologica.oneTaskCompleted ("fkoneTask") 
    VALUES (${body.id})`;
    res.json(resultInsert);
  } catch (err) {
    res.status(500).send(`Internal error: ${err.message ?? 'unknown'}`)
  }

});

//Get lista de tareas oneTimeTask

  server.get('/api/getonetimetasks', async (req,res)=>{
    try {
			//const selectAll = "SELECT * from oneTask "
			const tasks = await sql`
      SELECT "idoneTask","name","iconName","createdAt","alertQty","alertUnits",completed_date as "completedDate"
      FROM chronologica.oneTask 
      LEFT JOIN(
        SELECT "fkoneTask" as fkone_task, MAX("completedDate") as completed_date 
        FROM chronologica.oneTaskCompleted
        GROUP BY "fkoneTask"
      ) lastComplete 
      ON "idoneTask" = lastComplete.fkone_task`;
			res.json(tasks);
		} catch (err) {
			res.status(500).send(`Internal error: ${err.message ?? 'unknown'}`);
		}
  })

  //Get: Lista de tareas y sus tiempos
  server.get('/api/allOneTimesAndTasks', async (req, res) => {
    try {
			//const task = req.params.id
			const taskAndTimes = await sql`
      SELECT ot.name, otc."completedDate" 
      FROM chronologica.oneTask as ot
      LEFT JOIN chronologica.oneTaskCompleted  AS otc ON ot."idoneTask" = otc."fkoneTask"`;
			res.json(taskAndTimes);
		} catch (err) {
			res.status(500).send(`Internal error: ${err.message ?? 'unknown'}`);
		}
  });

//Get getOneTimeCalculate (CALCULAR CUANDO SE PONE ROJO O VERDE)
  server.get('/api/getonetimecompletedata/:id', async (req, res) => {
    try {
			const id = req.params.id;
			const tasks = await sql`
      SELECT * 
      FROM chronologica.oneTask, chronologica.oneTaskCompleted 
      WHERE chronologica.oneTask."idoneTask" = chronologica.oneTaskCompleted."fkoneTask" AND id = ${id} 
      ORDER BY "completedDate" DESC 
      LIMIT 1`;
			res.json(tasks);
		} catch (err) {
			res.status(500).send(`Internal error: ${err.message ?? 'unknown'}`);
		}
  });






//Post AddTrackTask


server.post('/api/addtracktask', async (req, res) => {
  try {
		console.log('llamo');
		const data = req.body;
		let resultInsert = await sql`
    INSERT INTO chronologica.trackList ("nameTask",color,"estimatedTime") 
    VALUES (${data.nameTask},${data.color} ,${data.estimatedTime})`;
		res.json(resultInsert);
	} catch (err) {
		res.status(500).send(`Internal error: ${err.message ?? 'unknown'}`);
	}
});


//Get lista de tareas TrackList
  server.get('/api/tracktasklist', async (req, res) => {
    try {
			const result = await sql`
      SELECT 
        tl."idtrackList", 
        tl."nameTask", 
        tl.color, 
        tl."estimatedTime", 
        tl."elapsedTime", 
        MAX(tt."startTime") AS "startTime",
        (
          SELECT "stopTime" 
          FROM chronologica.trackTime 
          WHERE "fktrackList" = tl."idtrackList" AND "startTime" = MAX(tt."startTime")
        ) AS "stopTime" 
      FROM chronologica.trackList AS tl LEFT JOIN chronologica.trackTime AS tt ON tl."idtrackList" = tt."fktrackList"
      GROUP BY tl."idtrackList", tl."nameTask", tl.color, tl."estimatedTime", tl."elapsedTime";`;

			// Result contiene:
			//   [
			//     {
			//       idtrackList: 1,
			//       nameTask: 'TypeScript',
			//       color: 'rgb(11, 67, 174)',
			//       estimatedTime: 0,
			//       elapsedTime: 23.3743,
			//       startTime: '2024-03-25T14:12:18.000Z',
			//       stopTime: '2024-03-25T14:12:19.000Z',
			//     },
			//    ....
			//   ];
			const allTimeSessions = await sql`SELECT * FROM chronologica.trackTime;`;

			//Query alternativa para traer solo sesiones y fk
			// SELECT count(*) as nsessions, fktrackList  FROM freedb_ChronoLogica_bbdd.trackTime where stopTime is not null group by fktrackList
			// Resultado allTimeSessions [
			// {
			//     "idtrackTime": 1,
			//     "stopTime": "2024-03-04T12:02:14.000Z",
			//     "startTime": "2024-03-01T15:47:47.000Z",
			//     "fktrackList": 1
			// },
			// {
			//     "idtrackTime": 2,
			//     "stopTime": "2024-03-01T17:15:00.000Z",
			//     "startTime": "2024-03-01T17:00:00.000Z",
			//     "fktrackList": 2
			// },]
			result.forEach((el) => {
				let taskSessions = allTimeSessions.filter((elFil) => elFil.fktrackList === el.idtrackList);
				el.nSessions = taskSessions.length;
				el.averageSessionInMinutes = Math.round(el.elapsedTime / el.nSessions);
				// taskSessions.forEach((elSession)=>

				// el.averageSessionInMinutes2 = Math.round((new Date (elSession.stopTime) - new Date(elSession.startTime))/1000/60)/el.nSessions
				// )
			});

			res.json(result);
		} catch (err) {
			res.status(500).send(`Internal error: ${err.message ?? 'unknown'}`);
		}
    });
    
  //guardar el dato de stop/start de tracktime

  server.post('/api/addTimeTrack', async(req,res)=>{
    try {
			if (!req.body.id || !req.body.action || (req.body.action !== 'stop' && req.body.action !== 'start')) {
				return res.status(400).send('Invalid request');
			}

			const now = new Date();
      console.log(now)
			if (req.body.action === 'start') {
				await sql`INSERT INTO chronologica.trackTime ("fktrackList","startTime") VALUES (${req.body.id}, ${now})`;
			} else {
				await sql`
        UPDATE chronologica.trackTime 
        SET "stopTime" = ${now} 
        WHERE "fktrackList" = ${req.body.id} AND "stopTime" IS NULL`;
				const [{ startTime: st }] =
					await sql`
          SELECT MAX("startTime") AS "startTime" 
          FROM chronologica.trackTime 
          WHERE "fktrackList" = ${req.body.id}`;
				const elTimeMins = (now - st) / 1000 / 60;
				console.log('elTimeMins', elTimeMins);
				await sql`UPDATE chronologica.trackList 
        SET "elapsedTime" = "elapsedTime" + ${elTimeMins} 
        WHERE "idtrackList" = ${req.body.id}`;
			}
			res.status(200).end();
		} catch (err) {
			res.status(500).send(`Internal error: ${err.message ?? 'unknown'}`);
		}
  });

  //Get all tasks and times

  server.get('/api/allTracks/:id', async (req, res) => {
    try {
			const id = req.params.id;
			const result = await sql`
      SELECT * 
      FROM chronologica.trackTime, chronologica.trackList 
      WHERE trackList."idtrackList" = trackTime."fktrackList" AND id= ${id} 
      ORDER BY "stopTime" DESC 
      LIMIT 1;`;
			res.json(result);
		} catch (err) {
			res.status(500).send(`Internal error: ${err.message ?? 'unknown'}`);
		}
  });
