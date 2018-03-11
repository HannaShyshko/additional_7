module.exports = function solveSudoku(matrix) {
  // your solution
  function solve() {
		var changed = 0;
		do {
			changed = updateSuggests();
			steps++;
			if(81<steps) {
				break;
			}
		} while (changed);
	};

	function updateSuggests() {
		var changed = 0;
		var buf = arrayDiff(solved[1][3][2], rowContent(1));
		buf = arrayDiff(buf, colContent(3));
		buf = arrayDiff(buf, sectContent(1,3));
		for(var i = 0; i<9; i++) {
			for(var j = 0; j<9; j++) {
				if('unknown' != solved[i][j][1]) {
					continue;
				}
				changed += solveSingle(i,j);
			}
		}
		return changed;
	};

	function solveSingle(i,j) {
		solved[i][j][2] = arrayDiff(solved[i][j][2], rowContent(i));
		solved[i][j][2] = arrayDiff(solved[i][j][2], colContent(j));
		solved[i][j][2] = arrayDiff(solved[i][j][2], sectContent(i, j));
		if (1 == solved[i][j][2].length) {
			markSolved(i,j,solved[i][j][2][0]);
			return 1;
		}
		return 0;
	}
}
