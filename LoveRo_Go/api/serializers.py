from rest_framework import serializers
from .models import Article
from django.contrib.auth.models import User
from drf_extra_fields.fields import Base64ImageField


class ArticleSerializer(serializers.ModelSerializer):
    image = Base64ImageField(required=False)
    class Meta:
        model = Article
        # fields = ['title', 'imgae', 'content', 'owner', 'created_at', 'updated_at']
        fields = '__all__'
        
    def create(self, validated_data):
        print(validated_data)
        return super().create(validated_data)
    #     title = validated_data.pop('title')
    #     image = validated_data.pop('image')
    #     content = validated_data.pop('content')
    #     owner = validated_data.pop('owner')
    #     created_at = validated_data.pop('created_at')
    #     updated_at = validated_data.pop('updated_at')
    #     return Article.objects.create(title, image,contnet, owner, created_at, updated_at)
        
#             title = models.CharField(max_length=100)
#     image = Base64ImageField()
#     content = models.TextField()
#     owner = models.ForeignKey(User, default=1, on_delete=models.SET_DEFAULT)
    
#     created_at = models.DateTimeField(auto_now=True)
#     updated_at = models.DateTimeField(auto_now_add=True)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'