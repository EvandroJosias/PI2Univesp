FROM node:alpine  

## Diretorio de trabalho no docker
WORKDIR /workdir

## copia o arquivo package.json para o container
COPY ./landingpage/package.json ./landingpage/

WORKDIR /workdir/landingpage

## instala todas os pacotes necessarios no container
RUN npm install

## instala o yarn para controlar o projeto
RUN npm install yarn

## Diretorio de trabalho no docker
WORKDIR /workdir

## copia todos os demais arquivos para dentro do container
COPY . .

WORKDIR /workdir/landingpage

## Libera a porta 3000 do container
EXPOSE 3000

## executa o projeto inicial
CMD ["yarn", "start"]