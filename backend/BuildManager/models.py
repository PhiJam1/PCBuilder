from django.db import models
import random
# Create your models here.


class Part(models.Model):
    type = models.CharField(max_length=100)
    name = models.CharField(max_length=500)
    cost = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()

    def __str__(self):
        return self.type + " - " + self.name
    


# This is the class that is in charge of each build 

class Build(models.Model):

    def get_build_num():
        return random.randint(11, 1000)
    

    buildNum = models.IntegerField(unique=True default=get_build_num)
    status = models.CharField(max_length=200)
    phoneNumber = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    # parts
    currCase = models.ForeignKey(Part, on_delete=models.SET_NULL)
    currCPU = models.ForeignKey(Part, on_delete=models.SET_NULL)
    currCPUCooler = models.ForeignKey(Part, on_delete=models.SET_NULL)
    currMotherboard = models.ForeignKey(Part, on_delete=models.SET_NULL)
    currMemory = models.ForeignKey(Part, on_delete=models.SET_NULL)
    currStorage = models.ForeignKey(Part, on_delete=models.SET_NULL)
    currGPU = models.ForeignKey(Part, on_delete=models.SET_NULL)
    currPowerSupply = models.ForeignKey(Part, on_delete=models.SET_NULL)
    currOperatingSystem = models.ForeignKey(Part, on_delete=models.SET_NULL)
    other = models.TextField();
    otherCost = models.DecimalField(max_digits=10, decimal_places=2)