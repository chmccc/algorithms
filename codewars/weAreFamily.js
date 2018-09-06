/*
We need a system that can learn facts about family relationships, check their consistency and answer queries about them.

The task
Create a class Family with the following methods. All arguments are strings: names of persons. Upon the first use of a name, that name is added to the family.

male(name) and female(name) returning boolean

Define the gender (corresponding to the method name) of the given person. Return false when these assignments cannot be made because of conflicts with earlier registered information.

isMale(name) and isFemale(name) returning boolean

Return true when the person has the said gender. When no gender was assigned, both methods should return false

setParent(childName, parentName) returning boolean

Defines the child-parent relationship between two persons. Returns false when the relationship cannot be made because of conflicts with earlier registered information.

getParents(name) and getChildren(name) returning array of string

Return the names of the person's parents/children in alphabetical order

Deducing information
When things can be implied from given information, it should be done.

For instance, a parent's gender can be determined as soon as the other parent's gender becomes known:

const fam = new Family();
fam.setParentOf("Vera", "George");
fam.setParentOf("Vera", "Vanessa");
fam.female("Vanessa");
fam.female("George"); // false, because:
fam.isMale("George"); // ...this is true.
Also setParentOf can return false. For example, if the relationship would infer that one becomes their own ancestor:

fam = new Family();
fam.setParentOf("Vera", "George");
fam.setParentOf("George", "Vera"); // false
$fam = new Family();
$fam->setParentOf("Vera", "George");
$fam->setParentOf("George", "Vera"); // false
Details, rules, assumptions
Although the task relates to genealogy, the rules of this kata are not claimed to be realistic. Several simplifications and rules apply, which may not hold in real life:

Strings are case sensitive, but there are no tests playing around with "Peter", "PETER" and "PeTeR".
People are uniquely identified by their name. For instance, there are no two different people called "Jim" in the same family.
Once a person has an assigned gender, it cannot be changed.
No gender conclusions should be made from personal names: "Bob" could well be a woman and "Susan" a man.
People cannot have more than one mother and one father.
The terms "parents" and "children" refer to the relatives in the immediate previous/next generations only, not to more remote ancestors or descendants.
Incest may occur, so, for example, one's parent may at the same time be their grandparent.
One cannot be their own ancestor.
Age is not accounted for. Even if some incestuous relationships would infer that one's parent is more than 5 generations older, it should be allowed.
In case a name's first occurrence is in a call of one of the two gender querying methods, the return value will always be false, as that new person does not have a known gender.
In case a name's first occurrence is in a call of one of the two relation querying methods, the return value will always be an empty array/list, as there are no relationships known yet in which that new person participates.
For the reasons in the preceding two bullet points it should not matter whether you actually store that name in these cases in your data structure, or not. In the latter case you would only store it at the next occasion when that name is mentioned in a call of one of the three other methods, that actually add information. The described interface has no way to query the difference between these two possible implementations, so you can choose freely.
*/

class Person {
  constructor(name, gender = null) {
    this.name = name;
    this.gender = null;
    this.notSameGenderAs = [];
    this.genderTested = false;
    this.parents = [];
    this.spouses = [];
    this.children = [];
  }
}

class Family {
  constructor() {
    this.members = {};
    this.rollbacks = [];
  }

  updateGender(person, gender) {
    const otherGender = gender === 'male' ? 'female' : 'male';
    person.gender = gender;
    // check for spouse gender, set if possible
    for (let spouse of person.spouses) {
      if (!spouse.gender) this.updateGender(spouse, otherGender);
      else if (spouse.gender === gender) throw new Error('updateGender: HOMOPHOBIA ALERT!');
    }
  }

  testPossibleGenders(person, gender) {
    const otherGender = gender === 'x' ? 'y' : 'x';
    person.possibleGender = gender;
    this.rollbacks.push(person);
    let allSpousesPass = true;
    for (const spouse of person.spouses) {
      // if the spouse would be the same gender, fail
      if (spouse.possibleGender === gender) return false;
      if (allSpousesPass && spouse.possibleGender === null) {
        allSpousesPass = this.testPossibleGenders(spouse, otherGender);
      }
    }
    return allSpousesPass;
  }

