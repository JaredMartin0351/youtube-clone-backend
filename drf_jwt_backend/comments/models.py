from django.db import models
from django.contrib.auth.models import User

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField(max_length=50)
    text = models.CharField(max_length=500)
    likes = models.IntegerField()
    dislikes = models.IntegerField()

class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE )
    comment = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=500)
    