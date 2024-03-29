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
        datas[i]["partCosts"] = get_part_costs(templates[i])
        
    return Response(datas, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_build_info(request):
    try:
        build = Build.objects.get(buildNum=request.GET.get("buildNum"))
        
        serializer = BuildSerializer(build, many=False)
        
        datas = serializer.data
        
        datas["cost"] = get_cost_val(build)
        datas["parts"] = get_part_names_val(build)
        return Response(datas, status=status.HTTP_200_OK)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

def get_cost_val(build):
    cost = 0 if build.currCase == None else build.currCase.cost
    cost += 0 if build.currCPU == None else build.currCPU.cost 
    cost += 0 if build.currCPUCooler == None else build.currCPUCooler.cost
    cost += 0 if build.currMotherboard == None else build.currMotherboard.cost 
    cost += 0 if build.currMemory == None else build.currMemory.cost
    cost += 0 if build.currStorage == None else build.currStorage.cost
    cost += 0 if build.currGPU == None else build.currGPU.cost
    cost += 0 if build.currPowerSupply == None else build.currPowerSupply.cost
    cost += 0 if build.currOperatingSystem == None else build.currOperatingSystem.cost
    cost += build.otherCost
    return cost

def get_part_names_val(build):
    parts = {'CPU': build.currCPU.name, 'CASE': build.currCase.name,
             'CPU_COOLER': build.currCPUCooler.name, 'MOTHERBOARD': build.currMotherboard.name,
             'MEMORY': build.currMemory.name, 'STORAGE': build.currStorage.name,
             'GPU': build.currGPU.name, 'POWER_SUPPLY': build.currPowerSupply.name, 
             'OPERATING_SYSTEM': build.currOperatingSystem.name
             }
    return parts

def get_part_costs(build):
    costs = {'CPU': 0 if build.currCPU == None else build.currCPU.cost,
             'CASE': 0 if build.currCase == None else build.currCase.cost,
             'CPU_COOLER': 0 if build.currCPUCooler == None else build.currCPUCooler.cost,
             'MOTHERBOARD': 0 if build.currMotherboard == None else build.currMotherboard.cost,
             'MEMORY': 0 if build.currMemory == None else build.currMemory.cost,
             'STORAGE': 0 if build.currStorage == None else build.currStorage.cost,
             'GPU': 0 if build.currGPU == None else build.currGPU.cost,
             'POWER_SUPPLY': 0 if build.currPowerSupply == None else build.currPowerSupply.cost, 
             'OPERATING_SYSTEM': 0 if build.currOperatingSystem == None else build.currOperatingSystem.cost
             }
    return costs

@api_view(['GET'])
def get_parts_cost(request):
    try:
        build = Build.objects.get(buildNum=request.GET.get('buildNum'))
        costs = get_part_costs(build)
        return Response(costs, status=status.HTTP_200_OK)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['GET'])
def get_cost(request):
    try:
        build = Build.objects.get(buildNum=request.GET.get('buildNum'))
        cost = get_cost_val(build)
        return Response(cost, status=status.HTTP_200_OK)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['GET'])
def get_part_names(request):
    try:
        build = Build.objects.get(buildNum=request.GET.get('buildNum'))
        parts = {'CPU': build.currCase.name, 'CASE': build.currCPU.name,
                'CPU_COOLER': build.currCPUCooler.name, 'MOTHERBOARD': build.currMotherboard.name,
                'MEMORY': build.currMemory.name, 'STORAGE': build.currStorage.name,
                'GPU': build.currGPU.name, 'POWER_SUPPLY': build.currPowerSupply.name, 
                'OPERATING_SYSTEM': build.currOperatingSystem.name
                }
        return Response(parts, status=status.HTTP_200_OK)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['POST'])
