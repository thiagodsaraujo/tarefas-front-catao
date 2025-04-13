# 🖥️ Microserviço Frontend - Tarefas (P1 - Sistemas de Informação)

Este repositório contém o microserviço frontend da aplicação de tarefas, desenvolvido em React e dockerizado com Nginx, referente à atividade do professor @brunogamacatao na disciplina **Desenvolvimento de Sistemas** da **UNIFACISA**.

- LINK BACK END (CÓDIGO ORIGINAL DO PROFESSOR): https://github.com/brunogamacatao/tarefas_back.git  
- LINK FRONT-END (CÓDIGO ORIGINAL DO PROFESSOR): https://github.com/brunogamacatao/tarefas_front.git

## 📦 Tecnologias Utilizadas

- React
- Docker
- Nginx (servidor para aplicação estática)
- Multi-stage build

## 🚀 Como Executar com Docker

### 1. Build da Imagem

No terminal, navegue até a pasta do projeto e execute:

```bash
docker build -t thiagodsaraujo/tarefas_front .

docker run -d -p 3000:80 thiagodsaraujo/tarefas_front

