FROM python
WORKDIR /app
COPY . /app
CMD ["python", "rng.py"]

#foreground/backgroundだけでなくinteractiveするには？
# docker build .
# docker run [CONTAINER_ID]したらエラーが出る
# -i, --interactive                      Keep STDIN open even if not attached
# -t, --tty                              Allocate a pseudo-TTY
# これがよく言われる-itだった

#仮想サーバとかを作るだけでなく、こういったソースを稼働するとか
#色々Dockerizeできる

# docker run -it [IMAGE_ID]した後に、
# docker start -a -i [CONTAINER_ID]した

# docker rm [CONTAINER_ID], docker rmi [IMAGE_ID]
# 一々やるより、docker runする時に--rmをつけると終了時にコンテナは自動削除される
# docker images
# docker image inspect [IMAGE_ID]