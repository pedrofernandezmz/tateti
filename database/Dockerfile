# Utiliza una imagen oficial de MySQL
FROM mysql:latest

# Establece las variables de entorno para la contraseña de la base de datos (cámbiala según tus necesidades)
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=mydb

# Copia el script SQL para crear la tabla y configuración inicial
COPY init.sql /docker-entrypoint-initdb.d/
