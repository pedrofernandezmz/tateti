# Use an official Node.js runtime as the base image
FROM node:16

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar el archivo package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar todos los archivos de la aplicación al contenedor
COPY . .

# Exponer el puerto en el que se ejecutará la aplicación (ajusta el puerto según tus necesidades)
EXPOSE 8080

# Comando para iniciar la aplicación
CMD [ "node", "app.js" ]
