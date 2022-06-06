from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'landing/index.html')

def about_us(request):
    return render(request, 'landing/aboutus.html')