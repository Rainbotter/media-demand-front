FROM node:9

RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb; apt-get update; apt-get -fy install

COPY startup.sh .

CMD ./startup.sh
