# Chronologica

🚧 Proyecto personal en construcción 🚧

Chronologica nace de la necesidad de poder tener varias herramientas de productividad personal en una sola aplicación.

## Tecnologías

🔸Vite
🔸MUI
🔸React
🔸ExpressJS
🔸NodeJS
🔸MySQL

## Especificaciones

ChronoLogica consta de dos secciones:  
✔️ **One time Task**
*Tareas recurrentes*
Esta sección te permite configurar el tiempo en el que necesitas repetir una tarea y te aparecerá un aviso cuando tengas que volver a hacerla. Pulsando el icono el estado de la tarea cambiará a 🟢:

- Indicativo 🔴 : Tarea que necesitas volver a hacer.
- Indicativo 🟢: Tarea hecha!
- Indicativo gris🔘 : Tarea registrada (fecha y hora).

Ejemplo de Uso:

Necesitas regar cada dos días o tomarte una pastilla cada semana -> Al crear la tarea puedes indicar cada cuanto necesitas realizar esta tarea (dias, semanas, meses), de esta forma,  el indicativo al lado del icono se pondrá en verde en función de si esa tarea la has hecho o roja en el caso de que todavía no la hayas hecho o tengas que volver a hacerla.

Necesitas llevar un registro horario -> pulsa el icono para que quede registrada la fecha en la que hiciste la tarea.

![ChronoLogica OneTime](https://github.com/Lourdesjupo/TestViteChronologica/assets/126502912/deb58223-f725-4c77-b8a0-25ef11982623)

Por defecto la tarea mostrará el indicativo en color rojo (pendiente). Cuando el usuario clicka el icono el indicativo pasará al color verde (hecho).

Al crear la tarea los datos se almacenarán en la bbdd junto a la fecha y la hora en la que se ha creado. Cada vez que se recargue la página, se clicka el icono o se añade una nueva tarea, se calcula el tiempo que falta para hacer de nuevo la tarea y dependiendo del tiempo pasado el indicador modificará su color.

⏱️ **TrackedTimeTasks**

Esta sección tiene como objetivo trackear el tiempo que tardas en hacer una tarea.

![ChronoLogica Tracktime](https://github.com/Lourdesjupo/TestViteChronologica/assets/126502912/2a24809c-673f-426c-b556-08274b4755db)
