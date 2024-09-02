# 自分のイメージをビルドするにはdockerfileを使おうね。。

# base image
FROM node
# copy 外部位置 : 内部位置
#COPY . /app
# ローカル同様、npm installしないと
# RUN npm install こうするとroot位置で実行してしまう
WORKDIR /app
# buildする時点でコピーしてしまうから、その後ソースを変更しても再ビルドしないと反映されない
# image == closed(or locked) template
COPY package.json /app

RUN npm install

COPY . /app
# RUN node server.js >> buildするたびに実行されてしまう。
# containerが実行された時に動かせる

# docker containerは隔離されているから、port80をコンテナの外に見せる必要がある
# これはあくまでもdocumentationだ。。。
EXPOSE 80

CMD ["node", "server.js"]
# docker build .
# -p : publish local<->container
# docker run -p 3000:80 <imageid>

#image is layer based
#every command means each layer, docker remember each command's result
#だから一度ビルドしたものを再度ビルドすると速い
#でも後続命令に影響を与える変更があったら、それ以降は全て再度実行される

# docker run vs docker start
# attached mode / detached mode
# attached mode = listening
# docker runも-dすればdetached modeになる
# docker startした場合も、docker logs -f [CONTAINER_ID] すればlogをfollowできる
# あるいは、docker start -a [CONTAINER_ID]してもいいし