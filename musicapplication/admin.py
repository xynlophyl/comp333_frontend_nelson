from django.contrib import admin
from .models import users, artists, ratings, songs

# Register your models here.
admin.site.register(users)
admin.site.register(artists)
admin.site.register(ratings)
admin.site.register(songs)