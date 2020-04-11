from django.db import models

#model to group table
class Group(models.Model):
    name = models.CharField("Name", max_length=150)
    description = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Group"
        verbose_name_plural = "Groups"

    


    

