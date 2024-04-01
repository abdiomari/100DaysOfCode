from . import views
from django.urls import path

app_name = 'api'

urlpatterns = [
   path('route', views.route, name='route'),
    path('map', views.map, name='map')
]
