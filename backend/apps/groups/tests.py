import json
import unittest
from .models import Group
from django.urls import reverse
from rest_framework import status
from rest_framework.test import (
                            APITestCase,
                            RequestsClient,
                            APIRequestFactory,
                            APIClient,
                        )

class GroupTests(APITestCase):
    def setUp(self):
        self.group = Group(name='Admins', description='Test description' )
        self.group.save()


    def test_group_create(self):
        response = self.client.post(reverse('groups'), {
            'name': 'Admins 2',
            'description': 'Description',
        })
        self.assertEqual(Group.objects.count(), 2)
        self.assertEqual(201, response.status_code)


    def test_getting_group(self):
        response = self.client.get(reverse('groups'), format="json")
        self.assertEqual(len(response.data), 4)


    def test_updating_group(self):
        response = self.client.put(reverse('group_details', kwargs={'pk':self.group.id}), {
            'name': 'group 1 updated',
            'description': 'group 1 updated'
            }, format="json")
        response = response.json()
        self.assertEqual('group 1 updated', response['name'])
        self.assertEqual('group 1 updated', response['description'])


    def test_deleting_group(self):
        response = self.client.delete(reverse('group_details', kwargs={'pk': self.group.id}))
        self.assertEqual(204, response.status_code)
    