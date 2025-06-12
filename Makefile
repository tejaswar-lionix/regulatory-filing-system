build:
	docker build -t regulatory-filing .

test:
	pytest -q

run:
	python manage.py runserver 0.0.0.0:8000
