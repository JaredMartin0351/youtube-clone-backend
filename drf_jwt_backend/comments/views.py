from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
from .serializers import CommentSerializer, ReplySerializer
from django.shortcuts import render
from .models import Comment, Reply 
from django.http.response import Http404


# class CommentList(APIView):

@api_view(['GET'])
@permission_classes([AllowAny])
def get_video_comments(request, video_id):
    comment = Comment.objects.filter(video_id=video_id)  
    serializer = CommentSerializer(comment,many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_comment(request, pk):
    try:
        comment = Comment.objects.get(id=pk)
        serializer  = CommentSerializer(comment)
        return Response(serializer.data)
    except Comment.DoesNotExist:
        raise Http404

# def get(request):
#         song = Song.objects.all()
#         serializer = SongSerializer(song, many=True)
#         return Response(serializer.data)

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

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_comment(request, pk):
    comment = Comment.objects.get(id=pk)
    serializer = CommentSerializer(comment, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



#def put(self, request, pk):     #update one song 
#         song = self.get_object(pk)
#         serializer = SongSerializer(song, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_replies(request):
    reply = Reply.objects.all() 
    serializer = ReplySerializer 
    serializer = ReplySerializer(reply,many=True)
    return Response(serializer.data) 

@api_view(['GET'])
@permission_classes([AllowAny])
def get_comment_reply(request, comment_id):
    try:
        reply = Reply.objects.filter(comment=comment_id)
        serializer  = ReplySerializer(reply,many=True)
        return Response(serializer.data)
    except Comment.DoesNotExist:
        raise Http404


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