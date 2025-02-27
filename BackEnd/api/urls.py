from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from medicare.views import CustomerViewSet, ProductViewSet, login, signup, CategoryViewSet, PostViewSet
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'customers', CustomerViewSet)
router.register(r'products', ProductViewSet)
router.register(r'category', CategoryViewSet)
router.register(r'posts', PostViewSet)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/login/', login, name='login'),
    path('api/signup/', signup, name='signup'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
