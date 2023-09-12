/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    // for (let i = 0; i < heights.length; i++) {
    //     if (i === heights.length - 1) return i
    //     console.log(bricks, ladders)
    //     let curr = heights[i]
    //     if (curr < heights[i + 1]) {
    //         if (heights[i+1] - curr <= bricks && bricks !== 0) {
    //             bricks -= heights[i+1] - curr
    //         } else {
    //             if (ladders === 0) return i
    //             ladders--
    //         }
    //     } 
    // }
    let len = heights.length - 1,
        pq = new MinPriorityQueue({priority: x => x})
    for (let i = 0; i < len; i++) {
        let diff = heights[i+1] - heights[i]
        if (diff > 0) {
            if (ladders > 0) pq.enqueue(diff), ladders--
            else if (pq.front() && diff > pq.front().element)
                pq.enqueue(diff), bricks -= pq.dequeue().element
            else bricks -= diff
            if (bricks < 0) return i
        }
    }
    return len
};