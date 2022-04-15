from rest_framework import serializers
from .models import users, artists, ratings, songs 

# The serializer translates a Todo object into a format that
# can be stored in our database. We use the Todo model.
class usersSerializer(serializers.ModelSerializer):
  class Meta:
    model = users
    # The id is automatically created as a primary key by our Django model
    # and we can included it here as well.
    fields = ('username', 'password')

class artistsSerializer(serializers.ModelSerializer):
  class Meta:
    model = artists
    fields = ('song', 'artist')

class ratingsSerializer(serializers.ModelSerializer):
  class Meta:
    model = ratings
    fields = ('id','rating','song', 'username')

class songsSerializer(serializers.ModelSerializer):
  class Meta:
    model = songs
    fields = ('song', 'genre')



    