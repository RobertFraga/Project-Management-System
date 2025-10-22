from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Note
from .serializer import Noteserializer
# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_note(request):
    user = request.user
    notes = Note.objects.filter(author=user)
    serializer = Noteserializer(notes, many=True)
    return Response(serializer.data)