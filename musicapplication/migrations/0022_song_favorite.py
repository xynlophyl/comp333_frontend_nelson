# Generated by Django 4.0.2 on 2022-04-19 08:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('musicapplication', '0021_alter_song_genre'),
    ]

    operations = [
        migrations.AddField(
            model_name='song',
            name='favorite',
            field=models.BooleanField(default=False),
        ),
    ]