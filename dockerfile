FROM node:alpine  

## instala o yarn para controlar o projeto
#RUN npm install yarn

## Diretorio de trabalho no docker
RUN mkdir -p /opt/app
WORKDIR /opt/app

## copia o arquivo package.json para o container
COPY ./landingpage/package.json ./
COPY ./landingpage/yarn.lock ./
RUN yarn

## copia todos os demais arquivos para dentro do container
COPY ./landingpage ./

## Libera a porta 3000 do container
EXPOSE 3000

## executa o projeto inicial
CMD ["yarn", "dev"]