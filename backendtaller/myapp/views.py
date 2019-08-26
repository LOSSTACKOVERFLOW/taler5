from django.shortcuts import render

from rest_framework import viewsets as meviews
from . models import *
from . serializers import *


class LibroViewSet(meviews.ModelViewSet):
    lookup = 'Titulo'
    queryset = Libro.objects.all()
    serializer_class = LibroSerializer

class AutorViewSet(meviews.ModelViewSet):
    lookup = 'Nombre'
    queryset = Autor.objects.all()
    serializer_class = AutorSerializer

# class UsuarioViewSet(meviews.ModelViewSet):
#     lookup = 'Nombre'
#     queryset = Usuario.objects.all()
#     serializer_class = UsuarioSerializer

class Usuario_LibroViewSet(meviews.ModelViewSet):
    
    queryset = Usuario_Libro.objects.all()
    serializer_class = Usuario_LibroSerializer

class Libro_AutorViewSet(meviews.ModelViewSet):
    
    queryset = Libro_Autor.objects.all()
    serializer_class = Libro_AutorSerializer