# Instruções Para ajusta a primeira execução do container

## mudar a linha de volumes no docker-compose.yml
"./landingpage:/workdir/landingpage" para "./landingpage:/workdir/temp"

## acessar o container 
docker exec -it appusers sh

## copiar os diretorios node_modules next para a sua instalação pois estes diretorios nao vao para o git
cp -r node_modules /workdir/temp/
cp -r .next /workdir/temp

## parar a execuçao do container e voltar a linha do docker-compose para o original
"./landingpage:/workdir/landingpage"


## reiniciar o container para desenvolver ...