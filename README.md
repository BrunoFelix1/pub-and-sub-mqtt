# SmartGreen
Projeto para aplicação do protocolo MQTT em dispositivos IoT.

# Descrição
Uma aplicação que exibe mensagens MQTT recebidas e armazenadas em um banco de dados SQLite.

# Pré-requisitos
Antes de começar, certifique-se de ter instalado o seguinte:  

Node.js (v12 ou superior)  
NPM (geralmente instalado junto com o Node.js)  
SQLite (opcional se já tiver um banco de dados SQLite configurado)  
Python (v3.12)  
PIP (geralmente instalado junto com o Python)  
Instalação dos Módulos  
Clone este repositório em sua máquina local  
Instale as dependências do Node.js utilizando o npm  
Instale a biblioteca paho-mqtt para poder executar o script Python  

# Passo a passo  
PubAndSub é um exemplo simples de uso do protocolo MQTT, apenas para entendimento prévio.  
Abra um terminal no diretório do projeto e execute o script Python para fazer a conexão com o servidor mqtt:  
python mqtt_subscriber.py  
Não feche ou pare a execução, pois ele irá receber as mensagens do servidor e automaticamente irá gerar uma arquivo chamado: 'messagemqtt.json'.  
Aqui você estará recebendo as mensagens em tempo real no formato de JSON.  
Abra outro terminal, dessa vez iremos armazenar as mensagens do arquivo 'messagemqtt.json' em um banco de dados chamado: estacao.db, para isso  
execute o seguinte comando em um NOVO terminal:  
node processMessage.js  
Mais uma vez, não feche o terminal, deixe rodando.  
Aqui o script criará um banco de dados sqlite chamado 'estacao.db'. E após isso ele irá ler, processar e armazenar as mensagens a cada 1 segundo.  
Abra outro terminal e desta vez execute o server da nossa aplicação:  
node mqtt_server.js     
Mais uma vez, não feche o terminal, deixe rodando.  
Isso iniciará o servidor, que estará pronto para receber requisições na porta padrão 3000. Você pode acessar a aplicação em seu navegador web  
utilizando o seguinte endereço:  
http://localhost:3000
