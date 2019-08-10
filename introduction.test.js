const introduction = require ("./introduction.js")

test ("introduce hannah", function(){
	expect(introduction("hannah")).toBe("hello my name is hannah");
});

test ('introduction nobody',function(){
	expect(introduction("")).toBe("hello my name is" );
});
