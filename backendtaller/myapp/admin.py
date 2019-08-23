from django.contrib import admin
from .models import Libro, Autor, Usuario, Usuario_Libro, Libro_Autor

admin.site.register(Libro)
admin.site.register(Autor)
admin.site.register(Usuario)
admin.site.register(Usuario_Libro)
admin.site.register(Libro_Autor)