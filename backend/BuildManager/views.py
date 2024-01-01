from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from . models import Part
from . serializers import PartSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


# Create your views here.

def home(request):
    return HttpResponse("Go to /admin/ page and log in")


# ENDPOINTS FOR EACH PART - THE CATALOG
@api_view(['GET'])
def get_cpus(request):
    cpus = Part.objects.filter(type="CPU")

    serializer = PartSerializer(cpus, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_cases(request):
    cases = Part.objects.filter(type="CASE")
    serializer = PartSerializer(cases, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_cpu_coolers(request):
    cpu_coolers = Part.objects.filter(type="CPU_COOLER")
    serializer = PartSerializer(cpu_coolers, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_motherboards(request):
    motherboards = Part.objects.filter(type="MOTHERBOARD")
    serializer = PartSerializer(motherboards, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_storages(request):
    storages = Part.objects.filter(type="STORAGE")
    serializer = PartSerializer(storages, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_gpu(request):
    gpus = Part.objects.filter(type="GPU")
    serializer = PartSerializer(gpus, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_power_supplies(request):
    power_supplies = Part.objects.filter(type="POWER_SUPPLY")
    serializer = PartSerializer(power_supplies, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_operating_systems(request):
    operating_systems = Part.objects.filter(type="OPERATING_SYSTEM")
    serializer = PartSerializer(operating_systems, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_memories(request):
    memories = Part.objects.filter(type="MEMORY")
    serializer = PartSerializer(memories, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)