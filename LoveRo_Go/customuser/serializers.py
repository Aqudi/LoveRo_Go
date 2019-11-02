from rest_framework import serializers
from django.contrib.auth.hashers import make_password

from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'password', 'name', 'is_admin', 'is_active']

    validate_password = make_password