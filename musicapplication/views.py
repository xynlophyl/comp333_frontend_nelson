from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.decorators import api_view 
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from .serializers import usersSerializer, songsSerializer, ratingsSerializer
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
    serializer_class = ratingsSerializer
    queryset = rating.objects.all()

    def get(self, request, format=None):
        ratings = ratings.objects.all()
        serializer = ratingsSerializer(ratings, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ratingsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)

    def put(self,request, pk, format=None):
        rating = self.get_object(pk)
        serializer = ratingsSerializer(rating, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,pk,format=None):
        rating = self.get_object(pk)
        rating.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

