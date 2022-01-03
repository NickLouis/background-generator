function loop(list) {
    
        for (i = 0; i, list.length; i++) {
        if (i > 0) {
            if (list[i] > list[i - 1]) {
                    console.log(list[i]);
                }
            }
        }
}

var list = [199,200,208,210,200,207,240,269,260,263,270];

loop(list);