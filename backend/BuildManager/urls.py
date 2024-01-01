from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path('all_cpus/', views.get_cpus),
    path('all_cases/', views.get_cases)
]