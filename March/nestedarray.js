x = [ [3,2,1,5,4],
      [6,3,5,2,1],
      [2,6,1,6,7] ];

for(var i=0; i<x.length; i++)
{
    console.log('i is', i);
    for(var j=i; j<x[i].length; j++)
    {
          console.log('j is', j);
          console.log(x[i][j]);
    }
}

