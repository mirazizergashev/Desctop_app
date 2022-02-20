import sys


def add_number():
    a = int(sys.argv[2])
    b = int(sys.argv[3])
    c=  int(sys.argv[4])
    return a+b+c

def divide():
    a = int(sys.argv[2])
    b = int(sys.argv[3])
    return a/b

def kopaytir():
    a = int(sys.argv[2])
    b = int(sys.argv[3])
    c=  int(sys.argv[4])
    d=  int(sys.argv[5])
    return a*b*c*d

def ayir():
    a = int(sys.argv[2])
    b = int(sys.argv[3])
    return a-b

try:
    if(sys.argv[1] == 'sum'):
        print(add_number())
    elif(sys.argv[1] == 'divide'):
        print(divide())
    elif(sys.argv[1] == 'kopaytir'):
        print(kopaytir())
    else :
        print(ayir())   
except:
    print("Error")
    