  rollbackPossibleGenders() {
    this.rollbacks.forEach(person => {
      person.possibleGender = null;
      person.genderTested = false;
    });
    this.rollbacks = [];
  }

  male(name) {
    const person = this.members[name] || new Person(name, 'male');
    if (person.gender === 'female') return false;
    this.updateGender(person, 'male');
    this.members[name] = person;
    return true;
  }

  female(name) {
    const person = this.members[name] || new Person(name, 'female');
    if (person.gender === 'male') return false;
    this.updateGender(person, 'female');
    this.members[name] = person;
    return true;
  }

  isMale(name) {
    return this.members[name] && this.members[name].gender === 'male';
  }

  isFemale(name) {
    return this.members[name] && this.members[name].gender === 'female';
  }

  setParentOf(childName, parentName) {
    if (childName === parentName) return false; // can't be your own parent
    const child = this.members[childName] || new Person(childName, null);
    const parent = this.members[parentName] || new Person(parentName, null);
    // make sure child doesn't already have parents
    if (child.parents.length === 2 && !child.parents.includes(parent)) return false;
    // make sure child is not already a parent of the parent or vice-versa
    if (parent.parents.includes(child) || child.children.includes(parent)) return false;
    // check own grandparent paradox
    for (const grandParent of parent.parents) { 
      for (const greatGrandParent of grandParent.parents) {
        if (greatGrandParent === child) return false;
      }
    }
    // all kinds of gender checks
    if (child.parents.length === 1) {
      const otherParent = child.parents[0];
      if (parent.gender && parent.gender === otherParent.gender) return false;
      // only run possible gender checks if we don't already know both genders
      if (!parent.gender && !otherParent.gender) {
        // if parent already has a possible gender and it doesn't work with the other parent's
        // otherwise, run the tests
        // try adding the new parent to child's parents array, then looping through all members and making sure that
        // each child's parents are not with 
        const genderCheckValid = otherParent.possibleGender
          ? this.testPossibleGenders(parent, otherParent.possibleGender === 'x' ? 'y' : 'x')
          : this.testPossibleGenders(parent, 'x') && this.testPossibleGenders(otherParent, 'y');
        if (!genderCheckValid) {
          this.rollbackPossibleGenders();
          return false;
        }
        this.rollbacks = [];
      }
    }
    // add relationships (parents' children array)
    if (!parent.children.includes(child)) parent.children.push(child);
    if (!child.parents.includes(parent)) child.parents.push(parent);
    // set spousal relationships of parents if possible
    if (child.parents.length === 2) {
      child.parents[0].spouses.push(child.parents[1]);
      child.parents[1].spouses.push(child.parents[0]);
      // update genders if possible
      if (parent.spouses[0].gender) {
        const gender = parent.spouses[0].gender === 'male' ? 'female' : 'male';
        this.updateGender(parent, gender);
      }
    }
    this.members[childName] = child;
    this.members[parentName] = parent;
    return true;
  }

  getChildrenOf(name) {
    const strings = [];
    if (this.members[name]) {
      this.members[name].children.forEach(child => strings.push(child.name));
    }
    return strings.sort();
  }

  getParentsOf(name) {
    const strings = [];
    if (this.members[name]) {
      this.members[name].parents.forEach(parent => strings.push(parent.name));
    }
    return strings.sort();
  }
}

const fam = new Family();
fam.setParentOf("AB","A");
fam.setParentOf("AB","B"); // not same as A
fam.setParentOf("CD","C"); // not same as D
fam.setParentOf("CD","D"); // not same as C
fam.setParentOf("EF","E"); // not same as 
fam.setParentOf("EF","F");
fam.setParentOf("GH","G");
fam.setParentOf("GH","H");
fam.setParentOf("IJ","I");
fam.setParentOf("IJ","J");
fam.setParentOf("KL","K");
fam.setParentOf("KL","L");
fam.setParentOf("MN","M");
fam.setParentOf("MN","N");
fam.setParentOf("OP","O"); // not same as P
fam.setParentOf("OP","P");
fam.setParentOf("QR","Q");
fam.setParentOf("QR","R");
fam.setParentOf("ST","S");
fam.setParentOf("ST","T");
fam.setParentOf("AC","A");
fam.setParentOf("AC","C"); 
fam.setParentOf("RO","O");