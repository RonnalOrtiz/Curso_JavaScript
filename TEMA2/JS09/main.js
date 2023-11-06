function mostrarCursos(opcion) {
    const cursosMostrados = document.getElementById("cursosMostrados");
    cursosMostrados.innerHTML = ""; // Limpiar el contenido anterior
  
    switch (opcion) {
      case 1:
        cursosMostrados.innerHTML = `
            <h2>Cursos para niñas y niños de 8 a 12 años:</h2>
            <ul>
              <li>AVENTURAS DIGITALES</li>
              <li>CÓDIGO AVENTURERO: EXPLORANDO EL MUNDO DIGITAL</li>
              <li>CREATIVIDAD DIGITAL</li>
              <li>EL PODER DE LAS HOJAS DE CÁLCULO</li>
              <li>DESCIFRANDO EL MISTERIO DE LOS DATOS</li>
              <li>MUNDO TIC PARA EL AGRO</li>
              <li>EXPEDICIÓN DIGITAL: EXPLORA, CREA Y CONQUISTA EL INTERNET</li>
            </ul>
          `;
        break;
  
      case 2:
        cursosMostrados.innerHTML = `
            <h2>Cursos para jóvenes de Décimo a Once grado:</h2>
            <ul>
              <li>FUNDAMENTOS DE PROGRAMACIÓN</li>
              <li>INTRODUCCIÓN A LA PROGRAMACIÓN EN JAVASCRIPT</li>
              <li>INTRODUCCIÓN A LA PROGRAMACIÓN EN PYTHON</li>
            </ul>
          `;
        break;
  
      case 3:
        cursosMostrados.innerHTML = `
            <h2>Cursos para personas de 18 Años en adelante:</h2>
            <ul>
              <li>INTRODUCCIÓN A LA PROGRAMACIÓN EN JAVASCRIPT</li>
              <li>INTRODUCCIÓN A LA PROGRAMACIÓN EN PYTHON</li>
              <li>ANALÍTICA DE DATOS</li>
              <li>INTELIGENCIA ARTIFICIAL</li>
              <li>INTERNET DE LAS COSAS</li>
              <li>APLICACIONES TIC PARA EL AGRO</li>
              <li>CIENCIA DE DATOS</li>
              <li>CIBERSEGURIDAD</li>
              <li>APLICACIONES TIC PARA LA ECONOMÍA POPULAR</li>
            </ul>
          `;
        break;
  
      default:
        cursosMostrados.innerHTML = "<p>Selecciona una opción válida.</p>";
        break;
    }
  }
  