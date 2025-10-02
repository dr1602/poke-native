# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Docker Image

Para crear la Dockerimage:

```sh
docker build -t poke-app .
```

Para asignar una tag especifica al Dockerimage

```sh
docker build -t poke-app:1.5 .
```

Asegurate de que no sea el mismo nombre, si por alguna razón quiere tener dos contenedores de un mismo repo

Para ver imagenes

```sh
docker images
```

Para ver contenedores

```sh
docker ps
```

Para ver contenedores

```sh
docker ps
```

Para correr imagen en ambiente interactivo, eliminar imagen anterior corriendo, que se ejecute en segundo plano y que corra la imagen

```sh
docker run -it --rm -d poke-app
```

Corre por default en el puero 8081

====

Para buscar una imagen especifica

```sh
docker images poke-app
```

Para filtrar imagenes

```sh
docker images --filter=reference='*:1.0'
```

Para filtrar imagenes

```sh
docker images --no-runc
```

Para definir el puerto:

```sh
docker run -it --rm -d -p 8080:80 poke-app
```

Para ver los contenedores en ejecucion:

```sh
docker ps
```

Muestra todos lo contenedores

```sh
docker ps -a
```

Muestra el tamaño del contenedor

```sh
docker ps -size
```

Detiene el contenedores

```sh
docker stop <id-contenedor>
```

Te da las estadísticas de los contenedores

```sh
docker stats
```

Para generar json con mas data de la imagen o volumen (me parece)

```sh
docker inspect
```

Para explorar las redes de docker, el comando network en general gestiona las redes de docker

```sh
docker network ls
```

Para crear un red en docker, puede servir para conectar contenedores de forma especifica, mejorando la seguridad

```sh
docker network create <name>
```

Para obtener json para inspeccionar imagen

```sh
docker inspect <tag>
```

Para generar archivo comprimido a partir de una imagen de docker

```sh
docker save <repository-name> > <given-file-name>.rar
```

Para correr imagen de docker de imagen comprimida:

```sh
docker load --input <given-file-name>.rar
```

## Como desplegar tu contenedoren internet a través de DOcker Hub

Loggearse

```sh
docker login
```

Crear un tag para mi docker image (una vez en el directorio del proyecto)

```sh
docker build -t <username>/<nombreimagen>:<version> .
```

Para empujar la imagen a docker hub

```sh
docker push <username>/<nombreimagen>:<version>
```

Para importar una imagen desde docker hub

```sh
docker run --name <desired-name> --rm -it -p 8080:80 <username>/<nombreimagen>:<version>
```

## NOTA: Docker Compose
