from rest_framework import serializers
from .models import user, rating, song
from django.db.models import Avg

# The serializer translates a Todo object into a format that
# can be stored in our database. We use the Todo model.
class usersSerializer(serializers.ModelSerializer):
  class Meta:
    model = user
    # The id is automatically created as a primary key by our Django model
    # and we can included it here as well.
    fields = ('username', 'password')


class ratingsSerializer(serializers.ModelSerializer):
  class Meta:
    model = rating
    fields = ('id','username', 'song_artist', 'song', 'artist','rating')

class songsSerializer(serializers.ModelSerializer):
  rating_average = serializers.SerializerMethodField()

  class Meta:
    model = song
    # fields = ('song_artist','song','artist', 'genre', 'rating_average')
    fields = '__all__'

  def get_rating_average(self, data):
    return rating.objects.filter(song_artist=data.song_artist).aggregate(rating_average=Avg('rating')).get('rating_average')

    