def register_build(request):
    templateBuildNum = request.data["templateBuildNum"];
    newBuild = Build()
    if (templateBuildNum == 0):
        # bare, start from scratch build
        newBuild.status = "UNFINISHED"
        newBuild.template = "CUSTOM"
    else:
        templateBuild = Build.objects.get(buildNum=templateBuildNum)
        newBuild.status = "UNFINISHED"
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
    try:
        build = Build.objects.get(buildNum=request.GET.get("buildNum"))
        if (request.method == 'GET'):
            if (build.currCase == None):
                return Response(status=status.HTTP_204_NO_CONTENT)
            return Response(build.currCase.name, status=status.HTTP_200_OK)
        if (request.method == 'POST'):
            newPart = request.data["newPart"]
            build.currCase = Part.objects.get(name=newPart)
            build.save()
            return Response(status=status.HTTP_202_ACCEPTED)
        # return Response(status=status.HTTP_100_CONTINUE)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['GET', 'POST'])
def curr_cpu(request):
    try:
        build = Build.objects.get(buildNum=request.GET.get("buildNum"))
        if (request.method == 'GET'):
            if (build.currCPU == None):
                return Response(status=status.HTTP_204_NO_CONTENT)
            return Response(build.currCPU.name, status=status.HTTP_200_OK)
        if (request.method == 'POST'):
            newPart = request.data["newPart"]
            build.currCPU = Part.objects.get(name=newPart)
            build.save()
            return Response(status=status.HTTP_202_ACCEPTED)
        # return Response(status=status.HTTP_100_CONTINUE)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['GET', 'POST'])
def curr_cpu_cooler(request):
    try:
        build = Build.objects.get(buildNum=request.GET.get("buildNum"))
        if (request.method == 'GET'):
            if (build.currCPUCooler == None):
                return Response(status=status.HTTP_204_NO_CONTENT)
            return Response(build.currCPUCooler.name, status=status.HTTP_200_OK)
        if (request.method == 'POST'):
            newPart = request.data["newPart"]
            build.currCPUCooler = Part.objects.get(name=newPart)
            build.save()
            return Response(status=status.HTTP_202_ACCEPTED)
        # return Response(status=status.HTTP_100_CONTINUE)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['GET', 'POST'])
def curr_motherboard(request):
    try:
        build = Build.objects.get(buildNum=request.GET.get("buildNum"))
        if (request.method == 'GET'):
            if (build.currMotherboard == None):
                return Response(status=status.HTTP_204_NO_CONTENT)
            return Response(build.currMotherboard.name, status=status.HTTP_200_OK)
        if (request.method == 'POST'):
            newPart = request.data["newPart"]
            build.currMotherboard = Part.objects.get(name=newPart)
            build.save()
            return Response(status=status.HTTP_202_ACCEPTED)
        # return Response(status=status.HTTP_100_CONTINUE)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['GET', 'POST'])
def curr_memory(request):
    try:
        build = Build.objects.get(buildNum=request.GET.get("buildNum"))
        if (request.method == 'GET'):
            if (build.currMemory == None):
                return Response(status=status.HTTP_204_NO_CONTENT)
            return Response(build.currMemory.name, status=status.HTTP_200_OK)
        if (request.method == 'POST'):
            newPart = request.data["newPart"]
            build.currMemory = Part.objects.get(name=newPart)
            build.save()
            return Response(status=status.HTTP_202_ACCEPTED)
        # return Response(status=status.HTTP_100_CONTINUE)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['GET', 'POST'])
def curr_storage(request):
    try:
        build = Build.objects.get(buildNum=request.GET.get("buildNum"))
        if (request.method == 'GET'):
            if (build.currStorage == None):
                return Response(status=status.HTTP_204_NO_CONTENT)
            return Response(build.currStorage.name, status=status.HTTP_200_OK)
        if (request.method == 'POST'):
            newPart = request.data["newPart"]
            build.currStorage = Part.objects.get(name=newPart)
            build.save()
            return Response(status=status.HTTP_202_ACCEPTED)
        # return Response(status=status.HTTP_100_CONTINUE)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['GET', 'POST'])
