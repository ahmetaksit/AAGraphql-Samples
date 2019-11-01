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

Users ve Posts dizinlerini oluşturuldu. Dizinden bir kayıt veya tüm dizini sorgulama kodu yazıldı.
girdi:
    query {
      hello1
      hello
      user(id: 1){
        id
        username
        city
      }
      users{
        id
        username
        city
      }
      post(id: 1) {
        id
        title
        userId
      }
      posts {
        id
        title
        userId
      }
    }
cıktısı:
    {
      "data": {
        "hello1": "sabit bir metin olarak selam",
        "hello": "Hello World",
        "user": {
          "id": "1",
          "username": "ahmet",
          "city": "İzmir"
        },
        "users": [
          {
            "id": "1",
            "username": "ahmet",
            "city": "İzmir"
          },
          {
            "id": "2",
            "username": "mumin",
            "city": "Manisa"
          },
          {
            "id": "3",
            "username": "birol",
            "city": "Urla"
          }
        ],
        "post": {
          "id": "1",
          "title": "Acıyı seven, arayan ve ona sahip olmak isteyen hiç kimse yoktur. Nedeni basit. Çünkü o acıdır...",
          "userId": "1"
        },
        "posts": [
          {
            "id": "1",
            "title": "Acıyı seven, arayan ve ona sahip olmak isteyen hiç kimse yoktur. Nedeni basit. Çünkü o acıdır...",
            "userId": "1"
          },
          {
            "id": "2",
            "title": "Ut volutpat, sapien nec pretium convallis, lectus est egestas turpis, sed pretium nibh purus id sem. Maecenas efficitur sit amet lorem id ultricies. Duis urna risus, dapibus at condimentum ac, dictum non ligula. Nunc scelerisque elit elit, sed tempor mi vulputate non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras suscipit ligula et dui accumsan iaculis consectetur a enim. Proin urna tellus, mollis quis nibh non, vulputate condimentum nisi. Cras suscipit sed orci pulvinar venenatis. Nullam venenatis erat risus, id molestie augue fermentum lacinia.",
            "userId": "3"
          },
          {
            "id": "3",
            "title": "Praesent a nulla risus. Duis eget nisl nunc. Quisque laoreet lacus nec sem feugiat placerat. Nulla facilisis vestibulum velit, nec ornare dolor volutpat id. Duis vel mollis nulla. Sed erat sapien, blandit vel efficitur at, tincidunt ut mi. Nam dignissim nec eros et facilisis. Cras tincidunt non justo sed pellentesque. Curabitur nunc ipsum, auctor sit amet est ac, venenatis vestibulum sapien. Aliquam efficitur, nulla et ornare luctus, erat est vehicula neque, sed aliquam justo ligula a leo.",
            "userId": "2"
          }
        ]
      }
    }

Posts dizini içerisinde hangi username yaptığını bulma, Query altın query çalıştıma.
girdi:
    query {
      post(id: 2){
        id
        title
        userId
        user {
          id
          username
          city
        }
      }
    }
cıktısı:
    {
      "data": {
        "post": {
          "id": "2",
          "title": "Ut volutpat, sapien nec pretium convallis, lectus est egestas turpis, sed pretium nibh purus id sem. Maecenas efficitur sit amet lorem id ultricies. Duis urna risus, dapibus at condimentum ac, dictum non ligula. Nunc scelerisque elit elit, sed tempor mi vulputate non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras suscipit ligula et dui accumsan iaculis consectetur a enim. Proin urna tellus, mollis quis nibh non, vulputate condimentum nisi. Cras suscipit sed orci pulvinar venenatis. Nullam venenatis erat risus, id molestie augue fermentum lacinia.",
          "userId": "3",
          "user": {
            "id": "3",
            "username": "birol",
            "city": "Urla"
          }
        }
      }
    }

Users dizini içerisinde hangi postları yaptığını bulma,
İç içe Query örneğine devam ediliyor. bu sefer içerdeki query de bir dizin şeklinde dönüyor.
girdi:
    query {
      user(id: 1) {
        id
        username
        city
        posts {
          id
          title
          userId
        }
      }
    }
cıktısı:
    {
      "data": {
        "user": {
          "id": "1",
          "username": "ahmet",
          "city": "İzmir",
          "posts": [
            {
              "id": "1",
              "title": "Acıyı seven, arayan ve ona sahip olmak isteyen hiç kimse yoktur. Nedeni basit. Çünkü o acıdır...",
              "userId": "1"
            },
            {
              "id": "4",
              "title": "Etiam consequat, risus a aliquet ultricies, tellus urna fermentum orci, consectetur posuere nulla arcu vitae augue. Cras quam ipsum, tincidunt non tellus vel, auctor sodales neque. Phasellus sit amet justo at justo iaculis molestie. Proin mollis non justo non congue. Phasellus semper velit ut orci volutpat, sodales vehicula turpis porttitor. Quisque dictum nulla nisi, at ultrices ipsum ornare a. Aenean consectetur gravida dolor ut blandit. Donec porttitor orci nisi, sed commodo nisi vehicula ut.",
              "userId": "1"
            }
          ]
        }
      }
    }
