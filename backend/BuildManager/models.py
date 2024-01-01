from django.db import models

# Create your models here.


class Part(models.Model):
    type = models.CharField(max_length=100)
    name = models.CharField(max_length=500)
    cost = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()

    def __str__(self):
        return self.type + " - " + self.name