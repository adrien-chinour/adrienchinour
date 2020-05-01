#! /bin/bash

docker run --rm -it -v $PWD:/srv -p 8080:8080 -e HUGO_VERSION=0.60.1 forestryio/hugo:latest \
 hugo server -D -E -F --port 8080 --bind 0.0.0.0 --renderToDisk -d public
