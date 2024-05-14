#  A simple cipher is built on the alphabet wheel  which has uppercase English letters ['A'-'Z'] written on it:

# Given an encrypted string consisting of English letters ['A'-'Z']  only, decrypt the string by replacing each character with the  character away on the wheel in the counter-clockwise direction.  Counter-clockwise is the opposite direction in which the hands on a clock usually move. In the image, Z is 1 unit counter-clockwise from A.

# example:
# encrypted = 'VTAOG'
# k = 2
 

def simpleCipher(encrypted, k):
    # Write your code here
    alphabet = list('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    result = ''

    for char in encrypted:
        if char.isalpha():
            new_index = (alphabet.index(char) - k) % len(alphabet)
            result += alphabet[new_index]
        else:
            result += char

    return result


    
    
# Madam C.J. Walker is historically renowned for becoming the first African-American businesswoman in America. One of her business plans involving the sale of cosmetics and perfumes for women is a modification of the standard 0-1 knapsack problem.

# Walker's business plan begins with an array of n items. She wants to buy products and resell them for profit. The cost of buying the i ^ (th) item is cost jr and it earns her a profit of 2 ^ i She has a total of x amount of money.

# Find the maximum profit that can be generated for the given amount of money. As the answer can be rather large, report the answer as maxProfit % (10 ^ 9 + 7) where % denotes modulo operator.

# Example

# Suppose there are n = 5 items with costs cos t = lfloor10 rfloor 20, 14, 40, 50 ], and the initial amount of money that Walker has is x = 70

# Some possible combination of items Walker can buy are:

# She can buy items 0, 1, and 2 for a cost of 44 and obtain a profit of 2 ^ 0 + 2 ^ 1 + 2 ^ 2 = 7

# She can buy items 0 and 4 for a cost of 60 and obtain a profit of 2 ^ 0 + 2 ^ 4 = 17

# She can buy items 1 and 4 for a cost of 70 and obtain a profit of 2 ^ 1 + 2 ^ 4 = 18

# • She can buy items 2 and 4 for a cost of 64 anit obtain a profit of 3 ^ 2 + 2 ^ 4 * 20

# Out of all the possible combinations, the maximum

    
def calculateMaximumProfit(cost, x):
    
    print (cost)
    print (x)
    MOD = 10**9 + 7
    n = len(cost)
    dp = [0] * (x + 1)
    for i in range(n):
        for j in range(x, cost[i] - 1, -1):
            dp[j] = max(dp[j], dp[j - cost[i]] + (1 << i))
    return dp[x] % MOD


cost = [3, 4, 1]
x = 8
print(calculateMaximumProfit(cost, x))




def min_removals_almost_sorted(arr):
    # Write your code here
    
    print(arr)
    n = len(arr)
    count = 0
    
    for i in range(1, n):
        if arr[i] < arr[i - 1]:
            count += 1

    # If all elements are in place or only one element is out of place, return 0 or 1 respectively
    if count <= 1:
        return count
    
    # Otherwise, check all possible removal combinations
    min_removal = float('inf')
    for i in range(n):
        removed = arr[:i] + arr[i+1:]
        sorted_removed = sorted(removed)
        diff = sum(1 for a, b in zip(arr, sorted_removed) if a != b)
        min_removal = min(min_removal, diff)
    
    return min_removal

# Example usage
arr = [3, 4, 2, 5, 1]
min_removals = min_removals_almost_sorted(arr)
print("Minimum removals for almost sorted:", min_removals)  # Output: 1

    
def get_min_operations(n):
    rlt = 0
    cnt = 0
    while n:
        if n & 1:
            cnt += 1
        elif cnt:
            rlt += 1
            cnt = 0 if cnt == 1 else 1
        n >>= 1
    if cnt == 1:
        rlt += 1
    elif cnt > 1:
        rlt += 2
    return rlt

# Test the function
n = int(input("Enter a positive integer: "))
min_ops = get_min_operations(n)
print("Minimum number of operations to convert", n, "to 0:", min_ops)

