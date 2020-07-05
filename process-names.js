var fs = require('fs');

const f = fs.readFileSync("./names.txt", {encoding:'utf8'});

const fileLength = f.length

const fullFileArray = f.split('');

let firstNamesArray = [];
let lastNamesArray = [];
let index = 0;
let firstNameBuf = [];
let lastNameBuf = [];

let newline = 10; //unicode doesnt work '\u000A'; //charcode (10); 
let space = 32; //unicode doesn't work '\u0020' //charcode (32);

//if list is first name first must init as true

//edge case #1 -- entry has space as first character in first_name
// not sure how to check for this. perhaps compare index values. perhaps another state indicator that it's the beginning of a new entry. 
let is_firstname = true;
	
//get first name
while (index < fileLength){

	if (f.charCodeAt(index) !== space && is_firstname === true){
		firstNameBuf.push(fullFileArray[index]);
	//	console.log(f.charCodeAt(index));
		}

	// end of first name. move on to last names.
	else if (f.charCodeAt(index) === space && is_firstname === true){
	//	console.log("found charCode(" + space + "@" + index);
		let joined_firstNameBuf = firstNameBuf.join('');
		firstNamesArray.push(joined_firstNameBuf);
		firstNameBuf = [];
		joined_firstNameBuf;
		is_firstname = false;
		console.log(is_firstname);
		}//no worky

	// get last name(s)
	else if (f.charCodeAt(index) !== newline && is_firstname === false){
		lastNameBuf.push(fullFileArray[index]);
		}

	// we've reached newline character. end of entry. tally up and go to next entry
	else if (f.charCodeAt(index) === newline && is_firstname === false){
		let joined_lastNameBuf = lastNameBuf.join('');
		lastNamesArray.push(joined_lastNameBuf);
		lastNameBuf = [];
		joined_lastNameBuf ;
		is_firstname = true;
		}//no worky
	index++;
	/*console.log(index);
	console.log(firstNamesArray);
	console.log(lastNamesArray);*/
}
console.log(firstNamesArray, lastNamesArray);
//if f[index](!is_space && is_firstname) {
//	firstNameBuf.push(f[index]); 
//	index++;
//	}
//
//if is_space(f[index]) === true && is_firstname === true){
//	firstNameBuf.join(); 
//	firstNamesArray.push(firstNameBuf);
//	is_firstname === false;
//	}
//
//if f.charCodeAt(index) !== newline && is_firstname === false) {
//	lastNameBuf.push(f[index]); 
//	index++;
//	}
//
//if (f.charCodeAt(index) === newline && is_firstname === false) {
//	lastNameBuf.join();
//	lastNameArray.push(lastNameBuf)
//	is_firstname === true;
//	}

//next step in refactoring 
//is to put these results in a JSON object and/or SQL insert command



/*

var isNewline = function(c) {
	if c.length >= 1
	console.log("invalid length on isNewLine Argument. must be >= 1");
	if (p.charCodeAt(c) === '\u000A')
	return true
	}
var isSpace = function(c) {
	if (c.charCodeAt(i) === 32)
	return true
	}
console.log(is_newline(f)


switch (f) {

case 


one of the two
if (is_newline) arrayPointer = firstName.array //add logic to erase newline character or replace with comma)
else arrayPointer = lastName.array;

while (fileIndex < fileLength) {
  var c = f.getChar(fileIndex)
  case c:(is_newline && is_space === false)
      f.
  case: c(is_newline && is_space)
     arrayPointer = LastNamesArray
  f.getChar(fileIndex)
*/
   




/*

function charfromindex(src, dst, i){

src.char[i](is_linebreak)
then 
dest = firstNames.array
i++
src.char[i]pop to new string 


src.char(is_newline) && src.char(is_space);
then 
i++
dest = lastNames.array
*/
