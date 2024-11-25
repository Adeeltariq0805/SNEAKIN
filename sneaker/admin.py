from django.contrib import admin
from .models import Product
# Register your here.
class ProductAdmin(admin.ModelAdmin): 
    list_display = ('name', 'price', 'image')
admin.site.register(Product,ProductAdmin)