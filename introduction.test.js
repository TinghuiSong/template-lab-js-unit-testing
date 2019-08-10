const introduction = require ("./introduction.js")

test ("introduce hannah", function(){
	expect(introduction("hannah")).toBe("hello my name is hannah");
})
