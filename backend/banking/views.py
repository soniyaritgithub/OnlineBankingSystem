from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import (
    IsAuthenticated,
    IsAdminUser
)

from rest_framework.response import Response

from django.contrib.auth.models import User

from django.db.models import Q

from decimal import Decimal

from math import pow

from datetime import date

from django.core.mail import send_mail

from django.conf import settings

from django.http import HttpResponse

from reportlab.pdfgen import canvas

import random

from .models import (
    Account,
    Transaction,
    Loan
)

from .serializers import (
    RegisterSerializer,
    AccountSerializer,
    TransactionSerializer,
    LoanSerializer
)

# OTP STORAGE 😎

otp_storage = {}

# REGISTER 😎

@api_view(['POST'])
def register(request):

    serializer = RegisterSerializer(
        data=request.data
    )

    if serializer.is_valid():

        serializer.save()

        return Response({
            'message': 'User Registered Successfully'
        })

    return Response(serializer.errors)

# PROFILE 😎

@api_view(['GET'])
@permission_classes([IsAuthenticated])

def profile(request):

    account = Account.objects.get(
        user=request.user
    )

    serializer = AccountSerializer(account)

    return Response(serializer.data)

# TRANSACTIONS 😎

@api_view(['GET'])
@permission_classes([IsAuthenticated])

def transactions(request):

    data = Transaction.objects.filter(
        sender=request.user
    ).order_by("-timestamp")

    serializer = TransactionSerializer(
        data,
        many=True
    )

    return Response(serializer.data)

# SEND MONEY 😎🔥

@api_view(['POST'])
@permission_classes([IsAuthenticated])

def send_money(request):

    sender = request.user

    account_number = request.data.get(
        'account_number'
    )

    ifsc_code = request.data.get(
        'ifsc_code'
    )

    amount = Decimal(
        request.data.get('amount')
    )

    transaction_pin = request.data.get(
        'transaction_pin'
    )

    try:

        receiver_account = Account.objects.get(
            account_number=account_number,
            ifsc_code=ifsc_code
        )

        sender_account = Account.objects.get(
            user=sender
        )

        if sender_account.transaction_pin != transaction_pin:

            return Response({
                'error': 'Invalid Transaction PIN'
            })

        if sender_account.balance < amount:

            return Response({
                'error': 'Insufficient Balance'
            })

        print(
            "OLD SENDER BALANCE:",
            sender_account.balance
        )

        # SENDER BALANCE UPDATE 😎

        sender_account.balance -= amount

        sender_account.save()

        print(
            "NEW SENDER BALANCE:",
            sender_account.balance
        )

        print(
            "OLD RECEIVER BALANCE:",
            receiver_account.balance
        )

        # RECEIVER BALANCE UPDATE 😎

        receiver_account.balance += amount

        receiver_account.save()

        print(
            "NEW RECEIVER BALANCE:",
            receiver_account.balance
        )

        # AI FRAUD DETECTION 😎🔥

        is_fraud = False

        if amount > 50000:

            is_fraud = True

        # SENDER TRANSACTION 😎

        Transaction.objects.create(

            sender=sender,

            receiver=receiver_account.user,

            receiver_account=receiver_account.account_number,

            amount=amount,

            transaction_type='debit',

            is_fraud=is_fraud

        )

        # RECEIVER TRANSACTION 😎

        Transaction.objects.create(

            sender=sender,

            receiver=receiver_account.user,

            receiver_account=receiver_account.account_number,

            amount=amount,

            transaction_type='credit',

            is_fraud=is_fraud

        )

        return Response({

            'message': 'Money Sent Successfully',

            'receiver': receiver_account.user.username

        })

    except Account.DoesNotExist:

        return Response({
            'error': 'Invalid Account Details'
        })

# UPI TRANSFER 😎🔥

@api_view(['POST'])
@permission_classes([IsAuthenticated])

def upi_transfer(request):

    sender = request.user

    upi_id = request.data.get("upi_id")

    amount = Decimal(
        request.data.get("amount")
    )

    try:

        receiver_account = Account.objects.get(
            upi_id=upi_id
        )

        sender_account = Account.objects.get(
            user=sender
        )

        if sender_account.balance < amount:

            return Response({
                "error": "Insufficient Balance"
            })

        # SENDER BALANCE 😎

        sender_account.balance -= amount
        sender_account.save()

        # RECEIVER BALANCE 😎

        receiver_account.balance += amount
        receiver_account.save()

        # TRANSACTION 😎

        Transaction.objects.create(

            sender=sender,

            receiver=receiver_account.user,

            receiver_account=receiver_account.account_number,

            amount=amount,

            transaction_type="UPI"

        )

        return Response({

            "message": "UPI Transfer Successful",

            "receiver": receiver_account.user.username

        })

    except Account.DoesNotExist:

        return Response({
            "error": "Invalid UPI ID"
        })

# FORGOT PASSWORD 😎

@api_view(['POST'])

def forgot_password(request):

    email = request.data.get("email")

    try:

        user = User.objects.get(
            email=email
        )

        otp = random.randint(
            100000,
            999999
        )

        otp_storage[email] = otp

        send_mail(

            'SmartBank Password Reset OTP',

            f'Your OTP is {otp}',

            settings.EMAIL_HOST_USER,

            [email],

            fail_silently=False,

        )

        return Response({
            "message": "OTP Sent Successfully"
        })

    except User.DoesNotExist:

        return Response({
            "error": "Email Not Found"
        })

# RESET PASSWORD 😎

@api_view(['POST'])

def reset_password(request):

    email = request.data.get("email")

    otp = request.data.get("otp")

    new_password = request.data.get(
        "new_password"
    )

    if str(
        otp_storage.get(email)
    ) != str(otp):

        return Response({
            "error": "Invalid OTP"
        })

    try:

        user = User.objects.get(
            email=email
        )

        user.set_password(new_password)

        user.save()

        otp_storage.pop(email)

        return Response({
            "message": "Password Reset Successful"
        })

    except User.DoesNotExist:

        return Response({
            "error": "User Not Found"
        })

# DOWNLOAD STATEMENT 😎

@api_view(['GET'])
@permission_classes([IsAuthenticated])

def download_statement(request):

    response = HttpResponse(
        content_type='application/pdf'
    )

    response[
        'Content-Disposition'
    ] = 'attachment; filename="statement.pdf"'

    p = canvas.Canvas(response)

    p.setFont(
        "Helvetica-Bold",
        18
    )

    p.drawString(
        200,
        800,
        "SmartBank Statement"
    )

    transactions = Transaction.objects.filter(
        sender=request.user
    ).order_by("-timestamp")

    y = 750

    p.setFont(
        "Helvetica",
        12
    )

    for transaction in transactions:

        p.drawString(
            50,
            y,
            f"{transaction.receiver_account}"
        )

        p.drawString(
            220,
            y,
            f"{transaction.transaction_type}"
        )

        p.drawString(
            350,
            y,
            f"₹{transaction.amount}"
        )

        p.drawString(
            450,
            y,
            str(
                transaction.timestamp.strftime(
                    "%d-%m-%Y"
                )
            )
        )

        y -= 30

    p.save()

    return response

# EMI CALCULATOR 😎

@api_view(['POST'])
@permission_classes([IsAuthenticated])

def calculate_emi(request):

    loan_amount = float(
        request.data.get("loan_amount")
    )

    interest_rate = float(
        request.data.get("interest_rate")
    )

    tenure = int(
        request.data.get("tenure")
    )

    monthly_rate = (
        interest_rate / 12 / 100
    )

    emi = (

        loan_amount *

        monthly_rate *

        ((1 + monthly_rate) ** tenure)

    ) / (

        ((1 + monthly_rate) ** tenure) - 1

    )

    return Response({

        "monthly_emi": round(emi, 2)

    })

# CREATE LOAN 😎

@api_view(['POST'])
@permission_classes([IsAuthenticated])

def create_loan(request):

    user = request.user

    loan_amount = Decimal(
        request.data.get("loan_amount")
    )

    emi = Decimal(
        request.data.get("emi")
    )

    due_date = request.data.get(
        "due_date"
    )

    loan = Loan.objects.create(

        user=user,

        loan_amount=loan_amount,

        emi=emi,

        due_date=due_date,

        remaining_balance=loan_amount

    )

    serializer = LoanSerializer(loan)

    return Response(serializer.data)

# CHECK PENALTY 😎

@api_view(['POST'])

def check_penalty(request, loan_id):

    try:

        loan = Loan.objects.get(id=loan_id)

        today = date.today()

        if today > loan.due_date:

            loan.penalty_amount += 500

            loan.save()

            return Response({

                "message": "Penalty Added",

                "penalty": loan.penalty_amount

            })

        return Response({
            "message": "No Penalty"
        })

    except Loan.DoesNotExist:

        return Response({
            "error": "Loan Not Found"
        })

# APPROVE LOAN 😎

@api_view(['POST'])
@permission_classes([IsAdminUser])

def approve_loan(request, loan_id):

    try:

        loan = Loan.objects.get(id=loan_id)

        action = request.data.get("action")

        if action == "approve":

            loan.status = "Approved"

        elif action == "reject":

            loan.status = "Rejected"

        loan.save()

        return Response({
            "message": f"Loan {loan.status}"
        })

    except Loan.DoesNotExist:

        return Response({
            "error": "Loan Not Found"
        })

# ADMIN DASHBOARD 😎🔥

@api_view(['GET'])
@permission_classes([IsAuthenticated])

def admin_dashboard(request):

    total_users = User.objects.count()

    total_loans = Loan.objects.count()

    total_transactions = Transaction.objects.count()

    fraud_alerts = Transaction.objects.filter(
        is_fraud=True
    ).count()

    return Response({

        "total_users": total_users,

        "total_loans": total_loans,

        "total_transactions": total_transactions,

        "fraud_alerts": fraud_alerts

    })