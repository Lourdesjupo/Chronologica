Para poder crear el gráfico de progreso circular hay que crear primero un tema : 

- determinate: deja fijo el tiempo consumido
- color : Indicar el nombre del color según el tema de main  (const theme = createTheme)
- value: indicar el valor, en este caso progress (el.progress = Math.round((el.elapsedTime * 100) / el.estimatedTime);


```
import { CircularProgress, ThemeProvider, extendTheme } from '@mui/joy';

<ThemeProvider theme={theme2}>
          <CircularProgress
            variant="soft"
            determinate
            color="success"
            value={p.row.progress}
          />
</ThemeProvider>

  const theme2 = extendTheme({
    components: {
      JoyCircularProgress: {
        defaultProps: {
          variant: 'soft',
          color: 'success',
        },

      },
    },
  });

          
```