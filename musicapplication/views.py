from django.shortcuts import render

from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework import status

from .serializers import usersSerializer, ratingsSerializer, songsSerializer
from .models import user, rating, song



# Create your views here.
class usersView(viewsets.ModelViewSet):
    #create: create, read: , update: put, delete: delete 
    serializer_class = usersSerializer
    queryset = user.objects.all()

    def post(self, request, format=None):
        serializer = usersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)


class songsView(viewsets.ModelViewSet):
    serializer_class = songsSerializer
    queryset = song.objects.all() 

    def post(self, request, format=None):
        serializer = songsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)
        #add http error response if not valid
    
    # def update(self, request, pk, format=None):
        

class ratingsView(viewsets.ModelViewSet):
    permissions_classes= [
        permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = ratingsSerializer

    # queryset = rating.objects.all()


    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def post(self, request, format=None): 
        print(request.stream)
        serializer = ratingsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # ratings = rating.objects.filter(song_artist=request.data.).values_list('rating', flat=True)