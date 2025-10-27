from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Note(models.Model):
    description = models.CharField(max_length=24)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="note")

import uuid
from django.db import models
from django.conf import settings

class Project(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)

class Sprint(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='sprints')
    name = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField()
    is_closed = models.BooleanField(default=False)

class Task(models.Model):
    STATUS_CHOICES = [
        ('backlog','Backlog'),
        ('todo','To Do'),
        ('in_progress','In Progress'),
        ('review','In Review'),
        ('done','Done'),
    ]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='tasks')
    sprint = models.ForeignKey(Sprint, on_delete=models.SET_NULL, null=True, blank=True, related_name='tasks')
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    status = models.CharField(max_length=32, choices=STATUS_CHOICES, default='backlog')
    story_points = models.PositiveSmallIntegerField(default=0)
    assignees = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name='assigned_tasks')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']