from django.contrib import admin
from .models import Account
from .models import Customer

# Register your models here.

admin.site.register(Account)
admin.site.register(Customer)

