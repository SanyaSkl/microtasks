import React from 'react';

type StudentType = {
    id: number
    name: string
    age: number
}

type NewComponentType = {
    students: Array<StudentType>
}

export const Students = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((objectStudent, index) => {
                return (

                    <li key={objectStudent.id}>
                        <span> {objectStudent.name}</span>
                        <span>, age: {objectStudent.age} </span>
                    </li>
                )
            })}
        </ul>
    );
};
