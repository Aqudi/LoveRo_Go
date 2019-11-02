from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model

User = get_user_model()

class Article(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(blank=True, null=True)
    content = models.TextField()
    owner = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)

