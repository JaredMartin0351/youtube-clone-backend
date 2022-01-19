from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
from .serializers import CommentSerializer, ReplySerializer
from django.shortcuts import render
from .models import Comment, Reply 


# class CommentList(APIView):

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request):
    comment = Comment.objects.all()  
    serializer = CommentSerializer(comment,many=True)
    return Response(serializer.data)


@api_view(['POST', 'GET'])
@permission_classes([IsAuthenticated])
def create_comment(request):
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        comment = Comment.objects.filter(user_id=request.user.id)
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data) 


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_replies(request):
    reply = Reply.objects.all() 
    serializer = ReplySerializer 
    serializer = ReplySerializer(reply,many=True)
    return Response(serializer.data) 


@api_view(['POST', 'GET'])
@permission_classes([IsAuthenticated])
def create_reply(request):
    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        comment = Comment.objects.filter(user_id=request.user.id)
        serializer = ReplySerializer(comment, many=True)
        return Response(serializer.data) 




# class SongList(APIView):
    
#     def get(self, request):
#         song = Song.objects.all()
#         serializer = SongSerializer(song, many=True)
#         return Response(serializer.data)
           
#     def post(self, request):
#         serializer = SongSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class SongDetail(APIView):  
#     def get_object(self, pk):
#         try:
#             return Song.objects.get(pk=pk)
#         except Song.DoesNotExist:
#             raise Http404
     
#     def get(self, request, pk):
#         song = self.get_object(pk)
#         serializer = SongSerializer(song)
#         return Response(serializer.data)    

#     def put(self, request, pk):     #update one song 
#         song = self.get_object(pk)
#         serializer = SongSerializer(song, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#     def delete(self, request, pk):
#         song = self.get_object(pk)
#         song.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)