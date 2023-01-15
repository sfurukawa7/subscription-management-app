FROM ubuntu:22.10

# update packages
RUN set -x && \
    apt-get update && \
    apt-get upgrade -y

# install package 
RUN set -x && \
    apt-get install -y wget && \
    apt-get install -y sudo && \
    apt-get install -y vim && \
    apt-get install -y git && \
    apt-get install -y tmux && \
    apt-get install -y nodejs && \
    apt-get install -y npm && \
    npm install -g n 

# Setup node 
RUN n 16.19.0

# set the working direcotry
WORKDIR /home/workspace