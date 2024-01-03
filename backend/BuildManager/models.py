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
        num = 0
        while True:
            try:
                num = random.randint(11, 100000)
                val = Build.objects.get(buildNum=num)
            except Build.DoesNotExist:
                break
        return num
    
    # logistic information
    buildNum = models.IntegerField(unique=True, default=get_build_num)
    status = models.CharField(max_length=200) # set to 'TEMPLATE' if this is a boilerplate/preset build
    phoneNumber = models.CharField(max_length=100, blank=True)
    email = models.CharField(max_length=100, blank=True)
    template = models.CharField(max_length=200) # what template this is based off of
    problem_description = models.TextField(blank=True)
    # parts
    currCase = models.ForeignKey(Part, on_delete=models.SET_NULL, null=True, related_name='case', blank=True)
    currCPU = models.ForeignKey(Part, on_delete=models.SET_NULL, null=True, related_name='cpu', blank=True)
    currCPUCooler = models.ForeignKey(Part, on_delete=models.SET_NULL, null=True, related_name='cpu_cooler', blank=True)
    currMotherboard = models.ForeignKey(Part, on_delete=models.SET_NULL, null=True, related_name='motherboard', blank=True)
    currMemory = models.ForeignKey(Part, on_delete=models.SET_NULL, null=True, related_name='memory', blank=True)
    currStorage = models.ForeignKey(Part, on_delete=models.SET_NULL, null=True, related_name='storage', blank=True)
    currGPU = models.ForeignKey(Part, on_delete=models.SET_NULL, null=True, related_name='gpu', blank=True)
    currPowerSupply = models.ForeignKey(Part, on_delete=models.SET_NULL, null=True, related_name='power_supply', blank=True)
    currOperatingSystem = models.ForeignKey(Part, on_delete=models.SET_NULL, null=True, related_name='operating_system', blank=True)
    other = models.TextField(blank=True)
    otherCost = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def get_total_cost(self):
        total = self.currCase.cost + self.currCPU.cost + self.currCPUCooler + self.currMotherboard + self.currMemory + self.currGPU + self.currPowerSupply + self.currOperatingSystem + self.otherCost
        return total
    def __str__(self):
        return self.status + " " + str(self.buildNum)