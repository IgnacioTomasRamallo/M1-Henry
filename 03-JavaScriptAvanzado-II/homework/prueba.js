    var instructor = {
        nombre: "Franco",
        edad: 25,
    };
    
    var alumno = {
        nombre: "Juan",
        curso: "FullStack",
    };
    
    function getNombre() {
        return this.nombre;
    }

    let getNombreInstructor = getNombre.bind(instructor);
    let getNombreAlumno = getNombre.bind(alumno);

    console.log(getNombreInstructor);
    console.log(getNombreAlumno);