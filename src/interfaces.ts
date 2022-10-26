export interface CampeonatoProps{
    _link: string,
    campeonato_id: string,
    edicao_atual:  {
        edicao_id: number,
        nome: string,
        nome_popular: string,
        slug: string,
        temporada: number,
    },
    fase_atual: {
        _link: string,
        fase_id: number,
        nome: string,
        slug: string,
        tipo: string,
    },
    logo: string,
    nome: string,
    nome_popular: string,
    rodada_atual: {
        nome: string,
        rodada: number,
        slug: string,
        status: string,
    },
    slug: string,
    status: string,
    tipo: string
}

export interface CampeonatoProps2{
    campeonato:{
    _link: string,
    campeonato_id: string,
    edicao_atual:  {
        edicao_id: number,
        nome: string,
        nome_popular: string,
        slug: string,
        temporada: number,
    },
    fase_atual: {
        _link: string,
        fase_id: number,
        nome: string,
        slug: string,
        tipo: string,
    },
    logo: string,
    nome: string,
    nome_popular: string,
    rodada_atual: {
        nome: string,
        rodada: number,
        slug: string,
        status: string,
    },
    slug: string,
    status: string,
    tipo: string
    }
}

export interface RodadaProps{
    nome: string,
	slug: string,
	rodada: number,
	status: string,
	proxima_rodada: {
		nome: string,
		slug: string,
		rodada: number,
		status: string
	},
	rodada_anterior: {
		nome: string,
		slug: string,
		rodada: number,
		status: string
	},
	partidas: [
		{
			partida_id: number,
			campeonato: {
				campeonato_id: number,
				nome: string,
				slug: string
			},
			placar: string,
			time_mandante: {
				time_id: number,
				nome_popular: string,
				sigla: string,
				escudo: string
			},
			time_visitante: {
				time_id: number,
				nome_popular: string,
				sigla: string,
				escudo: string
			},
			placar_mandante: undefined,
			placar_visitante: undefined,
			status: string,
			slug: string,
			data_realizacao: string,
			hora_realizacao: string,
			data_realizacao_iso: string,
			estadio: {
				estadio_id: number,
				nome_popular: string
			},
			_link: string
        }
    ]
}

export interface PartidaProps{
    
			partida_id: string,
			campeonato: {
				campeonato_id: number,
				nome: string,
				slug: string
			},
			placar: string,
			time_mandante: {
				time_id: number,
				nome_popular: string,
				sigla: string,
				escudo: string
			},
			time_visitante: {
				time_id: number,
				nome_popular: string,
				sigla: string,
				escudo: string
			},
			placar_mandante: string,
			placar_visitante: string,
			status: string,
			slug: string,
			data_realizacao: string,
			hora_realizacao: string,
			data_realizacao_iso: string,
			estadio: {
				estadio_id: number,
				nome_popular: string
			},
			_link: string
		
    
}

export interface TabelaProps{
	posicao: string,
	pontos: number,
	time: {
		time_id: number,
		nome_popular: string,
		sigla: string,
		escudo: string
	},
	jogos: number,
	vitorias: number,
	empates: number,
	derrotas: number,
	gols_pro: number,
	gols_contra: number,
	saldo_gols: number,
	aproveitamento: number,
	variacao_posicao: number,
	ultimos_jogos: [
		string
	]
}