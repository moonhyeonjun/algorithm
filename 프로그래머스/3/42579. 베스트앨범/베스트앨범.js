function solution(genres, plays) {
    var answer = [];
    let genre = {};
    let genreSum = {};
    let result = [];

    for (let i = 0; i < genres.length; i++) {
        if (genre[genres[i]] === undefined) {
            genre[genres[i]] = [];
            genreSum[genres[i]] = 0;
        }
        genre[genres[i]].push([i, plays[i]]);
        genreSum[genres[i]] += plays[i];
    }

    let genreSort = [];
    
    for (let key in genreSum) {
        genreSort.push([key, genreSum[key]]);
    }
    
    genreSort.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < genreSort.length; i++) {
        genre[genreSort[i][0]].sort((a, b) => b[1] - a[1]);
        result.push(genre[genreSort[i][0]]);
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            if (j === 2) break;
            answer.push(result[i][j][0]);
        }
    }

    return answer;
}