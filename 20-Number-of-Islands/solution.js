var numIslands = function(grid) {
    if(grid === null || grid.length === 0) {
        return 0; 
    }
    
    let numIslands = 0;
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                numIslands++;
                dfs(grid, i, j);
            }
        }
    }
    return numIslands;
};

function dfs(grid, i , j) {
        if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
            return;
        }  
        
        if (grid[i][j] === '1') {
            grid[i][j] = '#';
            dfs(grid, i + 1, j);
            dfs(grid, i - 1, j);
            dfs(grid, i, j + 1);
            dfs(grid, i, j - 1);
        }
} 