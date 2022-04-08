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

    