from rest_framework import viewsets, generics
from .serializers import ArticleSerializer, UserSerializer
from .models import Article
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly 

# Create your views here.

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_class= [IsAuthenticatedOrReadOnly, ] 

    
class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
