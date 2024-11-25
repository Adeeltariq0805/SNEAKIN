from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=50)
    price = models.IntegerField(default=0)
    discription = models.TextField(max_length=500, default='',null=True,blank=True)
    image = models.ImageField(upload_to='media/product_images/',default='')
    
    def __str__(self):
        return self.name

