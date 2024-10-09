# Project: 0x03. ES6 data manipulation

## Resources

#### Read or watch:

* [Array]
* [Typed Array]
* [Set Data Structure]
* [Map Data Structure]
* [WeakMap]

## Setup

### Install NodeJS 12.11.x
(in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

#### Install Jest, Babel, and ESLint

in your project directory, install Jest, Babel and ESList by using the supplied `package.json` and run `npm install`.

### Configuration files

Add the following files to your project directory

`package.json`
Click to show/hide file contents

`babel.config.js`
Click to show/hide file contents

`.eslintrc.js`
Click to show/hide file contents

and…
Don’t forget to run `$ npm install` when you have the `package.json`

# NB
If `npm install` fails use `npm install --legacy-peer-deps`

## Tasks
0. Function `getListStudents` that returns an array of student objects with three attributes: `id`, `firstName` and `location`.
    - File: [0-get_list_students.js](0-get_list_students.js)

1. Function `getListStudentIds` that returns an array of ids from a list of object using `map` method. The array parameter is the same format as `getListStudents` from [0-get_list_students.js](0-get_list_students.js).
    - File: [1-get_list_student_ids.js](1-get_list_student_ids.js)

2. Function `getStudentsByLocation` that returns an array of objects who are located in a specific city.
    - File: [2-get_students_by_loc.js](2-get_students_by_loc.js)

3. Function `getStudentIdsSum` that returns the sum of all the student ids using `reduce` array method.
    - File: [3-get_ids_sum.js](3-get_ids_sum.js)

4. Function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade
    - File: [4-update_grade_by_city.js](4-update_grade_by_city.js)

5. Function `createInt8TypedArray` that returns a new `ArrayBuffer` with an `Int8` value at a specific position.
    - File: [5-typed_arrays.js](5-typed_arrays.js)

6. `setFromArray` function that returns a `Set` from an array.
- File: [6-set.js](6-set.js)

7. Function `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set
    - File: [7-has_array_values.js](7-has_array_values.js)

8. Function `cleanSet` that returns a string of all the set values that start with a specific string (`startString`).
    - File: [8-clean_set.js](8-clean_set.js)

9. Function `groceriesList` that returns a map of groceries with the following `name`: `quantity` key-value pairs.
    - File: [9-groceries_list.js](9-groceries_list.js)

10. Function `updateUniqueItems` that returns an updated map for all items with initial quantity at 1.
    - File: [10-update_uniq_items.js](10-update_uniq_items.js)

11. WeakMap data structure 
    - const `weakMap` - a new instance of a `WeakMap`
    - Function `queryAPI` that accept an `endpoint` argument like:

    ```
    {
        protocol: 'http',
        name: 'getUsers',
    }
    ```
    - Tracks within the `weakMap` the number of times `queryAPI` is called for each `endpoint`.

    - When the number of queries is >= 5 throw an error with the message `Endpoint load is high`.
    - File: [100-weak.js](100-weak.js)


## Tasks

| Task | File |
| ---- | ---- |
| 0. Basic list of objects | [0-get_list_students.js](./0-get_list_students.js) |
| 1. More mapping | [1-get_list_student_ids.js](./1-get_list_student_ids.js) |
| 2. Filter | [2-get_students_by_loc.js](./2-get_students_by_loc.js) |
| 3. Reduce | [3-get_ids_sum.js](./3-get_ids_sum.js) |
| 4. Combine | [4-update_grade_by_city.js](./4-update_grade_by_city.js) |
| 5. Typed Arrays | [5-typed_arrays.js](./5-typed_arrays.js) |
| 6. Set data structure | [6-set.js](./6-set.js) |
| 7. More set data structure | [7-has_array_values.js](./7-has_array_values.js) |
| 8. Clean set | [8-clean_set.js](./8-clean_set.js) |
| 9. Map data structure | [9-groceries_list.js](./9-groceries_list.js) |
| 10. More map data structure | [10-update_uniq_items.js](./10-update_uniq_items.js) |`
