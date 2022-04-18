# Generated by Django 4.0.2 on 2022-04-17 02:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('musicapplication', '0012_alter_rating_song_artist_delete_song'),
    ]

    operations = [
        migrations.CreateModel(
            name='song',
            fields=[
                ('song_artist', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('song', models.CharField(max_length=255)),
                ('artist', models.CharField(max_length=255)),
                ('genre', models.CharField(choices=[('Pop', 'Pop'), ('Hip-Hop', 'Hip-Hop'), ('Classic', 'Classic'), ('Rock', 'Rock'), ('Country', 'Country')], max_length=60)),
            ],
        ),
    ]