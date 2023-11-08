# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en la aplicación
WORKDIR /app

# Copia los archivos de la aplicación al contenedor
COPY package*.json ./
COPY . .

# Instala las dependencias
RUN npm install

# Expón el puerto en el que la aplicación escucha
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