def curr_gpu(request):
    try:
        build = Build.objects.get(buildNum=request.GET.get("buildNum"))
        if (request.method == 'GET'):
            if (build.currGPU == None):
                return Response(status=status.HTTP_204_NO_CONTENT)
            return Response(build.currGPU.name, status=status.HTTP_200_OK)
        if (request.method == 'POST'):
            newPart = request.data["newPart"]
            build.currGPU = Part.objects.get(name=newPart)
            build.save()
            return Response(status=status.HTTP_202_ACCEPTED)
        # return Response(status=status.HTTP_100_CONTINUE)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['GET', 'POST'])
def curr_power_supply(request):
    try:
        build = Build.objects.get(buildNum=request.GET.get("buildNum"))
        if (request.method == 'GET'):
            if (build.currPowerSupply == None):
                return Response(status=status.HTTP_204_NO_CONTENT)
            return Response(build.currPowerSupply.name, status=status.HTTP_200_OK)
        if (request.method == 'POST'):
            newPart = request.data["newPart"]
            build.currPowerSupply = Part.objects.get(name=newPart)
            build.save()
            return Response(status=status.HTTP_202_ACCEPTED)
        # return Response(status=status.HTTP_100_CONTINUE)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['GET', 'POST'])
def curr_operating_system(request):
    try:
        build = Build.objects.get(buildNum=request.GET.get("buildNum"))
        if (request.method == 'GET'):
            if (build.currOperatingSystem == None):
                return Response(status=status.HTTP_204_NO_CONTENT)
            return Response(build.currOperatingSystem.name, status=status.HTTP_200_OK)
        if (request.method == 'POST'):
            newPart = request.data["newPart"]
            build.currOperatingSystem = Part.objects.get(name=newPart)
            build.save()
            return Response(status=status.HTTP_202_ACCEPTED)
        # return Response(status=status.HTTP_100_CONTINUE)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['GET'])
def get_template_name(request):
    try:
        build = Build.objects.get(buildNum=request.GET.get("buildNum"))
        return Response(build.template, status=status.HTTP_200_OK)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['GET'])
def get_status(request):
    try:
        build = Build.objects.get(buildNum=request.GET.get("buildNum"))
        return Response(build.status, status=status.HTTP_200_OK)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['POST'])
def update_status(request):
    try:
        build = Build.objects.get(buildNum=request.data["buildNum"])
        build.status = request.data["status"]
        build.save()
        return Response(status=status.HTTP_202_ACCEPTED)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['POST'])
def update_contact_info(request):
    try:
        build = Build.objects.get(buildNum=request.data["buildNum"])
        build.email = request.data["email"]
        build.phoneNumber = request.data["phone_number"]
        build.save()
        return Response(status=status.HTTP_202_ACCEPTED)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['GET'])
def get_email(request):
    try:
        build = Build.objects.get(buildNum=request.GET.get("buildNum"))
        return Response(build.email, status=status.HTTP_200_OK)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['GET'])
def get_phone_number(request):
    try:
        build = Build.objects.get(buildNum=request.GET.get("buildNum"))
        return Response(build.phoneNumber, status=status.HTTP_200_OK)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['GET'])
def get_other(request):
    try:
        build = Build.objects.get(buildNum=request.GET.get("buildNum"))
        return Response(build.other, status=status.HTTP_200_OK)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['POST'])
def set_other(request):
    try:
        build = Build.objects.get(buildNum=request.data["buildNum"])
        build.other = request.data["other"]
        build.save()
        return Response(status=status.HTTP_200_OK)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['GET'])
def get_other_cost(request):
    try:
        build = Build.objects.get(buildNum=request.GET.get("buildNum"))
        return Response(build.otherCost, status=status.HTTP_200_OK)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);

@api_view(['POST'])
def set_other_cost(request):
    try:
        build = Build.objects.get(buildNum=request.data["buildNum"])
        newCost = request.data["otherCost"]
        if (newCost == ""):
            build.otherCost = 0
        else:
            build.otherCost = newCost
        
        build.save()
        print(build.otherCost)
        return Response(status=status.HTTP_200_OK)
    except Build.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND);
