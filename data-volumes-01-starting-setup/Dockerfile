FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

EXPOSE 80

# docker build -t feedback-node .
# docker run -p 3000:80 -d --name feedback-app --rm feedback-node

# で、こうしたコンテナの中にあるデータはコンテナが消えると消える。
# ボリューム：folders on your host machine hard drive which are mounted into container

# VOLUME [ "/app/feedback" ]

CMD ["node", "server.js"]

# docker run -p 3000:80 --name feedback-app-volume --rm feedback-node:volumes
# docker logs feedback-app

# docker data storages
# volumes(by docker) :
#   anonymous(container removed == volume removed)
#   named(container removed != volume removed)
# docker run -p 3000:80 --name feedback-app -v feedback:/app/feedback --rm feedback-node:volumes

# * docker anonymous volume
# --rmオプションで起動すると終了時自動で削除されるけど、
# そうでない場合docker rm ...してもanonymous volumeは削除されない
# こういった溜まり続けるvolumeはdocker volume rm [VOL_NAME]かdocker volume pruneして消そう

# Bind Mounts(by user) :
