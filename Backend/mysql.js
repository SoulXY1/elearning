
function conexion(){
    const mysql=require('mysql');
    const conn = mysql.createConnection({
        database: "polilearning",
        user: "0cod931r1crdz79hfu05",
        host: "us-east.connect.psdb.cloud",
        password: "pscale_pw_5qxXOjyQRLzLUoDEGrh902ibvpzHlvOLgCXBz72v8Lm",
        ssl: {
            rejectUnauthorized: false
        }
    });

    conn.query('SELECT * FROM students', (err, rows) =>{
        if(err) throw err
        const student=rows[0];
        console.log(`Nombre: ${student.nombreStudent} Codigo: ${student.codigoStudent}`);
    });

    console.log('Conexion establecida');
    conn.end()
 }

 
 
