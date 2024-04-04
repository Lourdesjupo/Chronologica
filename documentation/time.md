Los date se pueden restar entre ellos y el resultado aparece en milisegundos.
Ejemplo: 
```
const start = new Date ( '2024-03-01T15:47:47.000Z')
const stop = new Date ( '2024-03-01T16:00:00.000Z')

const result = (stop-start)
const seconds = result/1000
const minuts = seconds/60
const hours = minuts/60
console.log(miliseconds)
console.log(seconds)

```` 