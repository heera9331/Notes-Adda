
# class Solution:
#     def columnWithMaxZeros(self,arr,N):
#         # code here

#         # transpose of matrix
#         for i in range(N):
#             for j in range(N):
#                 arr[i][j],arr[j][i] = arr[j][i],arr[i][j]

#         colIdx=0
#         mxCnt=0
#         for i in range(0, N):
#             col = arr[i]
#             cnt = col.count(0)
#             if mxCnt < cnt:
#                 mxCnt = cnt
#                 colIdx = i

#         if mxCnt==0:
#             return -1

#         return colIdx


# n = int(input())
# mat = []

# for i in range(n):
#     row = list(map(int, input().split()))
#     mat.append(row)

# sol = Solution()
# print(sol.columnWithMaxZeros(mat, n))


#     *
#    **
#   ***
#  ****
# *****


# n = 5

# for i in range(1, n+1):

#     for j in range(1, n-i+1):
#         print(" ", end='')

#     for j in range(1, i+1):
#         print("*", end='')

#     print()


# n = 5

# for i in range(1, n+1):
#     for j in range(1, i+1):
#         print("*", end='')
#     print()

# for i in range(1, n+1):
#     for j in range(1, n-i+1):
#         print("*", end='')
#     print()


# n = 5

# for i in range(1, n+1):
#     for j in range(1, n-i+1):
#         print(" ", end='')

#     for j in range(1, i+1):
#         print("*", end='')

#     print()


# for i in range(1, n+1):
#     for j in range(1, i+1):
#         print(" ", end='')

#     for j in range(1, n-i+1):
#         print("*", end='')
#     print()


# def done():
#     print("hi")


# done()

# xyz = done

# xyz()

# print(float('inf') - float('inf'))

# words = "this is a string, contains   many words   like this"

# print(len(words.split()))

# mp = {}

# mp['a'] = 4
# mp['b'] = 2

# print(min(mp.keys()))

# num = "3200014888"
# n = len(num)
# ans = ""
# for i in range(n-2):
#     # n = 3
#     # 0 1 2 => n
#     # 0 1 => n-1
#     # 0 => n-2

#     a=num[i]
#     b=num[i+1]
#     c=num[i+2]
#     tmp = num[i: i+3]
#     if a==b and b==c and num.count(tmp)==1:
#         ans=tmp
#         break

# print(ans)


# n = 14

# s = 0

# while n:

#     if n%2 == 0:
#         s += n//2
#         n = n//2
#     else:
#         s += n//2+1
#         n = n // 2 + 1

#         if n == 1:
#             break

# print(s)


# def fnx(s: str, t: str):

#     if len(s) != len(t):
#         return False

#     mp1 = {}

#     for ch in s:
#         if ch not in mp1:
#             mp1[ch] = 0

#         mp1[ch] = mp1.get(ch)+1

#     mp2 = {}

#     for ch in t:
#         if ch not in mp2:
#             mp2[ch] = 0

#         mp2[ch] = mp2.get(ch)+1

#     val1 = list(mp1.values())
#     val2 = list(mp2.values())

#     if val1 == val2:
#         return True
#     return False


# s = "paper"
# t = "title"
# print(fnx(s, t))


# m = {'a': 3, 'b': 0}

# print('b' in m)


# print(all('heera'))

# print(* range(5)) # not include 5
# print(* range(2,7)) #include 2

# def outer_fnx(x):

#     def inner_fnx(y):
#         return x+y

#     return inner_fnx

# closure = outer_fnx(10)
# result = closure(5)

# print(result)


# class Super:
#     def __init__(self) -> None:
#         print("Super const called")

# class Child(Super):
#     def __init__(self) -> None:
#         super().__init__()
#         print("Child constructor called")

# c1 = Child()


# var = 4

# def fn():
#     var = 5

# fn()

# print(var)

# if True:
#     var = 4

# print(var)


# def fn():
#     var = 5

#     def fnx():
#         nonlocal var
#         var = var + 5
#         print(var)

#     fnx()

# fn();


# st = 'this is heera singh lodhi'
# st = st.replace(" ", "")
# print(st)
# class Solution:

#     def enter(expr: str):
#         s = []
#         expr = expr.replace(" ", "")

#         for char in expr:
#             if char == ')':
#                 a = int(s.pop())
#                 op = s.pop()
#                 b = int(s.pop())
#                 if op == '-':
#                     s.append(b-a)
#                 elif op == '+':
#                     s.append(b+a)
#                 else:
#                     pass
#             else:
#                 # operands and operator and (
#                 s.append(char)


# class Solution:
#     def wordPattern(self, pattern: str, s: str) -> bool:
#         words = s.split()

#         n = len(pattern)
#         mp = {}

#         for i in range(n//2):
#             char = pattern[i]
#             value = words[i]

#             if char not in mp:
#                 mp[char] = value

#         for i in range(n):
#             char = pattern[i]
#             value = words[i]

#             if mp[char] != value:
#                 return False

#         return True


# class Solution:
#     def wordPattern(self, pattern: str, s: str) -> bool:

#         s = s.split()

#         return (len(set(pattern)) ==
#                 len(set(s)) ==
#                 len(set(zip_longest(pattern,s))))

# pattern = input()
# s = input()
# calc = Solution()
# print(calc.wordPattern(pattern, s))
