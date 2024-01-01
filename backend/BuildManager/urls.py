from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path('all_cpus/', views.get_cpus),
    path('all_cases/', views.get_cases),
    path('all_cpu_coolers/', views.get_cpu_coolers),
    path('all_motherboards/', views.get_motherboards),
    path('all_storage/', views.get_storages),
    path('all_memories/', views.get_memories),
    path('all_gpus/', views.get_gpu),
    path('all_power_supply/', views.get_power_supplies),
    path('all_operating_systems/', views.get_operating_systems)
]