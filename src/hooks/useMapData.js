import { useState } from 'react';

function useMapData() {
    // change the places to a dictionary with key being year and the value being the coordinates, then we can use the year to get the coordinates for the map
    const places = [
        [14.0607, -87.1825], [42.3222599, -83.1763145]
    ];

    const placesAndYears = {
        '1997': [42.3222599, -83.1763145],
        '1998': [14.0607, -87.1825],
    }

    // Past MVP: Add this to JSON file, create model and data mapping function, then import it and use it here, past that firebase implementation?
    // I want to expand on a fam section, perhaps a family tree
    const family_data = {
        person_a: {
            name: "Valeria",
            location: placesAndYears['1998'],
            grandparents: {
                maternal: {
                    granpa: "Pedro Castro Fiallos",
                    grandma: "Juana Ramona Amador Matamoros"
                },
                paternal: {
                    granpa: "Víctor Martínez Silva",
                    grandma: "Mayra Soledad Cáceres Rivera"
                }
            },
            parents: {
                mother: "Rosa Amalia Castro Amador",
                father: "Victor Martínez Cáceres"
            },
            siblings: ["Víctor Ariel Martínez Castro", "Víctor Alejandro Martínez Castro"],
            nephews: []
        },
        person_b: {
            name: "Toño",
            location: placesAndYears['1997'],
            grandparents: {
                maternal: {
                    granpa: "Ronald James",
                    grandma: "Patricia James"
                },
                paternal: {
                    granpa: "Joseph Yoskovich",
                    grandma: "Loretta Yoskovich"
                }
            },
            parents: {
                mother: "Edward Allan Yoskovich",
                father: "Kimberly Ann Yoskovich"
            },
            siblings: ["Jessica Maw", "Jai Maw"],
            nephews: ["Laila Maw", "Quinn Maw", "Lucy Maw", "Pippa Maw"]
        }
    }

    return { family_data, placesAndYears, places};
}

export default useMapData;