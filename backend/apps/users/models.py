from django.db import models
from apps.groups.models import Group

#model to user table 
class User(models.Model):
    username = models.CharField("User Nickname", max_length=100)
    created = models.DateTimeField("Created At", auto_now_add=True)
    """
    one user can add many groups, and groups can have many users
    """
    group = models.ManyToManyField(Group, related_name="users_group", verbose_name="The User Group")

    def __str__(self):
        return self.username
    
    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
    
