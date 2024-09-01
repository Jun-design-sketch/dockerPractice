# 自分のイメージをビルドするにはdockerfileを使おうね。。

# base image
FROM node
# copy 外部位置 : 内部位置
#COPY . /app
# ローカル同様、npm installしないと
# RUN npm install こうするとroot位置で実行してしまう
WORKDIR /app
COPY . /app
RUN npm install
# RUN node server.js >> buildするたびに実行されてしまう。
# containerが実行された時に動かせる

# docker containerは隔離されているから、port80をコンテナの外に見せる必要がある
# これはあくまでもdocumentationだ。。。
EXPOSE 80

CMD ["node", "server.js"]
# docker build .
# -p : publish local<->container
# docker run -p 3000:80 <imageid>