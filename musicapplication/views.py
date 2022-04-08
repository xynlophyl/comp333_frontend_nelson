from django.shortcuts import render
from rest_framework import viewsets 
from .serializers import usersSerializer 
from .models import users, artists, ratings, songs

# Create your views here.
class usersView(viewsets.ModelViewSet):
    serializer_class = usersSerializer
    queryset = users.objects.all()
