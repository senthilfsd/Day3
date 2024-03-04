//Return median of two sorted arrays of the same size using Anonymous and IIFE function

//...........Anonymous Function.............//
let nums1=[1, 3, 6, 7, 10];
let nums2=[2, 4, 5, 9];
let findMedian = function(num1, num2){
    //combuned both array intoa single short an array(sorted + unsorted)
        let nums=nums1.concat(nums2);
    //sort the array if previouse step involves merging of the arrays in an  unsorted way
        nums.sort((a, b)=>a-b);
    //find the average of the middle two elements in the combined array
        let median=(nums[nums.length / 2]+nums[nums.length/2])/2;
    //print and return the average
        console.log(median);
    }
    findMedian(nums1, nums2);

//...........IIFE Function.............//
let nums1=[1, 3, 6, 7, 10];
let nums2=[2, 4, 5, 9];

((num1, num2){
    
        let nums=nums1.concat(nums2);
        nums.sort((a, b)=>a-b);
        let median=(nums[nums.length / 2]+nums[nums.length/2])/2;
        console.log(median);
    })(nums1, nums2);