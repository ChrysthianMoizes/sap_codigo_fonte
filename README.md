# Nome do Projeto

SAP

# Sistema

O SAP é um sistema desenvolvido orientado a microserviços para acompanhamento de projetos da equipe de gestão de produção. 

## Redis

Serviço de cache.

## JHipster Registry (dev)

O JHipster Registry é um servidor de descoberta onde todos os serviços, durante seu STARTUP, se registram para que possam ser encontrados e consequentemente suas APIs possam ser oferecidas.

- **TODAS** as instâncias dos serviços se registram nele.

## Serviços

Os serviços da solução são APIs REST utilizadas para consumo e geração de dados dentro dos modelos. Todas as regras negociais são controladas por eles.

### sapservice

Esse é o microserviço principal da aplicação.

# Ambiente de desenvolvimento

## Compose dos containers

Vá na pasta docker e execute:

```
docker-compose -f docker-compose-dev.yml up -d
```

Os containers serão montados e estarão prontos.

## Serviços:

Os serviços são compilados com o maven:

```
clean install
```

Não há necessidade de executar testes, deve-se utilizar o profile de dev.

A partir da compilação podem ser executados pela IDE, pela classe principal ou pelo comando mvnw disponível dentro da pasta de cada serviço.

