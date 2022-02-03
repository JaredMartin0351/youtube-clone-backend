FROM python:3.10-slim-buster

EXPOSE 8000

ENV PYTHONDONTWRITEBYTECODE=1

ENV PYTHONUNBUFFERED=1

COPY requirements.txt .

RUN apt-get update

RUN apt-get install -y --no-install-recommends gcc libc-dev python3-dev default-libmysqlclient-

RUN python -m pip install -r requirements.txt

WORKDIR /app

COPY . /app

RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser