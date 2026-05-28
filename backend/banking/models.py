from django.db import models
from django.contrib.auth.models import User


class Account(models.Model):

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE
    )

    account_number = models.CharField(
        max_length=20,
        unique=True
    )

    ifsc_code = models.CharField(
        max_length=20,
        default="SBIN0001234"
    )

    # UPI ID 😎

    upi_id = models.CharField(
        max_length=100,
        unique=True,
        null=True
    )

    # DEBIT CARD DETAILS 😎

    card_number = models.CharField(
        max_length=16,
        null=True
    )

    cvv = models.CharField(
        max_length=3,
        null=True
    )

    expiry_date = models.CharField(
        max_length=10,
        null=True
    )

    # UPDATED 😎 DECIMAL FIELD

    balance = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=5000
    )

    transaction_pin = models.CharField(
        max_length=4,
        default="1234"
    )

    # CREATED TIMESTAMP 😎

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):

        return self.user.username


class Transaction(models.Model):

    sender = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="sent_transactions"
    )

    receiver = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="received_transactions"
    )

    receiver_account = models.CharField(
        max_length=30
    )

    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    transaction_type = models.CharField(
        max_length=20,
        default="debit"
    )

    # TRANSACTION STATUS 😎

    status = models.CharField(
        max_length=20,
        default="SUCCESS"
    )

    is_fraud = models.BooleanField(
    default=False
)

    timestamp = models.DateTimeField(
        auto_now_add=True
    )

    # TRANSACTION INDEXING 😎

    class Meta:

        ordering = ['-timestamp']

    def __str__(self):

        return f"{self.sender} -> {self.receiver}"


class Loan(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    loan_amount = models.DecimalField(
        max_digits=12,
        decimal_places=2
    )

    emi = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    due_date = models.DateField()

    loan_type = models.CharField(
        max_length=50,
        default="Personal Loan"
    )

    status = models.CharField(
        max_length=20,
        default="Pending"
    )

    remaining_balance = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=0
    )

    penalty_amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    credit_score = models.IntegerField(
        default=750
    )

    def __str__(self):

        return self.user.username