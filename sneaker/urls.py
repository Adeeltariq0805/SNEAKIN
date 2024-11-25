from django.urls import path
from django.conf import settings 

from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('',views.home, name='home'),
    path('basic/',views.basic, name='basic'),
    path('home/<int:product_id>/',views.home),
    path('login/',views.login_view, name='login-page'),
    path('signup/',views.signup_view, name='signup-page'),
    path('logout',views.logout_view, name='logout'),
    path('checkout/',views.checkout_view, name='checkout'),
    path('prodetail/<int:pk>/',views.prodetail, name='prodetail'),
    # cartcsection//////////////
 
  
    
    
    
]





if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])
