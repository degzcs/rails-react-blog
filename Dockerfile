FROM ruby:3.0.0

# Install dependencies

RUN apt-get update -qq \
  && apt-get install -y build-essential libpq-dev nodejs imagemagick \
  npm && npm install npm@latest -g
RUN npm install -g yarn

# Configure the main working directory. This is the base
# directory used in any further RUN, COPY, and ENTRYPOINT
# commands.

ENV APP_HOME /app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

ENV  BUNDLE_PATH $APP_HOME/.gems
ENV  BUNDLE_PATH /box
ENV  PATH /shared/bin:$PATH
ADD . $APP_HOME

# Vim commnands in shell
RUN echo "set -o vi" >> ~/.bashrc \
    && echo "stty -ixon" >> ~/.bashrc \
    && echo "set editing-mode vi" >> ~/.inputrc \
    && echo "set keymap vi-command" >> ~/.inputrc

RUN mkdir -p tmp/puma
