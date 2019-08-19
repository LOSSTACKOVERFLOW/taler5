from django.db import models
class Libro(models.Model):
    Titulo = models.CharField(max_length=200)
    Isbn=models.CharField(max_length=12)
    Calificación=models.IntegerField()

class Autor(models.Model):
    Nombre = models.CharField(max_length=200)
    Apellidos = models.CharField(max_length=200)


class Usuario(models.Model):
    Correo = models.CharField(max_length=200, primary_key=True)
    Nombre = models.CharField(max_length=200)
    Apellidos=models.CharField(max_length=200)
    Cedula=models.CharField(max_length=10)
    FechaNacimiento=models.DateField()

class Usuario_Libro(models.Model):
    Correo = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    IdLibro = models.ForeignKey(Libro, on_delete=models.CASCADE)


class Libro_Autor(models.Model):
    IdAutor = models.ForeignKey(Autor, on_delete=models.CASCADE)
    IdLibro = models.ForeignKey(Libro, on_delete=models.CASCADE)


