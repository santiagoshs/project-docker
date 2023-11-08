const mysql = require("mysql2");

// Configura la conexión a la base de datos
const connection = mysql.createConnection({
    host: '172.19.0.2', // Dirección IP del contenedor de MySQL
    user: 'root', // Usuario de la base de datos
    password: '', // Contraseña vacía
    database: 'mi_basededatos', // Nombre de la base de datos
});


// Conecta a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conexión a la base de datos exitosa");

  // Realiza una consulta de prueba
  const query = "SELECT * FROM mi_tabla";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error al realizar la consulta:", err);
      connection.end(); // Cierra la conexión en caso de error
      return;
    }
    console.log("Resultados de la consulta:", results);

    // Cierra la conexión a la base de datos
    connection.end((err) => {
      if (err) {
        console.error("Error al cerrar la conexión:", err);
      } else {
        console.log("Conexión cerrada correctamente");
      }
    });
  });
});
