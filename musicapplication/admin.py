from django.contrib import admin
from .models import users, artists, ratings, songs

# Register your models here.
@admin.register(users)
class userAdmin(admin.ModelAdmin):
    list_display = ('username','password')
    search_fields = ('username',)

@admin.register(artists)
class artistAdmin(admin.ModelAdmin):
    list_display = ('song','artist')
    search_fields = ('song', 'artist')

@admin.register(ratings)
class ratingAdmin(admin.ModelAdmin):
    list_display = ('id','username','song', 'rating')
    search_fields = ('username','song', 'rating')

@admin.register(songs)
class songAdmin(admin.ModelAdmin):
    list_display = ('song','artist', 'genre')
    search_fields = ('song','artist','genre')