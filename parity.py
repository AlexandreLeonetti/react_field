# write a script that gives the parity of a 16 bit binary number.


def parity(X):
    is_even = False
    while X :
        is_even = (X & 1) ^ is_even
        X = X >> 1

    return is_even



print(parity(16))
print(parity(32))
