# authfirebasejs
Autenticacion con Firebase y Javascript

## Configuración
  Configuración inicial de archivos dentro del proyecto.

## Configuración desde la pagina [Firebase](https://firebase.google.com/?hl=es) y archivos
  Es un servicio de google que nos permitira crear nuestro backend.
  - Para poder utilizarlo tener una cuenta o simplemente con tu cuenta de correo de "gmail.com"
  - Un click parte superior deracha **[Ir a la consola](https://console.firebase.google.com/?hl=es)**
  - Nos movemos al boton de **<kbd>Crear un proyecto</kbd>**, asignamos un nombre para el proyecto, al boton <kbd>continue</kbd>.
  - Desabilitamos google analytics, para tener mas informacion de como va funcionando la app o como utilizarlo. Puede dejarlo activado no es tan importante.
  - Creamos el proyecto el cual empezara a cargarse.
  
  Como conectamos nuestro proyecto
  - Nos movemos a [Configuración de Proyecto](https://console.firebase.google.com/u/0/project/cfirebase-autenticacion/settings/general?hl=es)
  - Cuando tenemos un backend en firebase podemos conectarlo a una aplicación movil, web. Nosotros usaremos aplicación web, seleccionamos su icono **[</>](https://console.firebase.google.com/u/0/project/cfirebase-autenticacion/settings/general?hl=es)**.
  - Nos vuelve a solicitar un nombre podemos usar el mismo o uno nuevo.
  - Firebase tambien nos ofrece el servicio de hosting para subir la aplicacion, usaremos etiquetas de script tomamos todo el codigo lo pegamos en un nuevo archivo llamado **firebaje.js**.
  
## Framework Boostrap
  - Añadiremos un framework de css para poder agilisar el desarrollo del interfaz **[Boostrap](https://getbootstrap.com/)**.
  - Utilizamos la opcion de [CDN links](https://getbootstrap.com/docs/5.2/getting-started/introduction/#cdn-links) dentro de nuestros archivos.
  - Para nuestro menu de navegacion usaremos **[Navbar](https://getbootstrap.com/docs/5.2/components/navbar/)** copiando el codigo en nuestro ***index.html***.