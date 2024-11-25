from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import Product
from django.contrib.auth.decorators import login_required
from cart.cart import Cart




# Create your views here.
#

def home(request):
    pro = Product.objects.all()
    return render(request,'home/home.html',{'products':pro})

def basic(request):
    return render(request, 'basic/basic.html')

def signup_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        firstname = request.POST['firstname']
        lastname = request.POST['lastname']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        if password1 == password2:
            data = User.objects.create_user(password=password1,username=username,email=email,first_name=firstname,last_name=lastname)
            data.save()
            return redirect('login-page')
        else:
            messages.error(request,'Password is Not Correct')
    return  render(request,'signup/signup.html',)

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate( username=username,password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Invalid credentials')
    return render(request, 'login/login.html')

def logout_view(request):
    logout(request)
    return redirect('home')


# products ////////////////////////////

def prodetail(request,pk):
    pro_de = Product.objects.get(id=pk)
    return render(request, 'prodetail/prodetail.html',{'product':pro_de})

    # checkout section ////////////////////////////
def checkout_view(request):
    return render(request, 'cart/checkout.html')
