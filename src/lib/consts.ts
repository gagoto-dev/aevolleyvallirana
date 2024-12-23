// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'AE Volei Vallirana';

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
        coaches: [findCoach("mel"), findCoach("oscar")],
    },
    {
        name: "Vall d'Arús",
        key: "vall-darus",
        image: "/master-a.png",
        description: "Equipo del instituto Vall d'Arús Vallirana",
        coaches: [findCoach("mel")],
    },
    {
        name: "Dominiques Vallirana",
        key: "dominiques",
        image: "/master-a.png",
        description: "Equipo de la escuela Dominiques Vallirana",
        coaches: [findCoach("oscar")],
    }
];