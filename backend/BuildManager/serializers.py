from rest_framework import serializers
from . models import Part

class PartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Part
        fields = ['type', 'name', 'cost', 'description']