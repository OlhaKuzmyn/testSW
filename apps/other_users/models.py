from django.core.validators import MaxLengthValidator, MinLengthValidator
from django.db import models

from apps.other_groups.models import OtherGroupModel


class OtherUserModel(models.Model):
    class Meta:
        db_table = 'users'

    username = models.CharField(max_length=200, validators=[MaxLengthValidator(200), MinLengthValidator(2)])
    created = models.DateTimeField(auto_now_add=True)
    group = models.ForeignKey(OtherGroupModel, on_delete=models.PROTECT, related_name='users')
