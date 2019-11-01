GraphQL Yoga ile GraphQL Dersleri

Node.JS GraphQL Server Kurulumu
1. adım npm başlatıldı. package.json dosyası otomatize oluştu.
npm init -y
2. adım babel kuruldu.
npm i babel-cli babel-preset-es2015 --save
3. adım nodemon kuruldu.
npm install nodemon --save
4. adım GraphQL Yoga kuruldu. Adresi=> https://github.com/prisma-labs/graphql-yoga
npm i graphql-yoga --save 

nodemon start edilmesi ve console selam yazılması
npm start
cıktısı:
    [nodemon] 1.19.4
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching dir(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `babel-node app.js --presets es2015`
    selam
    [nodemon] clean exit - waiting for changes before restart

GraphQLServer başlatıldı. ilk test kodu çalıştırıldı.
cıktısı:
    AA: nodemon başlatıldı.
    Server is running on localhost:4000
Browser(localhost:4000) dan ilk graphql query çalıştırıldı.
girdi:
     query{hello}
cıktısı:
     {
      "data": {
        "hello": "Hello World"
      }
    }

Yeni bir hello1 Query
girdi:
    query {
      hello(name: "Ahmet")
      hello1
    }
cıktısı:
    {
      "data": {
        "hello": "Hello Ahmet",
        "hello1": "sabit bir metin olarak selam"
      }
    }

Yeni bir user typeDefs oluşturuldu.
girdi:
    query {
      hello1
      hello
      user {
        id
        username
      }
    }
cıktısı:
    {
      "data": {
        "hello1": "sabit bir metin olarak selam",
        "hello": "Hello World",
        "user": {
          "id": "1",
          "username": "ahmet"
        }
      }
    }
