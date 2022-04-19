from django.contrib import admin
from .models import user, rating, song

# Register your models here.
@admin.register(user)
class userAdmin(admin.ModelAdmin):
    list_display = ('username','password')
    search_fields = ('username',)

@admin.register(rating)
class ratingAdmin(admin.ModelAdmin):
    list_display = ('id','username', 'song_artist', 'song', 'artist','rating')
    search_fields = ('username','song', 'artist', 'rating')

@admin.register(song)
class songAdmin(admin.ModelAdmin):
    # list_display = ('song_artist','song','artist','genre')
    list_display = ('id', 'song_artist','song','artist','genre',)

    # search_fields = ('song','artist','genre')
    search_fields = ('song','artist','genre',)