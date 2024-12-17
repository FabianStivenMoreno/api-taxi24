# api-taxi24

Api desarrollada en typescript con express y base de datos mongodb

## Dependencias usadas
* **dotenv**: manejo y uso de variables de entorno
* **mongoose**: ORM
* **geolib**: manejo y operaciones con distancias
* **express**: Framework web

## Instrucciones para ejecutar de manera local la aplicación
## 1. Instalación de software necesario (windows):
1.1. Node JS:  [Descargar Node js](https://nodejs.org/dist/v22.12.0/node-v22.12.0-x64.msi).

1.2. Mongo DB: [Descargar MongoDB](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-8.0.4-signed.msi). 

## 2. Clonar repositorio e instalación de dependencias:
**2.1.** _Ejecutar los siguientes comandos:_
```
git clone https://github.com/FabianStivenMoreno/api-taxi24.git
git checkout origin/LAB
```

**2.2** _Una vez clonado se deben instalar las dependencias necesarias ejecutando el siguiente comando:_

```
npm intall
```
## 3. Creación de archivo variables de entorno (.env)
Se debe crear un archivo con el nombre _**.env**_ con las siguientes variables de entorno revisar archivo (.env_sample):
* ROOT_PATH: path raiz de la aplicación por ejemplo: _**/taxi24/v1**_ o por defecto _**/**_ 
* PUERTO: puerto donde se va a ejecutar la API o por defecto _**5000**_ por ejemplo: _**5051**_
* MONGO_URI: Uri para la conexión a la base de datos por ejemplo: _**mongodb://localhost:27017/taxi24**_ 

## 4. Creación de la data para las pruebas
Para la ejecución de las pruebas se necesita tener data de conductores y pasajeros por lo cual se debe ejecutar el script _**crearDataPrueba.ts**_ ejecutando el siguiente comando:

```
npx ts-node src/scripts/crearConductores.ts
```

## 5. Ejecución del proyecto:
### 5.1 Entorno de desarrollo:
Para la ejecución en ambiente de desarrollo luego de los pasos previos debemos ejecutar el siguiente comando:

```
npm run dev
```

### 5.1 Entorno diferente a desarrollo:
Para la ejecución en ambiente de desarrollo luego de los pasos previos debemos ejecutar los siguientes comandos:
```
npm run build
npm run start
```