import app from "./app"
import './database'

app.listen(app.get('port'),() => {
    console.log('Servidor Ejecutandose en el PORT ', app.get('port'));  
})