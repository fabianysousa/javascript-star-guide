var pessoa = {
    //propriedades - atributos
      nome: ['Bob', 'Smith'],
      idade: 32,
      sexo: 'masculino',
      interesses: ['música', 'esquiar'],
    
    //funcionalidades - metodos
      bio: function() {
        console(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
      },
      saudacao: function() {
        console('Oi! Eu sou ' + this.nome[0] + '.');
      }
};