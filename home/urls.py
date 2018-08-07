from django.conf.urls import url, include
from . import views

app_name='home'
urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name='index'),
    url(r'^data$', views.DataView.as_view(), name='data'),
]