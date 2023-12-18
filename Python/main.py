

# .1 Given a stringstrof lengthN, find the length of the largest substring which contains only consonants.

# For example:str="abced", the sub-strings containing only consonants are:"bc"and"d", largest among them is"bc", so the output will be2, which is the length of largest sub-string containing only consonant.

# Another example:str="bfgedauty", here"bfg"is the largest substring without vowels or containing only consonants, so the output will be 3.

# Note:Input contains only the lowercase English alphabet.

# def largestSubStrWithCons(st: str)->int:
#     n = len(st)
#     cnt = 0
#     mx = 0

#     for i in range(n):
#         ch = st[i]
#         if ch not in "aeiou":
#             cnt+=1
#         else:
#             mx = max(mx, cnt)
#             cnt=0

#     mx = max(mx, cnt)
#     return mx

# st = input()
# print(largestSubStrWithCons(st))


"""
cnt = 0, => 1 => 2
a = [2,3,5,6,7]

b = [1, 2, 4, 6]

ans = 2
"""

# def commentElements(arr1, arr2):
#     cnt=0
#     i = 0 # iter for arr1
#     j = 0 # iter for arr2

#     # reversing arr2
#     arr2 = arr2[::-1]

#     while i<len(arr1) and j<len(arr2):
#         if arr1[i] == arr2[j]:
#             cnt+=1
#             i+=1
#             j+=1
#         else:
#             if arr1[i]>arr2[j]:
#                 j+=1
#             else:
#                 i+=1
#     return cnt


# arr1 = list(map(int, input().split()))
# arr2 =  list(map(int, input().split()))
# print(commentElements(arr1, arr2))

# class Solution:
#     def is_safe(self, board, i, j, val) -> bool:
#         # 3x3 grid

#         # row

#         # column

#         pass

#     def isValidSudoku(self, board: list[int]) -> bool:

#         val = 1

#         for i in range(0, 9):
#             for j in range(0, 9):
#                 if self.is_safe(board, i, j, val):
#                     pass


# s1 = Solution()

# board = []

# for i in range(9):
#     row = list(input())
#     board.append(row)

# print(*board)

# import numpy as np

# def grid3x3(board, i, j, val):
#     i = (i // 3) * 3
#     j = (j // 3) * 3

#     for x in range(i, i+3):
#         print(mat[x][j: j+3])

#         if val in mat[x][j: j+3]:
#             return False

#     return True

# mat = [
#     [1, 2, 3, 4, 5, 6, 7, 8, 9],
#     [1, 2, 3, 3, 2, 1, 3, 4, 5],
#     [1, 2, 1, 3, 2, 1, 3, 4, 5],
#     [1, 2, 3, 8, 2, 1, 3, 4, 5],
#     [1, 2, 3, 2, 2, 1, 3, 4, 5],
#     [1, 4, 3, 3, 2, 8, 3, 4, 2],
#     [1, 2, 3, 3, 2, 1, 3, 4, 5],
#     [1, 2, 4, 3, 2, 1, 9, 9, 5],
#     [1, 2, 3, 3, 2, 1, 3, 4, 5],
# ]

# print(grid3x3(mat, 3, 0, 5))

# mat = np.array(mat)

# i = 0
# j = 0

# for x in range(i, i+3):
#     print(mat[x][j: j+3])

# print(mat)
# print(mat[0:2]/[0:2])
# print(mat[1:3][0:1])


# class Solution:
#     def is_s(self, mat, i, j): 
#         # checking in row
#         row = mat[i]

#         for x in range(len(row)):
#             if x != j and mat[x] == 1:
#                 return False

#         # checking column
#         cnt = 0
#         for row in mat:
#             if cnt != i and row[j] == 1:
#                 return False
#             cnt += 1

#         return True

#     def numSpecial(self, mat) -> int:
#         n = len(mat)
#         m = len(mat[0])
#         cnt = 0

#         for i in range(n):
#             for j in range(m):
#                 if mat[i][j] == 1 and self.is_s(mat, i, j):
#                     cnt += 1

#         return cnt


# mat = [
#     [1, 0, 0],
#     [0, 0, 1],
#     [1, 0, 0]
# ]

# s1 = Solution()
# print(s1.numSpecial(mat))
# # s1.visitCol(mat, 2)


# class Solution:
     

#     def onesMinusZeros(self, mat)   :
#         n = len(mat)
#         m = len(mat[0])

#         # store the row idx -> frequency
#         mpRow0 = {}
#         mpRow1 = {}
#         mpCol0 = {}
#         mpCol1 = {}

#         # count 0's and 1's in row

#         for i in range(n):
#             row = mat[i]

#             mpRow0[i] = row.count(0)
#             mpRow1[i] = row.count(1)

#         # count 0's and 1's in column

#         for j in range(m):
#             ones = 0
#             zeros = 0

#             for row in mat:
#                 if row[j]==1:
#                     ones+=1
#                 else:
#                     zeros+=1

#             mpCol0[j] = zeros
#             mpCol1[j] = ones

#         # let's calculate ans

#         ans = [] 
        
#         for i in range(n):
#             tmp = []
#             for j in range(m):
#                 diff = mpRow1[1]+mpCol1[1] - mpRow0[0]-mpCol0[0]
#                 tmp.append(diff)

#             ans.append(tmp)

#         return ans



# mat = [
#     [0,1,1],
#     [1,0,1],
#     [0,0,1]
# ]
# s1 = Solution()
# print(s1.onesMinusZeros(mat))
