from rest_framework import serializers

from django.contrib.auth.models import User

from .models import Account, Transaction, Loan

import random


class RegisterSerializer(serializers.ModelSerializer):

    class Meta:

        model = User

        fields = [
            'username',
            'email',
            'password'
        ]

        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }

    def create(self, validated_data):

        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )

        # ACCOUNT CREATE 😎

        Account.objects.create(

            user=user,

            account_number=str(
                random.randint(
                    1000000000,
                    9999999999
                )
            ),

            ifsc_code="SBIN0001234",

            balance=5000,

            transaction_pin="1234"
        )

        return user


class AccountSerializer(serializers.ModelSerializer):

    class Meta:

        model = Account

        fields = '__all__'


class TransactionSerializer(serializers.ModelSerializer):

    class Meta:

        model = Transaction

        fields = "__all__"

class LoanSerializer(serializers.ModelSerializer):

    class Meta:

        model = Loan

        fields = "__all__"