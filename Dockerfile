from ubuntu:16.04

RUN apt update && \
	apt install -y nodejs \
	npm 

WORKDIR /logserver 

COPY logserver /logserver

RUN cd /logserver && npm install  


EXPOSE 80
CMD ["nodejs", "app.js"]

