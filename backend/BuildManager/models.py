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
    
    # logistic information
    buildNum = models.IntegerField(unique=True, default=get_build_num)
    status = models.CharField(max_length=200)
    phoneNumber = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    template = models.CharField(max_length=200)
    problem_description = models.TextField()
    # parts
    currCase = models.ForeignKey(Part, on_delete=models.SET_NULL, null=True, related_name='case')
    currCPU = models.ForeignKey(Part, on_delete=models.SET_NULL, null=True, related_name='cpu')
    currCPUCooler = models.ForeignKey(Part, on_delete=models.SET_NULL, null=True, related_name='cpu_cooler')
    currMotherboard = models.ForeignKey(Part, on_delete=models.SET_NULL, null=True, related_name='motherboard')
    currMemory = models.ForeignKey(Part, on_delete=models.SET_NULL, null=True, related_name='memory')
    currStorage = models.ForeignKey(Part, on_delete=models.SET_NULL, null=True, related_name='storage')
    currGPU = models.ForeignKey(Part, on_delete=models.SET_NULL, null=True, related_name='gpu')
    currPowerSupply = models.ForeignKey(Part, on_delete=models.SET_NULL, null=True, related_name='power_supply')
    currOperatingSystem = models.ForeignKey(Part, on_delete=models.SET_NULL, null=True, related_name='operating_system')
    other = models.TextField()
    otherCost = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def get_total_cost(self):
        total = self.currCase.cost + self.currCPU.cost + self.currCPUCooler + self.currMotherboard + self.currMemory + self.currGPU + self.currPowerSupply + self.currOperatingSystem + self.otherCost
        return total