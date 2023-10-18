# Grading Students

## Solution

```cpp
vector<int> gradingStudents(vector<int> grades) {
    vector<int> result;

    for(int i = 0; i < grades.size(); i++){
        int mo = grades[i] % 5;
        if(mo < 3 || grades[i] < 38) result.push_back(grades[i]);
        else result.push_back(grades[i] - mo + 5);
    }
    
    return result;
}```