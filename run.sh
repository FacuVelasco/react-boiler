#!/usr/bin/env bash

case $1 in
  start)
    docker build -t client:backoffice . && docker container run -it -p 3000:3000 -p 35729:35729 -v $(pwd):/app client:backoffice
    ;;
  build)
    docker build -t client:backoffice .
    ;;
  run)
    docker container run -it -p 3000:3000 -p 35729:35729 -v $(pwd):/app client:backoffice
    ;;
  test)
    yarn test $@
    ;;
  *)
    echo "command not listed"
    ;;
esac
