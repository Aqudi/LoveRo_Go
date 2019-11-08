from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from drf_extra_fields.fields import Base64ImageField

    
class Article(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(null=True, blank=True)
    content = models.TextField()
    owner = models.ForeignKey(User, default=1, on_delete=models.SET_DEFAULT)
    
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

