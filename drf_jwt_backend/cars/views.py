from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Car
from .serializers import CarSerializer
from django.contrib.auth.models import User


# class Carlist(APIView):

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_cars(request):
    cars = Car.objects.all()
    serializer = CarSerializer(cars,many=True)
    return Response(serializer.data)

@api_view(['POST', 'GET'])
@permission_classes([IsAuthenticated])
def user_cars(request):
    if request.method == 'POST':
        serializer = CarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        cars = Car.objects.filter(user_id=request.user.id)
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)