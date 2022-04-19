from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username')

class registerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username','password')
        extra_kwargs= {'password':{'write_only': True}}
    
    def create(self,data):
        user = User.objects.create_user(data['username'], data['password'])
        return user
    
class loginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self,data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("incorrect credentials")