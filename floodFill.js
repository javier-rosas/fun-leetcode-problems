function floodFill(image, sc, sr, color) {
    
    for (let row = 0; row < image.length; row++){
        let miniArr = []
        for (let num = 0; num < image[row].length; num++){
            
            let pixel = image[row][num]

            if (image[row+1][num] === pixel){
                return floodFill()
            }

            miniArr.push(pixel)
        }

        arr.push(miniArr)
    }

    return image
    
    
};

let image = [[1,1,1],[1,1,0],[1,0,1]]

console.log(floodFill(image, 1, 1, 2))