from django.shortcuts import render
from django.views import View
from django.http import JsonResponse

import os
import json


class IndexView(View):
    template_name = 'home/index.html'

    def get(self, request, *args, **kwargs):
        template_context_data = dict()
        return render(request, self.template_name, template_context_data)


class DataView(View):

    def get(self, request, *args, **kwargs):
        file_path = os.getcwd() + "/home/static/data.json"
        with open(file_path) as f:
            data = json.load(f)

        return JsonResponse(data)
