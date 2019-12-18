from django.db import models

# Create your models here.


class Account(models.Model):
    account_option = (
        ('available balance', 'AVAILABLE BALANCE'),
    )
    