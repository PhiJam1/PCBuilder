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

@api_view(['GET'])
def get_build_info(request):
    print("\n\nhere\n\n")
    build = Build.objects.get(buildNum=request.GET.get("buildNum"))
    
    serializer = BuildSerializer(build, many=False)
    
    datas = serializer.data
    
    datas["cost"] = get_cost_val(build)
    datas["parts"] = get_part_names_val(build)
    print("\n\nhere 2\n\n")
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
    build = Build.objects.get(buildNum=request.GET.get('buildNum'))
    cost = build.currCase.cost + build.currCPU.cost 
    cost += build.currCPUCooler.cost + build.currMotherboard.cost 
    cost += build.currMemory.cost + build.currStorage.cost
    cost += build.currGPU.cost + build.currPowerSupply.cost
    cost += build.currOperatingSystem.cost + build.otherCost
    return Response(cost, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_part_names(request):
    build = Build.objects.get(buildNum=request.GET.get('buildNum'))
    parts = {'CPU': build.currCase.name, 'CASE': build.currCPU.name,
             'CPU_COOLER': build.currCPUCooler.name, 'MOTHERBOARD': build.currMotherboard.name,
             'MEMORY': build.currMemory.name, 'STORAGE': build.currStorage.name,
             'GPU': build.currGPU.name, 'POWER_SUPPLY': build.currPowerSupply.name, 
             'OPERATING_SYSTEM': build.currOperatingSystem.name
             }
    return Response(parts, status=status.HTTP_200_OK)

@api_view(['POST'])
def register_build(request):
    templateBuildNum = request.data["templateBuildNum"];
    newBuild = Build()
    if (templateBuildNum == 0):
        # bare, start from scratch build
        newBuild.status = "UNSUBMITTED"
        newBuild.template = "CUSTOM"
    else:
        templateBuild = Build.objects.get(buildNum=templateBuildNum)
        newBuild.status = "UNSUBMITTED"
        newBuild.template = templateBuild.template
        newBuild.currCase = templateBuild.currCase
        newBuild.currCPU= templateBuild.currCPU
        newBuild.currCPUCooler = templateBuild.currCPUCooler
        newBuild.currMotherboard = templateBuild.currMotherboard
        newBuild.currMemory = templateBuild.currMemory
        newBuild.currStorage = templateBuild.currStorage
        newBuild.currGPU = templateBuild.currGPU
        newBuild.currPowerSupply = templateBuild.currPowerSupply
        newBuild.currOperatingSystem = templateBuild.currOperatingSystem
    newBuild.save()
    return Response({"buildNum": newBuild.buildNum}, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def valid_build_num(request):
    buildNum = request.GET.get('buildNum')

    try:
        val = Build.objects.get(buildNum=buildNum)
        return Response({"valid": True})
    except Build.DoesNotExist:
        return Response({"valid": False})
    

@api_view(['GET', 'POST'])
def curr_case(request):
    build = Build.objects.get(buildNum=request.GET.get("buildNum"))
    if (request.method == 'GET'):
        return Response(build.currCase.name, status=status.HTTP_200_OK)
    if (request.method == 'POST'):
        newPart = request.data["newPart"]
        build.currCase = Part.objects.get(name=newPart)
        build.save()
        return Response(status=status.HTTP_202_ACCEPTED)
    # return Response(status=status.HTTP_100_CONTINUE)

@api_view(['GET', 'POST'])
def curr_cpu(request):
    build = Build.objects.get(buildNum=request.GET.get("buildNum"))
    if (request.method == 'GET'):
        return Response(build.currCPU.name, status=status.HTTP_200_OK)
    if (request.method == 'POST'):
        newPart = request.data["newPart"]
        build.currCPU = Part.objects.get(name=newPart)
        build.save()
        return Response(status=status.HTTP_202_ACCEPTED)
    # return Response(status=status.HTTP_100_CONTINUE)

@api_view(['GET', 'POST'])
def curr_cpu_cooler(request):
    build = Build.objects.get(buildNum=request.GET.get("buildNum"))
    if (request.method == 'GET'):
        return Response(build.currCPUCooler.name, status=status.HTTP_200_OK)
    if (request.method == 'POST'):
        newPart = request.data["newPart"]
        build.currCPUCooler = Part.objects.get(name=newPart)
        build.save()
        return Response(status=status.HTTP_202_ACCEPTED)
    # return Response(status=status.HTTP_100_CONTINUE)

@api_view(['GET', 'POST'])
def curr_motherboard(request):
    build = Build.objects.get(buildNum=request.GET.get("buildNum"))
    if (request.method == 'GET'):
        return Response(build.currMotherboard.name, status=status.HTTP_200_OK)
    if (request.method == 'POST'):
        newPart = request.data["newPart"]
        build.currMotherboard = Part.objects.get(name=newPart)
        build.save()
        return Response(status=status.HTTP_202_ACCEPTED)
    # return Response(status=status.HTTP_100_CONTINUE)

@api_view(['GET', 'POST'])
def curr_memory(request):
    build = Build.objects.get(buildNum=request.GET.get("buildNum"))
    if (request.method == 'GET'):
        return Response(build.currMemory.name, status=status.HTTP_200_OK)
    if (request.method == 'POST'):
        newPart = request.data["newPart"]
        build.currMemory = Part.objects.get(name=newPart)
        build.save()
        return Response(status=status.HTTP_202_ACCEPTED)
    # return Response(status=status.HTTP_100_CONTINUE)

@api_view(['GET', 'POST'])
def curr_storage(request):
    build = Build.objects.get(buildNum=request.GET.get("buildNum"))
    if (request.method == 'GET'):
        return Response(build.currStorage.name, status=status.HTTP_200_OK)
    if (request.method == 'POST'):
        newPart = request.data["newPart"]
        build.currStorage = Part.objects.get(name=newPart)
        build.save()
        return Response(status=status.HTTP_202_ACCEPTED)
    # return Response(status=status.HTTP_100_CONTINUE)

@api_view(['GET', 'POST'])
def curr_gpu(request):
    build = Build.objects.get(buildNum=request.GET.get("buildNum"))
    if (request.method == 'GET'):
        return Response(build.currGPU.name, status=status.HTTP_200_OK)
    if (request.method == 'POST'):
        newPart = request.data["newPart"]
        build.currGPU = Part.objects.get(name=newPart)
        build.save()
        return Response(status=status.HTTP_202_ACCEPTED)
    # return Response(status=status.HTTP_100_CONTINUE)

@api_view(['GET', 'POST'])
def curr_power_supply(request):
    build = Build.objects.get(buildNum=request.GET.get("buildNum"))
    if (request.method == 'GET'):
        return Response(build.currPowerSupply.name, status=status.HTTP_200_OK)
    if (request.method == 'POST'):
        newPart = request.data["newPart"]
        build.currPowerSupply = Part.objects.get(name=newPart)
        build.save()
        return Response(status=status.HTTP_202_ACCEPTED)
    # return Response(status=status.HTTP_100_CONTINUE)

@api_view(['GET', 'POST'])
def curr_operating_system(request):
    build = Build.objects.get(buildNum=request.GET.get("buildNum"))
    if (request.method == 'GET'):
        return Response(build.currOperatingSystem.name, status=status.HTTP_200_OK)
    if (request.method == 'POST'):
        newPart = request.data["newPart"]
        build.currOperatingSystem = Part.objects.get(name=newPart)
        build.save()
        return Response(status=status.HTTP_202_ACCEPTED)
    # return Response(status=status.HTTP_100_CONTINUE)

@api_view(['GET'])
def get_template_name(request):
    build = Build.objects.get(buildNum=request.GET.get("buildNum"))
    return Response(build.template, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_status(request):
    build = Build.objects.get(buildNum=request.GET.get("buildNum"))
    return Response(build.status, status=status.HTTP_200_OK)

@api_view(['POST'])
def update_status(request):
    build = Build.objects.get(buildNum=request.data["buildNum"])
    build.status = request.data["status"]
    build.save()
    return Response(status=status.HTTP_202_ACCEPTED)

@api_view(['POST'])
def update_contact_info(request):
    build = Build.objects.get(buildNum=request.data["buildNum"])
    build.email = request.data["email"]
    build.phoneNumber = request.data["phone_number"]
    build.save()
    return Response(status=status.HTTP_202_ACCEPTED)

@api_view(['GET'])
def get_email(request):
    build = Build.objects.get(buildNum=request.GET.get("buildNum"))
    return Response(build.email, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_phone_number(request):
    build = Build.objects.get(buildNum=request.GET.get("buildNum"))
    return Response(build.phoneNumber, status=status.HTTP_200_OK)
