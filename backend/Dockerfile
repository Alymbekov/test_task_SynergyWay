FROM python:3.7.4

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1


WORKDIR /app/backend
COPY requirements.txt /app/backend
RUN pip install --upgrade pip
RUN pip3 install -r requirements.txt

EXPOSE 8000
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
