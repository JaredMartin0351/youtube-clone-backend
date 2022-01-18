from django.shortcuts import render

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_cars(request):
    comments = Comments.objects.all()
    serializer = CommentsSerializer(comments,many=True)
    return Response(serializer.data)