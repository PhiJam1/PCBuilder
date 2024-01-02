from rest_framework import serializers
from . models import Part
from . models import Build

class PartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Part
        fields = ['type', 'name', 'cost', 'description']

class BuildSerializer(serializers.ModelSerializer):
    class Meta:
        model = Build
        fields = ['buildNum', 'status', 'phoneNumber', 'email', 'template',
                  'currCase', 'currCase', 'currCPU', 'currCPUCooler', 
                  'problem_description',
                  'currMotherboard', 'currMemory', 'currStorage', 'currGPU', 
                  'currPowerSupply', 'currOperatingSystem', 'other', 'otherCost'
                ]