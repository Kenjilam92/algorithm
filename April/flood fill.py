#  Flood Fill
# #   Most graphical “paint” applications, have a ‘paintcan fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional list of integers, where each integer represents a color for that pixel. The canvas len(list) is the Y dimension of our canvas; each spot in the canvas list is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2 dimensional list of integers), starting coordinate (2-element list), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor) ! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. Note: diagonally related pixels are not considered adjacent.

# #START WITH THIS SIMPLE TEST CASE:

# input = [1,1,2,3,4];
# #        0 1 2 3 4
# startx = input[0];
# desired_color = 4;
# #hey, if the startx is not 4, we need to change it to 4
# #after that, we want to make another recursive call with the startx changing to one x ahead and one behind

# #DESIRED OUTPUT: [4,4,2,3,4]

# #THEN DO THIS PART:

# #   Input:
# #   [
# #     [3, 2, 3, 4, 3],
# #     [2, 3, 3, 4, 0],
# #     [7, 3, 3, 5, 3],
# #     [6, 5, 3, 4, 1],
# #     [1, 2, 3, 3, 3] 
# #   ]
#       [1, 2, 1, 4, 1],
# #     [2, 1, 1, 4, 0],
# #     [7, 1, 1, 5, 3],
# #     [6, 5, 1, 4, 1],
# #     [1, 2, 1, 1, 1] 

# #    and startXY of [2,2], and newColor of 1.

# #    we examine the cells that are directly (not diagonally) adjacent to startXY. If any have a value of 3 (the original value at startXY), we change its value to 1 ( newColor ) and repeat the process with its directly-adjacent neighbor cells. We repeat this until th e entire zone of similarly-colored cells is changed .
# #   Output: 
# #   [
# #     [3, 2, 1, 4, 3],
# #     [2, 1, 1, 4, 0],
# #     [7, 1, 1, 5, 3],
# #     [6, 5, 1, 4, 1],
# #     [1, 2, 1, 1, 1 ] 
# ]

arr= [
            [3, 2, 3, 4, 3],
            [2, 3, 3, 4, 0],
            [7, 3, 3, 5, 3],
            [6, 5, 3, 4, 1],
            [1, 2, 3, 3, 3] 
        ]
def floodfill(arr,x,y,newnumber,originalnum = None):
    
    if originalnum == None:
        originalnum = arr[y][x]  
    arr[y][x]=newnumber 
    if y>0 and y <len(arr)-1:
        if arr[y-1][x] == originalnum:
            floodfill(arr,x,y-1,newnumber,originalnum)
        if arr[y+1][x] == originalnum:
            floodfill(arr,x,y+1,newnumber,originalnum)
    if x>0 and x<(len(arr[y])-1):
        if arr[y][x+1] == originalnum:
            floodfill(arr,x+1,y,newnumber,originalnum)
        if arr[y][x-1] == originalnum:
            floodfill(arr,x-1,y,newnumber,originalnum) 
    return arr

print(floodfill(arr,2,2,1))