from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from . models import Part
from . models import Build
from . serializers import PartSerializer
from . serializers import BuildSerializer
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


# function for templates and build info
@api_view(['GET'])
def get_templates(request):
    templates = Build.objects.filter(status="TEMPLATE")
    serializer = BuildSerializer(templates, many=True)
    datas = serializer.data

    for i in range(0, len(templates)):
        datas[i]["cost"] = get_cost_val(templates[i])
        datas[i]["parts"] = get_part_names_val(templates[i])
        
    return Response(datas, status=status.HTTP_200_OK)

def get_cost_val(build):
    cost = build.currCase.cost + build.currCPU.cost 
    cost += build.currCPUCooler.cost + build.currMotherboard.cost 
    cost += build.currMemory.cost + build.currStorage.cost
    cost += build.currGPU.cost + build.currPowerSupply.cost
    cost += build.currOperatingSystem.cost + build.otherCost
    return cost

def get_part_names_val(build):
    parts = {'CPU': build.currCase.name, 'CASE': build.currCPU.name,
             'CPU_COOLER': build.currCPUCooler.name, 'MOTHERBOARD': build.currMotherboard.name,
             'MEMORY': build.currMemory.name, 'STORAGE': build.currStorage.name,
             'GPU': build.currGPU.name, 'POWER_SUPPLY': build.currPowerSupply.name, 
             'OPERATING_SYSTEM': build.currOperatingSystem.name
             }
    return parts

@api_view(['GET'])
def get_cost(request):
    build = Build.objects.get(buildNum=request.data['buildNum'])
    cost = build.currCase.cost + build.currCPU.cost 
    cost += build.currCPUCooler.cost + build.currMotherboard.cost 
    cost += build.currMemory.cost + build.currStorage.cost
    cost += build.currGPU.cost + build.currPowerSupply.cost
    cost += build.currOperatingSystem.cost + build.otherCost
    return Response({"cost": cost}, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_part_names(request):
    build = Build.objects.get(buildNum=request.data['buildNum'])
    parts = {'CPU': build.currCase.name, 'CASE': build.currCPU.name,
             'CPU_COOLER': build.currCPUCooler.name, 'MOTHERBOARD': build.currMotherboard.name,
             'MEMORY': build.currMemory.name, 'STORAGE': build.currStorage.name,
             'GPU': build.currGPU.name, 'POWER_SUPPLY': build.currPowerSupply.name, 
             'OPERATING_SYSTEM': build.currOperatingSystem.name
             }
    return Response(parts, status=status.HTTP_200_OK)