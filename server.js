//Conexion del Server
const mysql = required('mysql2')

const Conexion = mysql.createconnection({
    host: '10.0.6.39',
    user: 'estudiante',
    password: 'Informatica-165',
    database: 'SEBAWEB'
})

Conexion.connect((err) => {
    if (err) {
        console.error('❌ Error al conectar a la base de datos:', err);
      } else {
        console.log('✅ Conectado a la base de datos MySQL.');
      }
})

