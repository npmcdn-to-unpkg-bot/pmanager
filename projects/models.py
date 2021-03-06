from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from django.utils.encoding import python_2_unicode_compatible


@python_2_unicode_compatible
class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(max_length=50, unique=True)

    def __str__(self):
        return self.name


@python_2_unicode_compatible
class Project(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    category = models.ForeignKey(Category, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    due = models.DateTimeField(null=True, blank=True)
    parent = models.ForeignKey('self', null=True, blank=True)

    def __str__(self):
        return self.title
