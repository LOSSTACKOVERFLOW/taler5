from rest_framework import routers as merouters
from .views import *


router = merouters.DefaultRouter()
router.register(r'Libro', LibroViewSet)
router.register(r'Autor', AutorViewSet)
# router.register(r'Usuario', UsuarioViewSet)
router.register(r'Usuario_Libro', Usuario_LibroViewSet)
router.register(r'Libro_Autor', Libro_AutorViewSet)
urlpatterns = [
    
]
urlpatterns+=router.urls