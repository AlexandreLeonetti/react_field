# 3-sum problem

def has_3_sum(A,t):
    A.sort()
    # finds if the sum of two numbers  in A equals to t - a
    return any(has_two_sum(A, t-a) for a in A)

