from .models import Note
from rest_framework import serializers


class Noteserializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["description", "author"]