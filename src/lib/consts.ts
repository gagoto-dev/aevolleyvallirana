// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'AE Volei Vallirana';

export const sections = [
    {
        title: "Sobre nosotros",
        route: "/about",
    },
    //{
    //    title: "Blog",
    //    route: "/blog",
    //},
    {
        title: "Equipos",
        route: "/equipos",
    },
    {
        title: "Entrenadores",
        route: "/entrenadores",
    },
]

export const coaches = [
    {
        name: "Mel",
        key: "mel"
    },
    {
        name: "Óscar",
        key: "oscar"
    }
]

export const findCoach = (key: string) => {
    return coaches.find(coach => coach.key === key);
}

export const findTeam = (key: string) => {
    return teams.find(team => team.key === key);
}

export const teams = [
    {
        name: "Máster mixto",
        key: "master-a",
        image: "/master-a.png",
        description: "Equipo mixto de Vallirana",
        extendedDescription: "Equipo sénior mixto de Vallirana, actualmente no está federado, pero participa en torneos y entrena duro!",
        coaches: [findCoach("mel"), findCoach("oscar")],
        players: [
            {
                name: "Santi",
                dorsal: 1,
                position: "Central"
            },
            {
                name: "Alex",
                dorsal: 2,
                position: "Punta"
            },
            {
                name: "Joel",
                dorsal: 3,
                position: "Central"
            },
            {
                name: "Miguel",
                dorsal: 4,
                position: "Central"
            },
            {
                name: "Paz",
                dorsal: 5,
                position: "Punta"
            },
            {
                name: "Lope",
                dorsal: 6,
                position: "Colocador"
            },
            {
                name: "Paulo",
                dorsal: 7,
                position: "Central"
            },
            {
                name: "Óscar",
                dorsal: 8,
                position: "Colocador"
            },
            {
                name: "Sergio",
                dorsal: 9,
                position: "Colocador"
            },
            {
                name: "Gaspar",
                dorsal: 10,
                position: "Central"
            },
            {
                name: "Iker",
                dorsal: 11,
                position: "Colocador"
            },
            {
                name: "Laia",
                dorsal: 12,
                position: "Punta"
            },
            {
                name: "Mel",
                dorsal: 13,
                position: "Colocadora"
            },
            {
                name: "Isa",
                dorsal: 14,
                position: "Punta"
            },
            {
                name: "Yessenia",
                dorsal: 15,
                position: "Punta"
            },
            {
                name: "Stefanny",
                dorsal: 16,
                position: "Punta"
            },
            {
                name: "Evelyn",
                dorsal: 17,
                position: "Punta"
            }
        ]
    },
    {
        name: "Vall d'Arús",
        key: "vall-darus",
        description: "Equipo del instituto Vall d'Arús Vallirana",
        coaches: [findCoach("mel")],
    },
    {
        name: "Dominiques Vallirana",
        key: "dominiques",
        description: "Equipo de la escuela Dominiques Vallirana",
        coaches: [findCoach("oscar")],
    }
];
