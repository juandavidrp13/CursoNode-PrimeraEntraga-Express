const {cursos,listarCursos,inscribir,listarCursosSinTime} = require ('./cursos')

//Comandos yargs para ejecutar las distintas funcionalidades del programa
 const argv = require('yargs')
//Comando encargado de llamar la funcion que genera la lista de los cursos con intervalo de tiempo
 .command('listar', 'Lista de Cursos',{},
    (argv) => {
        listarCursos();
    }
  )
//Comando encargado de hacer la inscripción a un curso especifico
  .command('inscribir', 'inscripción al curso', {
      nombre:{
          demand:true,
          alias:'n',
      },
      id:{
        demand:true,
        alias:'i',
    },
     cedula:{
        demand:true,
        alias:'c',
    }
        },
    (argv) => {
        inscribir(argv.id,argv.nombre,argv.cedula);
    }
  )
//Comando encargado de listar los cursos sin intervalo de tiempo
  .command('$0', 'comando por defecto', () => {}, (argv) => {
    listarCursosSinTime();

    }
  )
.argv;


