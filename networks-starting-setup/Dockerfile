FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "app.js"]
## docker build -t favorites-node .
## docker run --name favorites -d --rm -p 3000:3000 favorites-node

## docker containerが行えるネットワーク的な動き

## container -> WWW
## これは、特段の追加対策なしで実行が可能。このデモにもあるように

## container -> other container
  ## mongoDBコンテナを作成する
  ## docker run -d --name mongodb mongo
  ## docker container inspect mongodb
  ##   'mongodb://localhost:27017/swfavorites',
  ## inspectした結果のipAddressをlocalhostの代わりに入れて、イメージビルド→run
  ## でも手動で一々ipアドレス入力していられない。。
    ## docker network create favorites-net
    ## docker network lsすると、favorites-netが生成されていることを確認可能
    ## docker run -d --name mongodb --network favorites-net mongo
    ## もちろん、docker run --name favorites --network favorites-net -d --rm -p 3000:3000 favorites-node もいける
    ## こうすると、２つのコンテナが同じネットワーク内に配置される
    ## これでコンテナ名を指定できるようになる！
    ##   'mongodb://mongodb:27017/swfavorites'
    ## postmanからhttp://localhost:3000/favoritesを確認してみると
    ## ちゃんとレスポンスが帰ってくる。postももちろん
      ## mongodbには-pフラグがない：コンテナネットワーク外部に繋げる時だけ必要。
      ## docker networkはいくつか種類があるらしい。
      ## docker network lsした時、今回作ったfavorites-netはbridgeだった。（デフォルト）
      ## --driverフラグをnetwork生成時に指定できる。
      ## host, overlay, macvlan, none, ...

## container -> host machine
## app.js source73
##   'mongodb://localhost:27017/swfavorites', これを
##   'mongodb://host.docker.internal:27017/swfavorites', こう変える