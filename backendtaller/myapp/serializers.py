from rest_framework import serializers
from . models import *


class LibroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Libro
        fields='__all__'

class AutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Autor
        fields='__all__'

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields='__all__'

class Usuario_LibroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario_Libro
        fields='__all__'
class Libro_AutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Libro_Autor
        fields='__all__'