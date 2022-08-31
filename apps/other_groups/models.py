from django.core.validators import MaxLengthValidator, MinLengthValidator
from django.db import models


class OtherGroupModel(models.Model):
    class Meta:
        db_table = 'groups'

    name = models.CharField(max_length=200, validators=[MaxLengthValidator(200), MinLengthValidator(2)])
    description = models.TextField(max_length=2000, validators=[MaxLengthValidator(2000)])
