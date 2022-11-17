const CreateElement = document.createElement('h1');
// console.log(CreateElement)

const CreateText = document.createTextNode('Hello');
// console.log(CreateText)
CreateElement.append(CreateText);
// console.log(CreateElement)

const Add = document.getElementsByClassName("new")[0];

// console.log(Add)
// console.log(Array.isArray(Add))
Add.prepend(CreateElement)


/* the name getElementsByClassName, Elements is plural, whereas getElementById is singular. 
Even if there’s only one instance of the class name, you still have to tell JS what number it is. 
 document.getElementsByClassName("new")[0]
 document.getelementbyclassname is an array */