# Use an official Node.js runtime as the base image
FROM node:16

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar el archivo package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Descargar Cloud SQL Proxy y dar permisos de ejecución
RUN wget https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64 -O cloud_sql_proxy && \
    chmod +x cloud_sql_proxy

# Copiar todos los archivos de la aplicación al contenedor
COPY . .

# Exponer el puerto en el que se ejecutará la aplicación (ajusta el puerto según tus necesidades)
EXPOSE 8080

# Comando para iniciar la aplicación junto con Cloud SQL Proxy
CMD [ "./cloud_sql_proxy", "-instances=tateti-404421:southamerica-east1:tateti-555=tcp:3306", "node", "app.js" ]

