from django.db import models
from django.core.validators import MinValueValidator,MaxValueValidator
from rest_framework.authtoken.models import Token
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver



# Create your models here.

class user (models.Model):
    username = models.CharField(max_length=255, primary_key=True)
    password = models.CharField(max_length=255)
    def __str__(self):
        return self.username

    @receiver(post_save, sender=settings.AUTH_USER_MODEL)
    def create_auth_token(sender, instance=None, created=False, **kwargs):
        if created:
            Token.objects.create(user=instance)

class rating (models.Model):
    username = models.ForeignKey(user, on_delete=models.CASCADE)
    song_artist = models.CharField(max_length=255)
    song = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    rating = models.PositiveBigIntegerField(validators= [MinValueValidator(0), MaxValueValidator(5)], default=5)
    def __str__(self):
       return f'{self.song} -> {self.rating}'


class song (models.Model) :
    #fields: song_artist, song, artist, genre
    GENRE = (('Pop','Pop'), ('Hip-Hop','Hip-Hop'), ('Classic','Classic'), ('Rock','Rock'), ('Country','Country'))
    id = models.AutoField(primary_key=True)
    song_artist = models.CharField(max_length=255, unique= True)
    song = models.CharField(max_length=255)#, primary_key=True)
    artist = models.CharField(max_length=255)
    genre =  models.CharField(max_length=60,choices=GENRE)

    def __str__(self):
        return self.song_artist
    
    def get_rating_average(r):
        if r:
            return sum(r)//len(r)
        return 0

    def get_avg_rating(self,r):
        if r:
            self.rating_average = sum(r)//len(r)
        else:
            self.rating_average =  0
    rating_average = get_rating_average(rating.objects.filter(song_artist=song_artist).values_list('rating', flat=True))
    