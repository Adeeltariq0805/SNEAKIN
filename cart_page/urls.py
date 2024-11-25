from django.conf import settings
from . import views
from django.conf.urls.static import static
from django.urls import path

urlpatterns = [
    path('',views.cart_page,name='cart_page'),
    path('delete/',views.cart_delete,name='cart_delete'),
    path('add/',views.cart_add,name='cart_add'),
    path('update/',views.cart_update,name='cart_update'),
    
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])