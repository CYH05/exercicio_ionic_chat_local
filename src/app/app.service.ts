
export class appService{
    films = [
        {
        name: 'jose',
        comment:'Sobre filmes'
        },
        {
            name: 'Jaum',
            comment:'sobre Filmes'
        }
    ];
    sports = [
        {
            name: 'Julinho',
            comment:'sobre esportes'
        },
        {
            name: 'Barbara',
            comment:'sobre esportes'
        }
    ];

    addFilm (name, comment){         
        this.films.push({name: name, comment:comment});
       };

    addSport(name, comment){
        this.sports.push({name: name, comment:comment});
    }   


   }