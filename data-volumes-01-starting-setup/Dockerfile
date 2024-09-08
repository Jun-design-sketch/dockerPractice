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
# VOLUME [ "/app/node_modules"]
# VOLUME ["/app/temp"]

# CMD ["node", "server.js"]
CMD ["npm", "start"]

# docker build -t feedback-node:volumes .
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
# User defines a folder / path on host machine.
# Great for persistent, editable data
# In case of named volume, we don't know where it is

# Volumeもそうであったが、これらはimageに影響するのではなくcontainerレベルでの設定になるから
# 特にDockerfileで記載するものはない。
# だから再度書き直すとこうなる。。
# docker run 
# -p 3000:80 
# --name feedback-app 
# -v feedback:/app/feedback 
# -v [absolute_path_to_source_code]:/app もしくは、-v $(pwd):/app
# --rm 
# feedback-node:volumes 

# Error: Cannot find module 'express'
# Bind Mountsは指定のコンテナフォルダをローカルホストのフォルダに上書きする。
# なので　COPY package.json .　RUN npm installとかの結果、依存性も全部消える。。
# 改めて

# docker run 
# -p 3000:80 
# --name feedback-app 
# -v feedback:/app/feedback これはnamed volume
# -v [absolute_path_to_source_code]:/app
# もしくは、-v $(pwd):/app:ro これはbindMount、readOnly
# -v /app/node_modules これはanonymous volume
# -v /app/temp
# --rm 
# feedback-node:volumes 

# 複数のvolumeもしくはbindMountが重複する時、より詳しいパスを持つ方が優先適用される
# なので、/app/node_modulesフォルダのみ生き残ってその他はbindMountされている
# でもnodeのserver.jsを修正したりしたらコンテナ再起動が必要。。