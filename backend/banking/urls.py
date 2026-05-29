from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import (
    register,
    profile,
    transactions,
    send_money,
    upi_transfer,
    forgot_password,
    reset_password,
    download_statement,
    create_loan,
    admin_dashboard,
    approve_loan,
    calculate_emi,
    check_penalty,
)

urlpatterns = [

    path(
        'register/',
        register
    ),

    # OLD LOGIN ROUTE (keep it)
    path(
        'login/',
        TokenObtainPairView.as_view()
    ),

    # NEW ROUTE FOR FRONTEND LOGIN
    path(
        'auth/login/',
        TokenObtainPairView.as_view()
    ),

    path(
        'token/refresh/',
        TokenRefreshView.as_view()
    ),

    path(
        'profile/',
        profile
    ),

    path(
        'transactions/',
        transactions
    ),

    path(
        'send-money/',
        send_money
    ),

    path(
        'forgot-password/',
        forgot_password
    ),

    path(
        'reset-password/',
        reset_password
    ),

    path(
        'download-statement/',
        download_statement
    ),

    path(
        'create-loan/',
        create_loan
    ),

    path(
        'calculate-emi/',
        calculate_emi
    ),

    path(
        'approve-loan/<int:loan_id>/',
        approve_loan
    ),

    path(
        'check-penalty/<int:loan_id>/',
        check_penalty
    ),

    path(
        'admin-dashboard/',
        admin_dashboard
    ),

    path(
        'upi-transfer/',
        upi_transfer
    ),

]