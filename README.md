# teste_toolz

#Instalação e inicialização do Backend
- Ferramentas utilizadas:
  - PHP 8.2
  - Laravel 11
  
- Abrir o diretório **api** que se encontra no diretório raiz
- Renomear o arquivo .env.example para .env
- Criar um arquivo novo,caso não existir, em: **api/database** com o nome **database.sqlite**
- Abrir o terminal dentro do diretorio **api** encontrado no diretório raiz e executar os seguinte comandos:

  - composer install
  - php artisan key:generate
  - php artisan migrate:fresh --seed
  
- Subir o servidor com a porta 8000, pois esta foi previamente configurada no frontend, execute o seguinte comando:
  
  - php artisan serve --port 8000
  
#Instalação e inicialização do Frontend
- Ferramentas utilizadas:
  - React 18
  - Next 14

- Abrir o diretório **app** que se encontra no diretório raiz
- Abrir o terminal dentro do diretorio  **app**  encontrado no diretório raiz e executar o seguinte comando:

  - yarn
  
- Para subir o frontend em dev:
  
  - yarn dev

#########################

- Usuario de teste:
  test@test.com: test1234,

  OBS: foi criado uma rota de signup vide o arquivo: **HttpRequests.http**, com isso é possivel criar seu próprio usuário de teste
