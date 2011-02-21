var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = { "classes" : [
    {"id" : 642, "sl" : 15, "el" : 87, "name" : "CallbackTest",
    "methods" : [
             {"sl" : 41, "el" : 44, "sc" : 5},  {"sl" : 46, "el" : 86, "sc" : 5}  ]}
    ,
    {"id" : 642, "sl" : 19, "el" : 39, "name" : "CallbackTest.Callback",
    "methods" : [
              {"sl" : 24, "el" : 26, "sc" : 9},  {"sl" : 28, "el" : 29, "sc" : 9},  {"sl" : 31, "el" : 33, "sc" : 9},  {"sl" : 35, "el" : 38, "sc" : 9}  ]}
    
 ]
};

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {
		"test_321" : {
					  "name" : "callback",
					  "pass" : true ,
					  "methods" : [{"sl": 24 },{"sl": 31 },{"sl": 35 },{"sl": 46 },],
					  "statements" : [{"sl": 25 },{"sl": 32 },{"sl": 36 },{"sl": 37 },{"sl": 48 },{"sl": 49 },{"sl": 50 },{"sl": 52 },{"sl": 53 },{"sl": 54 },{"sl": 55 },{"sl": 56 },{"sl": 58 },{"sl": 60 },{"sl": 61 },{"sl": 62 },{"sl": 63 },{"sl": 66 },{"sl": 67 },{"sl": 70 },{"sl": 71 },{"sl": 72 },{"sl": 75 },{"sl": 76 },{"sl": 77 },{"sl": 78 },{"sl": 81 },{"sl": 83 },{"sl": 84 },{"sl": 85 },]
					  }
 };

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [  [],   [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 321   ] ,
  [ 321   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 321   ] ,
  [ 321   ] ,
  [  ] ,
  [  ] ,
  [ 321   ] ,
  [ 321   ] ,
  [ 321   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 321   ] ,
  [  ] ,
  [ 321   ] ,
  [ 321   ] ,
  [ 321   ] ,
  [  ] ,
  [ 321   ] ,
  [ 321   ] ,
  [ 321   ] ,
  [ 321   ] ,
  [ 321   ] ,
  [  ] ,
  [ 321   ] ,
  [  ] ,
  [ 321   ] ,
  [ 321   ] ,
  [ 321   ] ,
  [ 321   ] ,
  [  ] ,
  [  ] ,
  [ 321   ] ,
  [ 321   ] ,
  [  ] ,
  [  ] ,
  [ 321   ] ,
  [ 321   ] ,
  [ 321   ] ,
  [  ] ,
  [  ] ,
  [ 321   ] ,
  [ 321   ] ,
  [ 321   ] ,
  [ 321   ] ,
  [  ] ,
  [  ] ,
  [ 321   ] ,
  [  ] ,
  [ 321   ] ,
  [ 321   ] ,
  [ 321   ] ,
  [  ] ,
  [  ] 
];