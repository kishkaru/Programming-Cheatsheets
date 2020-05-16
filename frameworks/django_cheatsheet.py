# create new project
django-admin startproject mysite

# create a new app
python manage.py startapp polls

# run dev server
python manage.py runserver


# perform db migration
python manage.py migrate

# create a migration
python manage.py makemigrations polls

# check migration
python manage.py sqlmigrate polls 0001

# django shell
python manage.py shell

# create admin user
python manage.py createsuperuser


## shell utils
# create test env
from django.test.utils import setup_test_environment
setup_test_environment()

from django.test import Client
client = Client()
response = client.get(reverse('polls:index'))
response.status_code
response.content
response.context['latest_question_list']

# create data
from polls.models import Question, Choice
from django.utils import timezone

q = Question(question_text="What's new?", pub_date=timezone.now())
q.save()
q.id
Question.objects.all()
Question.objects.get(pub_date__year=current_year)
Question.objects.get(pk=1)
q.choice_set.all()
c = q.choice_set.create(choice_text='Not much', votes=0)
Choice.objects.filter(question__pub_date__year=current_year)
c = q.choice_set.filter(choice_text__startswith='Just hacking')
c.delete()


