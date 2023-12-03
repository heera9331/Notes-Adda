
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

