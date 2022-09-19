const students = [
    {
        nombreStudent: 'Ignacio Eduardo Briseño Salcedo',
        codigoStudent: '219769879',
        passwordStudent: '12341',
        correoStudent: 'ignacio.briseno7698@alumnos.udg.mx'
    },
    {
        nombreStudent: 'Carlos Ariel Rubio Espinosa',
        codigoStudent: '219770672',
        passwordStudent: '12342',
        correoStudent: 'carlos.rubio1231@alumnos.udg.mx'
    },
    {
        nombreStudent: 'Angel Alberto Diaz Toscano',
        codigoStudent: '219771121',
        passwordStudent: '12343',
        correoStudent: 'angel.diaz7711@alumnos.udg.mx'
    },
    {
        nombreStudent: 'Kristof Daniel Razo Jimenez',
        codigoStudent: '219769623',
        passwordStudent: '12344',
        correoStudent: 'kristof.razo7696@alumnos.udg.mx' 
    }
]


const teachers = [
    {
        nombreTeacher: 'Paulina Sarahí Gomez Rodríguez',
        codigoTeacher: '212345671',
        passwordTeacher: '12341',
        correoTeacher: 'paulina.grodriguez@academicos.udg.mx',
        materiaTeacher: 'Diseño de aplicaciones web'
    }
]


function conexion(){
    var codigo = document.getElementById('codigo').value;
    var contra = document.getElementById('contra').value;
    for(var i=0; i<students.length; i++){
        if(students[i].codigoStudent == codigo && students[i].passwordStudent == contra){
            alert(`Bienvenido ` + students[i].nombreStudent);
            window.location="../public/indexStudent.html";
            var name= students[i].nombreStudent;
            document.getElementById("name") = name;
        }
        
    }

}


function connProfe(){
    var codigo = document.getElementById('codigoTeacher').value;
    var contra = document.getElementById('passwordTeacher').value;
    for(var i=0; i<teachers.length; i++){
        if(teachers[i].codigoTeacher == codigo && teachers[i].passwordTeacher == contra){
            alert(`Bienvenido Profesor@: ` + teachers[i].nombreTeacher);
            window.location="../vista-profes/indexProfe.html";
            var name= teachers[i].nombreTeacher;
            document.getElementById("nameProfe") = name;
        }
        
    }
}

