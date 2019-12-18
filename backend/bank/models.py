from django.db import models

# Create your models here.


class Account(models.Model):
    account_options = (
        ('account', 'ACCOUNT'),
        ('checking', 'CHECKING'),
        ('balance', 'BALANCE'),
    )

    username = models.CharField(max_length=100)
    email = models.CharField(max_length=200)
    product_options = models.CharFeild(mac_length=9,
    choices=account_options,
    default=account_options[0],
    )

    def _str_(self):
        return(f"Account Name {self.username} Account Email {self.product_email}")