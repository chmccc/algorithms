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
  constructor(name, gender) {
    this.name = name;
    this.gender = gender ? gender : null;
    this.mother = null;
    this.father = null;
    this.parents = [];
    this.spouse = null;
    this.children = [];
  }
}

class Family {
  constructor() {
    this.members = {};
  }
  updateGender(person, gender) {
    const otherGender = gender === 'male' ? 'female' : 'male';
    person.gender = gender; 
    // check for spouse gender, set if possible
    if (person.spouse) {
      if (!person.spouse.gender) person.spouse.gender = otherGender;
      else if (person.spouse.gender === gender) throw new Error('updateGender: HOMOPHOBIA ALERT!');
    }
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
    if (child.parents.length > 1) return false;
    // make deductions -- function?
    // make sure parent gender is OK
    if (child.parents.length === 1 && parent.gender === child.parents[0].gender) return false;
    if (child.father && parent.gender === 'male' || child.mother && parent.gender === 'female') return false;
    // make sure child is not already a parent of the parent or vice-versa
    if (parent.parents.includes(child) || child.children.includes(parent)) return false;
    // add relationships (parents' children array)
    parent.children.push(child);
    child.parents.push(parent);
    // set spousal relationships of parents if possible
    if (child.parents.length === 2) {
      child.parents[0].spouse = child.parents[1];
      child.parents[1].spouse = child.parents[0];
      // update parents' genders
      if (parent.gender && !parent.spouse.gender) {
        const otherGender = parent.gender === 'male' ? 'female' : 'male';
        updateGender(parent.spouse, otherGender);
      }
    }
    this.members[childName] = child;
    this.members[parentName] = parent;
    return true;
  }
  getChildrenOf(name) {
    let strings = [];
    if (this.members[name]) {
      this.members[name].children.forEach(child => strings.push(child.name));
    }
    return strings;
  }
  getParentsOf(name) {
    let strings = [];
    if (this.members[name]) {
      this.members[name].parents.forEach(parent => strings.push(parent.name));
    }
    return strings;
  }
}

const fam = new Family();
fam.setParentOf("Vera", "George");
fam.setParentOf("Vera", "Vanessa");
fam.female("Vanessa");
fam.female("George"); // false, because:
fam.isMale("George"); // ...this is true.